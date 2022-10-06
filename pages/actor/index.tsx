import { fetcher } from "@hostnfly/lib/fetcher";
import { GetServerSideProps } from "next";
import { Actor, Actors } from "types/actor";

type ActorNameProps = {
  actor: Actor;
};

import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  IconButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

interface BlogTagsProps {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<BlogTagsProps> = ({ tags, marginTop }) => {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          tag.length && (
            <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
              {tag}
            </Tag>
          )
        );
      })}
    </HStack>
  );
};

const Actor = ({ actor }: ActorNameProps) => {
  const router = useRouter();
  return (
    <Container maxW="7xl" p="12">
      <Heading as="h1">
        <HStack alignItems="center">
          <IconButton
            onClick={() => router.back()}
            aria-label="Retour"
            mr="6"
            icon={<FontAwesomeIcon icon={faArrowLeft} size="xs" />}
          />
          <Text>{actor.name}</Text>
        </HStack>
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Box display="flex" marginRight="3" position="relative">
          <Box zIndex="2">
            {actor.image && (
              <Image
                borderRadius="lg"
                src={actor.image}
                alt={actor.name}
                objectFit="contain"
              />
            )}
          </Box>
        </Box>
        <Box
          ml="4"
          display="flex"
          flex="1"
          flexDirection="column"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags
            tags={[
              actor.gender,
              actor.ancestry,
              actor.hairColour,
              actor.dateOfBirth,
              actor.house,
            ]}
          />
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (req) => {
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
    props: {
      actor: [...data]
        .slice(0, 100)
        .find((actor) => actor.name === req.query.actorName),
    },
  };
};

export default Actor;
