import { Box, Button, Flex, Text, Heading, Avatar } from "@chakra-ui/react";
import "../style.css";

const Overlay = ({OrderData, waitCheck}) => {
    //const = [OrderData, setOrderData] = useState(["굽네치킨", "19:00", "고추바사삭", "18000원"]);

    const btnstyle = {
        marginTop: "15px",
        backgroundColor: "#00EDFF"

    }
  return (
    <>
    <Flex
        w="150px"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
  >
    <Flex
        w="full"
        h={waitCheck ? 60 : 32}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        cursor="pointer"
        _hover={{ backgroundColor: "blackAlpha.100" }}
    >
      <Text>{OrderData[0]}</Text>
      <Text>{OrderData[1]}</Text>
      <Text>{OrderData[2]}</Text>
      <Text>{OrderData[3]}</Text>

      {waitCheck ? <Button style={btnstyle}>현재 2명!</Button>:<></>}
      {waitCheck ? <Button style={btnstyle}>따라가기 취소</Button>:<></>}
    </Flex>
  </Flex>

</>
  );};

export default Overlay;