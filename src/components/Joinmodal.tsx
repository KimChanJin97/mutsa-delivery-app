import { Box, Button, Flex, Text, Heading, Avatar } from "@chakra-ui/react";
import "../style.css";

const JoinModal = () => {
  return (
    <Box id="joinmodalwrap" zIndex="modal">
      <div id="structure">
        <h3>알림</h3>
        <div>현재 A님과 BBQ 배달비 2빵이 가능해요!</div>
        <div id="proceed">참여하기를 기존 주문자님께 알린 후 주문을 진행할까요?</div>
        <div id="wait">주문을 진행하지 않는다면 18:00까지 배달비 3빵을 기다려요!</div>
        <div id="button_wrap">
          <Button w="50" size="lg" colorScheme="green">배달비 3빵 기다리기</Button>
          <Button w="50" size="lg" colorScheme="red">배달비 2빵으로 주문</Button>
        </div>
      </div>
    </Box>
  );
};

export default JoinModal;