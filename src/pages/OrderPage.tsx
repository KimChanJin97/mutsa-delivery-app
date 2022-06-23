import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import authState from "../atoms/authState";
import "../style.css";

interface IItemType {
  name: string;
  price: number;
}

function pad(number: number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

const OrderPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const finalRef = useRef(null);

  const [auth, setAuth] = useRecoilState(authState);

  const [store, setStore] = useState("");

  const [time, setTime] = useState(
    new Date().getFullYear() +
      "-" +
      pad(new Date().getMonth() + 1) +
      "-" +
      pad(new Date().getDate()) +
      "T" +
      pad(new Date().getHours()) +
      ":" +
      pad(new Date().getMinutes())
  );

  const [items, setItems] = useState<IItemType[]>([
    {
      name: "",
      price: 0,
    },
  ]);

  const updateInput = (
    index: number,
    type: "name" | "price",
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newItems = [...items];
    if (type === "name") {
      newItems[index][type] = event.target.value;
    } else {
      newItems[index][type] = Number(event.target.value);
    }
    setItems(newItems);
  };

  useEffect(() => {
    console.log(time);
  }, [time]);

  return (
    <>
      <Box w="full" p="8">
        <Heading as="h3" size="lg" my="8">
          {auth.username}님 어떤 음식을 주문할건가요?
        </Heading>

        <Flex alignItems="center" mb="4">
          <Text w="20">음식점 명</Text>
          <Input
            w="40"
            mr="8"
            onChange={(event) => setStore(event.target.value)}
            value={store}
          ></Input>
        </Flex>

        <Flex alignItems="center" mb="4">
          <Text w="20">주문 시간</Text>
          <Input
            w="40"
            mr="8"
            type="datetime-local"
            onChange={(event) => setTime(event.target.value)}
            value={time}
          ></Input>
        </Flex>

        {items.map((item, index) => {
          return (
            <Flex alignItems="center" mb="4" key={index}>
              <Text w="20">메뉴{index + 1}</Text>
              <Input
                w="40"
                mr="8"
                onChange={(event) => updateInput(index, "name", event)}
                value={item.name}
              ></Input>
              <InputGroup>
                <Input
                  w="40"
                  onChange={(event) => updateInput(index, "price", event)}
                  value={item.price.toString()}
                  type="number"
                ></Input>
                <InputRightAddon children="원" />
              </InputGroup>
            </Flex>
          );
        })}
        <Button
          onClick={(event) => {
            event.preventDefault();
            setItems([
              ...items,
              {
                name: "",
                price: 0,
              },
            ]);
          }}
          colorScheme="blue"
        >
          메뉴 추가
        </Button>
        <Flex alignItems="center" my="4">
          <Text w="20" fontSize="2xl">
            총 합
          </Text>
          <Text w="20" fontWeight="bold" fontSize="2xl">
            {items.reduce(function (accumulator, currentValue) {
              return accumulator + currentValue.price;
            }, 0)}
          </Text>
        </Flex>
        <Button colorScheme="green" mr="4" onClick={onOpen}>
          등록 완료할까요?
        </Button>
        <Button colorScheme="red">등록 취소할까요?</Button>
      </Box>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader id="modalContentHead">알림</ModalHeader>
          <ModalCloseButton />
          <ModalBody id="modalContentBody">확실한가요?</ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              네
            </Button>
            <Button colorScheme="red">아니요</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderPage;
