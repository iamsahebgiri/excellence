import {
  Avatar,
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useStoreActions } from "easy-peasy";
import { useRouter } from "next/router";
import React from "react";
import { AiFillAmazonCircle } from "react-icons/ai";
import {
  HiCollection,
  HiNewspaper,
  HiOfficeBuilding,
  HiUsers,
} from "react-icons/hi";
import { MdGroupWork } from "react-icons/md";
import NavItem from "./NavItem";

const NavGroup = ({ title, navs }) => {
  const router = useRouter();
  return (
    <Box mb="4">
      <Text fontWeight="medium" color="gray.600" fontSize="sm" mb="4">
        {title}
      </Text>
      <Box>
        {navs.map((nav) => (
          <NavItem
            href={`/${nav.href}`}
            key={nav.name}
            icon={nav.icon}
            isActive={router.pathname.startsWith(`/${nav.href}`)}
          >
            {nav.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

function DashboardShell(props) {
  const router = useRouter();
  const { logout } = useStoreActions((actions) => actions.auth);

  const examNavs = [
    {
      name: "Papers",
      icon: HiNewspaper,
      href: "papers",
    },
    {
      name: "Question Bank",
      icon: HiCollection,
      href: "questions",
    },
  ];

  const instituteNavs = [
    {
      name: "My Institute",
      icon: HiOfficeBuilding,
      href: "institute",
    },
    {
      name: "Batches",
      icon: MdGroupWork,
      href: "batchs",
    },
    {
      name: "Students",
      icon: HiUsers,
      href: "students",
    },
  ];

  return (
    <Flex>
      <Flex position="fixed" display={["none", "none", "flex"]}>
        <Flex
          width="64px"
          flexDir="column"
          py="4"
          height="100vh"
          bg="gray.800"
          alignItems="center"
          justifyContent="space-between"
        >
          <Icon as={AiFillAmazonCircle} w="8" h="8" color="gray.200" />
          <Menu offset={[40, -30]}>
            <MenuButton>
              <Avatar
                size="sm"
                name="Saheb Giri"
                src="https://via.placeholder.com/100/000000/FFFFFF/"
              />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Account">
                <MenuItem
                  fontSize="sm"
                  onClick={() => {
                    router.push("/account");
                  }}
                >
                  Settings
                </MenuItem>
                <MenuItem fontSize="sm" onClick={logout}>
                  Sign Out
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
        <Flex width="240px" flexDir="column" p="4" height="100vh" bg="gray.50">
          <NavGroup title="Exam" navs={examNavs} />
          <NavGroup title="Institute" navs={instituteNavs} />
        </Flex>
      </Flex>

      <Box ml={["0", "0", "304px"]} p={["4", "6", "8"]} width="100%">
        {props.children}
      </Box>
    </Flex>
  );
}

export default DashboardShell;
