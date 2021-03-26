import {
  Avatar,
  Box,
  Flex,
  Heading,
  Spacer,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  chakra,
  useTab,
  useStyles,
  Button,
} from "@chakra-ui/react";
import React from "react";
import MobileDrawer from "./MobileDrawer";

const CustomTab = React.forwardRef((props, ref) => {
  const tabProps = useTab(props);
  const isSelected = !!tabProps["aria-selected"];

  const styles = useStyles();

  return (
    <Button __css={{ px: "3", pt: "2", outline: "none" }} {...tabProps}>
      {tabProps.children}
      {isSelected ? (
        <Box h="1" mt="4" borderTopRadius="lg" bg="gray.500" />
      ) : (
        <Box mt="4" h="1" />
      )}
    </Button>
  );
});

const Header = () => {
  return (
    <>
      <Box pos="fixed" width="full" zIndex="8">
        {/* Mobile Header */}
        <Flex
          bg="white"
          display={["flex", "flex", "none"]}
          boxShadow="xs"
          h="16"
          alignItems="center"
          px="4"
        >
          <MobileDrawer />
          <Spacer />
          <Box>
            <Heading size="lg">20:20:20</Heading>
          </Box>
          <Spacer />
          <Box>
            <Avatar size="sm"></Avatar>
          </Box>
        </Flex>

        {/* Desktop Header */}
        <Flex
          display={["none", "none", "flex"]}
          bg="white"
          boxShadow="xs"
          h="16"
          alignItems="flex-end"
          justifyContent="space-between"
          px="4"
        >
          <Flex h="full" alignItems="center">
            <Heading size="md" mr="6">
              JEE Mains 2020
            </Heading>
          </Flex>

          
            <TabList>
              <CustomTab>Physics</CustomTab>
              <CustomTab>Chemistry</CustomTab>
              <CustomTab>Mathematics</CustomTab>
            </TabList>

          <Spacer />
          <Flex h="full" alignItems="center">
            <Text mr="3">Saheb Giri</Text>
            <Avatar size="sm"></Avatar>
          </Flex>
        </Flex>
      </Box>
      <Box pt="20" />
    </>
  );
};

export default Header;
