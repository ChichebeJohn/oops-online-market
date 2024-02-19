import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState ({
    email: '',
    password:'',
    confirmPassword:''
});
  const handleAuth = () => {
    if (!inputs.email || !inputs.password ) {
      alert("Please fill all fields");
      return; 
    }
    navigate("/");

  };
  return <>
    <Box border={"0px solid gray"} borderRadius={10} padding={5}>
      <VStack spacing={4}>
      
        <Image src='/Oops.png' height={24} cursor={"pointer"} alt="opps logo"/>
        <Text textAlign={"center"} color={"blue"} margin={1}> Oops Online Market!</Text> 
       
        <Input placeholder="Email" fontSize={14} type="mail" background={"black"}
        value={inputs.email}
        onChange={(e) => setInputs({...inputs,email:e.target.value})}
        />
        <Input placeholder="Password" fontSize={14} type="password" background={"black"}
        value={inputs.password}
        onChange={(e) => setInputs({...inputs,password:e.target.value})}
        />
        {!isLogin? 
          <Input placeholder="Confirm Password" fontSize={14} type="password" backgroundColor={"black"} 
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
          />
         : null}

        <Button width={"full"} colorScheme="blue" size={"small"} fontSize={20} alignContent={"center"} alignItems={"center"} onClick={handleAuth}>
          {isLogin? "Log in" : "Sign Up"}
        </Button>
        {/* or text */}
        <Flex alignItems={"center"} justifyContent={"center"} marginY={4} gap={2} width={"full"}>
          <Box flex={"2"} height={"1px"} background={"gray.400"}/>
          <Text marginX={1} color={"white"}> OR </Text>
          <Box flex={"2"} height={"1px"} background={"gray.400"}/>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
          <Image src="/google.png" width={5} alt="Google logo"/>
          <Text marginX={3} color={"blue.500"}>
            Log in with Google
          </Text>
        </Flex>
         </VStack>

    </Box>
    <Box border={"8px solid gray"} borderRadius={10} padding={5}> 
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box marginX={3} fontSize={16}>
          {isLogin ? "Don't have an account?": "Already have an account?"}
        </Box>
        <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"} alignContent={"center"} alignItems={"center"} textAlign={"center"}>
          {isLogin ? "Sign Up" : "Log in"}
        </Box>
       </Flex>
    </Box>
    </>
};

export default AuthForm