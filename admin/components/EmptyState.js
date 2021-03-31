import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { HiNewspaper } from "react-icons/hi";

const EmptyState = () => {
  return (
    <Flex flexDir="column" alignItems="center" width="sm">
      <Icon as={HiNewspaper} w="12" h="12" color="gray.300" mb="4" />
      <Heading size="md" color="gray.800" mb="2">
        No papers created yet
      </Heading>
      <Text color="gray.600">
        To get started quickly, click on create a test paper.
      </Text>
    </Flex>
  );
};

export default EmptyState;
