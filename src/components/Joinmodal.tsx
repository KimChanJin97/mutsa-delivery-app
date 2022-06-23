import { Box, Button, Flex, Text, Heading, Avatar } from "@chakra-ui/react";
import { useState } from "react";
import "../style.css";

const JoinModal = ({setWaitCheck,setIsOpen}) => {
  const [OrderName, setOrderName] = useState("굽네치킨")
  const [OrderMin, setOrderMin] = useState("2빵")
  const [OrderTime, setOrderTime] = useState("18:00")
  const [OrderMax, setOrderMax] = useState("3빵")

  return (
    <Box id="joinmodalwrap" zIndex="modal">
      <div id="structure">
        <h3>알림</h3>
        <div>현재 A님과 {OrderName} 배달비 {OrderMin}이 가능해요!</div>
        <div id="proceed">참여하기를 기존 주문자님께 알린 후 주문을 진행할까요?</div>
        <div id="wait">주문을 진행하지 않는다면 {OrderTime}까지 배달비 {OrderMax}을 기다려요!</div>
        <div id="button_wrap">
          <Button w="50" size="lg" colorScheme="green" onClick={()=>{
            setWaitCheck(true);
            setIsOpen(true);

            const modal=document.getElementById("joinmodalwrap");
            if (modal != null){
              modal.setAttribute("style", "display: none");
            }
          }}>배달비 3빵 기다리기</Button>
          <Button w="50" size="lg" colorScheme="red">배달비 2빵으로 주문</Button>
        </div>
      </div>
    </Box>
  );
};

export default JoinModal;