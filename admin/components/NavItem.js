import React from "react";
import NextLink from "next/link";
import { Flex, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

function NavItem(props) {
  return (
    <LinkBox
      py="2"
      px="4"
      mb="2"
      rounded="md"
      bg={props.isActive && "messenger.50"}
      role="group"
    >
      <Flex alignItems="center">
        <Icon
          as={props.icon}
          w="5"
          h="5"
          color={props.isActive ? "messenger.500" : "gray.500"}
          mr="3"
          _groupHover={{ color: "messenger.500" }}
        />
        <NextLink href={props.href} passHref>
          <LinkOverlay
            fontWeight="500"
            fontSize="sm"
            color={props.isActive ? "messenger.500" : "gray.600"}
            _groupHover={{ color: "messenger.500" }}
          >
            {props.children}
          </LinkOverlay>
        </NextLink>
      </Flex>
    </LinkBox>
  );
}

export default NavItem;
