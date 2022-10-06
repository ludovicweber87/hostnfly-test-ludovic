import { Box, HStack, SimpleGrid, Stack, useColorMode } from "@chakra-ui/react";
import {
  faCalendarDay,
  faDroplet,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Actors, House } from "types/actor";
import { Information } from "../";

type ActorsListProps = {
  actors: Actors;
};

const imageHouse = (house: House) => {
  switch (house) {
    case "Gryffindor":
      return "gryffindor.png";
    case "Slytherin":
      return "slytherin.png";
    case "Hufflepuff":
      return "hufflepuff.png";
    case "Ravenclaw":
      return "ravenclaw.png";
    default:
      return null;
  }
};

export const ActorsList = ({ actors }: ActorsListProps) => {
  const { colorMode } = useColorMode();
  return (
    <SimpleGrid columns={[1, 2, 2, 3]} spacing="5">
      {actors.map((actor, index) => (
        <Link href={`actor/?actorName=${actor.name}`} key={index} passHref>
          <Box
            _hover={{
              cursor: "pointer",
              backgroundColor: colorMode === "light" ? "gray.300" : "gray.900",
              transition: "all 0.2s ease-in-out",
            }}
            as="a"
            rounded="md"
            p="4"
            position="relative"
            boxShadow="dark-lg"
            overflow="hidden"
          >
            {actor.house && (
              <Box opacity="0.3" position="absolute" top="0" right="0">
                <Image
                  width="30px"
                  height="50px"
                  src={`/${imageHouse(actor.house)}`}
                  layout="fixed"
                  alt={actor.house}
                />
              </Box>
            )}
            <HStack align="self-start" spacing="4">
              {actor.image && (
                <Box rounded="lg" overflow="hidden">
                  <Image
                    width="105px"
                    height="130px"
                    src={actor.image}
                    layout="fixed"
                    alt={actor.name}
                  />
                </Box>
              )}
              <Stack align="start">
                <Information
                  value={actor.name}
                  icon={actor.gender === "male" ? faMars : faVenus}
                />
                <Information value={actor.dateOfBirth} icon={faCalendarDay} />
                <Information value={actor.ancestry} icon={faDroplet} />
              </Stack>
            </HStack>
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
};
