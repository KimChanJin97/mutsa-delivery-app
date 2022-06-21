import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

const BoardPage = () => {
  return (
    <Box w="full">
      <Flex
        w="full"
        h="32"
        alignItems="center"
        justifyContent="center"
        backgroundColor="purple.600"
        borderBottom="2px"
      >
        <Heading as="h3" size="lg" textColor="white">
          A 님과 BBQ 배달비 2빵 주문을 작성하세요
        </Heading>
      </Flex>
      <Box
        w="full"
        alignItems="center"
        justifyContent="center"
        borderBottom="2px"
        p="8"
      >
        <Heading as="h3" size="md" mb="8">
          A 님은 BBQ 18:00 황금올리브를 주문했어요.
        </Heading>
        <Button>댓글 달기</Button>
      </Box>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="2px"
        p="8"
      >
        <Box mr="8">
          <Avatar />
          <Text>CCCC</Text>
        </Box>
        <Box w="full">
          <Input mb="4" />
          <Flex justifyContent="flex-end">
            <Button mr="4">캡쳐 첨부</Button>
            <Button>댓글달기</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default BoardPage;