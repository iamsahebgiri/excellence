import {
  Box,
  Circle,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Spacer,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { HiCheckCircle, HiOutlineX } from "react-icons/hi";
import { IoApps } from "react-icons/io5";
import QuestionItem from "@/components/common/QuestionItem";

const MobileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton h="10" w="10" rounded="full" bg="gray.200" onClick={onOpen}>
        <Icon as={IoApps} h="5" w="5" color="gray.600" />
      </IconButton>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <Flex alignItems="center">
                <Text>Questions Pallete</Text>
                <Spacer />
                <IconButton p="2" h="10" w="8" rounded="full" onClick={onClose}>
                  <Icon as={HiOutlineX} h="5" w="5" color="gray.600" />
                </IconButton>
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              <Wrap>
                <WrapItem>
                  <QuestionItem answered />
                </WrapItem>
                <WrapItem>
                  <QuestionItem notAnswered />
                </WrapItem>
                <WrapItem>
                  <QuestionItem />
                </WrapItem>
                <WrapItem>
                  <QuestionItem notAnswered />
                </WrapItem>
                <WrapItem>
                  <QuestionItem answeredAndReviewed />
                </WrapItem>
                <WrapItem>
                  <QuestionItem />
                </WrapItem>
                <WrapItem>
                  <QuestionItem answered />
                </WrapItem>
                <WrapItem>
                  <QuestionItem reviewed />
                </WrapItem>
                <WrapItem>
                  <QuestionItem answeredAndReviewed />
                </WrapItem>
                <WrapItem>
                  <QuestionItem />
                </WrapItem>
              </Wrap>
            </DrawerBody>

            <DrawerFooter flexDir="column">
              <Flex width="full" alignItems="center">
                <Box h="5" w="5" rounded="sm" bg="green.600" mr="3" />
                <Text>Answered</Text>
              </Flex>

              <Flex width="full" alignItems="center">
                <Box h="5" w="5" rounded="sm" bg="red.600" mr="3" />
                <Text>Not answered</Text>
              </Flex>

              <Flex width="full" alignItems="center">
                <Box h="5" w="5" rounded="sm" bg="purple.600" mr="3" />
                <Text>Marked for review</Text>
              </Flex>

              <Flex position="relative" width="full" alignItems="center">
                <Box h="5" w="5" rounded="sm" bg="purple.600" mr="3" />
                <Circle
                  position="absolute"
                  bg="white"
                  rounded="full"
                  top="3"
                  left="3"
                >
                  <Icon as={HiCheckCircle} h="3" w="3" color="green.600" />
                </Circle>
                <Text>Answered and marked</Text>
              </Flex>
              <Flex width="full" alignItems="center">
                <Box h="5" w="5" rounded="sm" bg="gray.100" mr="3" />
                <Text>Not visited</Text>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
