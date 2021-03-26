import Question from "@/components/common/Question";
import QuestionItem from "@/components/common/QuestionItem";
import Header from "@/components/mobile/Header";
import {
  Box,
  Button,
  Flex,
  Tabs,
  Text,
  TabPanels,
  TabPanel,
  Heading,
  Grid,
  GridItem,
  Square,
  Center,
  Circle,
  Wrap,
  WrapItem,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { HiCheckCircle, HiOutlineX } from "react-icons/hi";
import { IoApps } from "react-icons/io5";

function Index() {
  return (
    <Box bg={["white", "white", "gray.100"]} minH="100vh">
      <Tabs variant="unstyled">
        <Header />

        {/* Mobile Questions List */}
        <Box display={["block", "block", "none"]}>
          <Heading size="md" my="6" textAlign="center">
            Physics
          </Heading>

          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />

          <Heading size="md" my="6" textAlign="center">
            Chemistry
          </Heading>

          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />

          <Heading size="md" my="6" textAlign="center">
            Mathematics
          </Heading>

          <Question />
          <Question />
          <Question />

          <Flex p="4">
            <Button width="full" colorScheme="messenger">
              Submit now
            </Button>
          </Flex>
        </Box>

        <Box display={["none", "none", "block"]} px="4">
          <Flex justifyContent="flex-end" pb="4">
            <Text mr="3">Time left </Text>
            <Heading size="md">1:20:26</Heading>
          </Flex>

          <Flex>
            <Flex
              css="height: calc(100vh - 160px)"
              flexDir="column"
              position="relative"
              flex="2"
              bg="white"
              rounded="md"
              shadow="sm"
              mr="6"
              padding="5"
            >
              <Question />
              <Spacer />
              <Flex width="full">
                <Flex>
                  <Button mr="4">Clear response</Button>
                  <Button>Mark as review</Button>
                </Flex>
                <Spacer />
                <Flex>
                  <Button mr="4">Previous</Button>
                  <Button>Next</Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              flexDir="column"
              width="320px"
              bg="white"
              rounded="md"
              shadow="sm"
              padding="5"
            >
              <Flex pb="4">
                <Heading size="md">Question Pallete</Heading>
              </Flex>
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

              <Spacer />
              <Box>
                <Box my="4">
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
                </Box>

                <Button colorScheme="messenger" width="full">
                  Submit now
                </Button>
              </Box>
            </Flex>
          </Flex>

          {/* <TabPanels>
            <TabPanel>
              <p>Physics</p>
            </TabPanel>
            <TabPanel>
              <p>Chemsitry</p>
            </TabPanel>
            <TabPanel>
              <p>Mathematics</p>
            </TabPanel>
          </TabPanels> */}
        </Box>
      </Tabs>
    </Box>
  );
}

export default Index;
