import NextLink from "next/link";
import { Flex, Heading, Button } from "@chakra-ui/react";

const PageHeading = ({ title, btn, href }) => {
  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px"
      borderBottomColor="gray.200"
      pb="3"
    >
      <Heading size="lg" as="h2">
        {title}
      </Heading>
      {btn != null && (
        <NextLink href={href} passHref>
          <Button as="a" variant="solid" size="md" colorScheme="messenger">
            {btn}
          </Button>
        </NextLink>
      )}
    </Flex>
  );
};

export default PageHeading;
