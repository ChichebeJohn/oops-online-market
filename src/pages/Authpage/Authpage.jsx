import { Container, Flex, VStack, Box, Image, } from "@chakra-ui/react";
import AuthForm from "../../Components/AuthForm/AuthForm";
const Authpage = () => {
  return (
    <Flex minH={"100vh"} justifyConytent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
          {/* left hand-side */}
          <VStack spacing={4} align={"stretch"}>
          <AuthForm />
          <Box textAlign={"center"}>Get the App</Box>
          <Flex gap={5} justifyContent={"center"}>
            <Image src = "/playstore.png" height={10} alt='playstore logo'/>
            <Image src = "/microsoft.png" height={10} alt='Microsoft logo'/>
          </Flex>
        </VStack>
                {/* Right hand-side */}
                <Box display={{base:"none",md:"block"}}>
              <Image src="/virtual market!!.png" height={670} width={500}alt='market'/>
        </Box>
        </Flex>
        

      </Container>
    </Flex>
  );
};

export default Authpage;