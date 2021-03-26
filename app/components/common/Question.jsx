import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineBookmark, HiOutlineRefresh } from "react-icons/hi";

const Question = () => {
  const [value, setValue] = useState(" ");
  return (
    <Box mb="4">
      <Flex px="4" alignItems="center">
        <Box>
          <Heading size="md">Q. 1</Heading>
        </Box>
        <Spacer />
        <IconButton
          p="2"
          h="10"
          w="8"
          rounded="full"
          variant="ghost"
          onClick={() => console.log("cliked.")}
        >
          <Icon as={HiOutlineBookmark} h="5" w="5" color="gray.600" />
        </IconButton>

        <IconButton
          p="2"
          h="10"
          w="8"
          rounded="full"
          variant="ghost"
          onClick={() => setValue(" ")}
        >
          <Icon as={HiOutlineRefresh} h="5" w="5" color="gray.600" />
        </IconButton>
      </Flex>
      <Flex px="4">
        <Box>
          What is 2 multiplied three times?
          {/* <BlockMath>{String.raw`\frac{n!}{k!(n-k)!} = \binom{n}{k}`}</BlockMath> */}
        </Box>
      </Flex>
      <Flex p="4">
        <Box>
          <RadioGroup onChange={setValue} value={value} name="options">
            <Stack direction="column">
              <Radio value="1">20 m</Radio>
              <Radio value="2">30 m</Radio>
              <Radio value="3">40 m</Radio>
              <Radio value="4">50 m</Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Flex>
    </Box>
  );
};

export default Question;
