import NextLink from "next/link";
import {
  Box,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";

const PaperListItem = () => {
  return (
    <LinkBox
      p="2"
      mt="4"
      border="1px"
      borderColor="transparent"
      rounded="md"
      _hover={{
        shadow: "sm",
        borderColor: "gray.200",
        cursor: "pointer",
      }}
      role="group"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Image
            height="50px"
            width="50px"
            src="https://source.unsplash.com/random/80x80"
            mr={4}
            rounded="md"
          />
          <Box>
            <NextLink href="/papers/12" passHref>
              <LinkOverlay>
                <Heading size="sm" as="h3" color="gray.800">
                  CBSE 2020
                </Heading>
              </LinkOverlay>
            </NextLink>

            <Text fontSize="smaller" color="gray.500">
              Created by Saheb Giri
            </Text>
          </Box>
        </Flex>
        <Flex alignItems="center" pr="4">
          <Text fontSize="small" color="gray.500">
            last updated on 2 days ago
          </Text>
        </Flex>
      </Flex>
    </LinkBox>
  );
};

export default PaperListItem;
