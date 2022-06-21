import {
  Avatar,
  Text,
  Button,
  Flex,
  Heading,
  Input,
  Box,
} from "@chakra-ui/react";
import KakaoLogin from "react-kakao-login";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import authState from "../../atoms/authState";

const FloatHeader = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const onSuccess = (response: any) => {
    console.log(response.response.access_token);

    setAuth((auth) => {
      return { ...auth, isLoggedIn: true, username: "CCCC" };
    });
  };

  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      top="16"
    >
      <Flex
        width="6xl"
        height="20"
        padding="4"
        px="8"
        alignItems="center"
        justifyContent="space-between"
        zIndex="overlay"
        border="2px"
        backgroundColor="white"
      >
        <Flex>
          <Heading w="max-content" as="h3" size="lg" mr="8">
            Delivery App
          </Heading>
        </Flex>
        {auth.isLoggedIn && (
          <Flex
            border="2px"
            w="full"
            h="full"
            alignItems="center"
            justifyContent="center"
            p="4"
          >
            <Text>우리 집</Text>
          </Flex>
        )}
        {auth.isLoggedIn ? (
          <Flex alignItems={"center"} ml="8">
            <Text w="max-content">{auth.username}님 안녕하세요</Text>
            <Link to="/users">
              <Avatar size="sm" ml="4" />
            </Link>
          </Flex>
        ) : (
          <KakaoLogin
            token="a610386779562e55b36ad2fa6f0c1462"
            onSuccess={onSuccess}
            onFail={console.error}
            onLogout={console.info}
            render={({ onClick }) => (
              <Button
                colorScheme="yellow"
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  onClick();
                }}
              >
                로그인하기
              </Button>
            )}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default FloatHeader;

