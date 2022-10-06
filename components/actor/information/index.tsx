import { Flex, Text } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

type BirthdateProps<T> = {
  value: T;
  icon: IconDefinition;
};

export const Information = <T extends ReactNode>({
  value,
  icon,
}: BirthdateProps<T>) => {
  return (
    <Flex alignItems="center" gap="2">
      <FontAwesomeIcon icon={icon} color="grey" size="xs" />
      <Text pr="10" textAlign="center">
        {value || "N/A"}
      </Text>
    </Flex>
  );
};
