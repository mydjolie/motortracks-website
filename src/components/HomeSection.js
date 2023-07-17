import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";

const HomeSection = () => {
  return (
    <Flex flexDir="column" width="100vw" height="100vh">
      <Box
        width="100%"
        height="100%"
        bgColor="black"
        backgroundImage="url('/images/home/home-header.svg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        overflow="hidden"
        position="relative"
        _before={{
          display: {},
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "40%",
          bgGradient: "linear(to-t, #1E1E1E,#140E0E63,#3E3A3A00)",
        }}
      >
        <Image
          position="absolute"
          top="300"
          left="150"
          width="50%"
          src="/images/home/home-mt-logo.svg"
        />
      </Box>
    </Flex>
  );
};

export default HomeSection;
