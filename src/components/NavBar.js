import React from "react";
import { Flex, Box, Image, UnorderedList, ListItem } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box
      height="50px"
      display="flex"
      justifyContent="space-between"
      px="4"
      bgColor="dark"
    >
      <Image boxSize="40px" ml="4" src="/images/home/navbar-home-icon.svg" />
      <Box color="white" width="40%">
        <UnorderedList
          display="flex"
          justifyContent="space-between"
          width="
        100%"
        >
          <ListItem>Who we are?</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>Team</ListItem>
          <ListItem>Portfolio</ListItem>
        </UnorderedList>
      </Box>
      <Image width="10%" src="/images/home/navbar-mt-logo.svg" />
    </Box>
  );
};

export default NavBar;
