import { Box, Container, FormLabel, Input, Stack } from "@chakra-ui/react";
import { ActorsList } from "@hostnfly/components/actor/list";
import Navbar from "@hostnfly/components/navbar";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { Actors } from "types/actor";
import { fetcher } from "../lib";

type HomeProps = {
  actors: Actors;
};

const Home = ({ actors }: HomeProps) => {
  const [tempActors, setTempActors] = useState<Actors>(actors);
  return (
    <>
      <Navbar />
      <Container my="6" maxW="6xl">
        <Stack spacing="5">
          <Box>
            <FormLabel>Rechercher un acteur ou une actrice</FormLabel>
            <Input
              placeholder="Rechercher"
              onChange={(e) =>
                setTempActors(
                  actors.filter((actor) =>
                    actor.name.includes(e.currentTarget.value)
                  )
                )
              }
            />
          </Box>
          {actors && <ActorsList actors={tempActors} />}
        </Stack>
      </Container>
    </>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const data = await fetcher<Actors>(
    "https://hp-api.herokuapp.com/api/characters",
    { method: "GET" }
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { actors: [...data].slice(0, 100) },
  };
};

export default Home;
