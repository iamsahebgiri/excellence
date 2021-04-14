import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HiOutlineX } from "react-icons/hi";

const CreateQuestionHeading = () => {
  const router = useRouter();
  return (
    <>
      <Flex
        borderBottomWidth="1px"
        bg="gray.50"
        zIndex="2"
        position="fixed"
        width="100%"
        p="3"
        alignItems="center"
      >
        <IconButton
          p="2"
          h="10"
          w="8"
          mr="4"
          rounded="full"
          variant="ghost"
          onClick={() => {
            router.back();
          }}
        >
          <Icon as={HiOutlineX} h="5" w="5" color="gray.600" />
        </IconButton>
        <Heading size="sm">Add a question</Heading>
        <Spacer />

        <Button size="sm" mr="4">
          Save and add new
        </Button>
        <Button size="sm" colorScheme="messenger" type="submit">
          Save question
        </Button>
      </Flex>
      <Box pt="20" />
    </>
  );
};

export default CreateQuestionHeading;
