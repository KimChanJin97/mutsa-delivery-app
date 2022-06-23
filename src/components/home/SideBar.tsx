import { Box, Button, Flex, Text, Heading, Avatar } from "@chakra-ui/react";

const SideBar = () => {
  return (
    <Flex w="400px" h="full" p="8" flexDirection="column">
      <Heading w="max-content" as="h3" size="lg" mb="16">
        Delivery App
      </Heading>
      <Box border="2px" p="4" mb="12">
        <Heading w="full" as="h3" size="lg" textAlign="center">
          여기는 주소
        </Heading>
      </Box>
      {/*
      <Flex justifyContent="space-between" mb="32">
        <Button size="lg" colorScheme="yellow">
          새 메뉴 작성
        </Button>
        <Button size="lg" colorScheme="green">
          메뉴 따라가기
        </Button>
      </Flex>
    */}
      <Flex
        flex="1"
        pb="16"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Heading w="max-content" as="h3" size="md" mb="8">
            내 집 150m 근방에는..
          </Heading>

          <Box w="full">
            <Flex mb="4" alignItems="center">
              <Avatar mr="4" name='Sasuke Uchiha' />
              <Text>BBQ 18:00 가 기다리는 중이에요!</Text>
            </Flex>
            <Flex mb="4" alignItems="center">
              <Avatar mr="4" name='Oshigaki Kisame' />
              <Text>BBQ 18:00 가 기다리는 중이에요!</Text>
            </Flex>
            <Flex mb="4" alignItems="center">
              <Avatar mr="4" />
              <Text>BBQ 18:00 가 기다리는 중이에요!</Text>
            </Flex>
          </Box>
        </Box>
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Button size="sm">처음</Button>
          <Button size="sm">이전 페이지</Button>
          <Text>1 / 2</Text>
          <Button size="sm">다음 페이지</Button>
          <Button size="sm">마지막</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
