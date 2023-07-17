import Image from "next/image";
import {
  CircularProgress,
  CircularProgressLabel,
  Container,
  Text,
  Center,
  Box,
  Flex,
} from "@chakra-ui/react";
import "../app/globals.css";

export default function Home() {
  return (
    <Container w="100%" h="100%">
      <Flex
        h="100vh"
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
        gap="4"
      >
        <Image
          alt="motortracks logo"
          src="/images/home/mt-logo.jpeg"
          width={400}
          height={100}
        ></Image>
        <Text
          textAlign="center"
          fontSize={"60px"}
          bg="#C9232D"
          w={"100vw"}
          color="white"
          mt={-10}
        >
          Coming Soon
        </Text>
        <Box>
          <CircularProgress
            isIndeterminate
            value={40}
            thickness="8px"
            size="200px"
            color="#C9232D"
          >
            <CircularProgressLabel>10%</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Flex>
    </Container>
  );
}
