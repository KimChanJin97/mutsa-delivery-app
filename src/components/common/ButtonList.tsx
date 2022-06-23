import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import authState from "../../atoms/authState";

const ButtonList = () => {
  const [auth, setAuth] = useRecoilState(authState);
  let navigate = useNavigate();
  return (
    <Box w="full" bottom="36" position={"absolute"} zIndex="overlay">
      <Flex
        w={"6xl"}
        bgColor="white"
        zIndex="overlay"
        justifyContent="space-between"
        p="8"
        mx="auto"
      >
        <Button
          w="32"
          size="lg"
          colorScheme="yellow"
          onClick={(event) => {
            event.preventDefault();
            navigate("/order");
          }}
          isDisabled={!!!auth.isLoggedIn}
        >
          새 메뉴 작성
        </Button>
        <Button
          w="32"
          size="lg"
          colorScheme="yellow"
          isDisabled={!!!auth.isLoggedIn}
          
          onClick={()=>{
            const modal=document.getElementById("joinmodalwrap");
            if (modal != null){
              modal.setAttribute("style", "display: flex");
            }
          }}
        >
          참여하기
        </Button>
        <Button
          w="32"
          size="lg"
          colorScheme="yellow"
          isDisabled={!!!auth.isLoggedIn}
        >
          채팅
        </Button>
      </Flex>
    </Box>
  );
};

export default ButtonList;
