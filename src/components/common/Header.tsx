import { Avatar, Button, Flex, Heading, Input } from "@chakra-ui/react";
import KakaoLogin from "react-kakao-login";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import authState from "../../atoms/authState";

const Header = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const onSuccess = (response: any) => {
    console.log(response.response.access_token);

    setAuth((auth) => {
      return { ...auth, isLoggedIn: true, username: "CCCC" };
    });
  };

  return (
    <Flex
      width="full"
      height="16"
      padding="4"
      px="8"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="black"
      zIndex="overlay"
    >
      <Flex>
        <Link to="/">
          <Heading as="h3" size="lg" color="white" mr="8">
            Delivery App
          </Heading>
        </Link>

        <Input size="md" width="80" />
      </Flex>
      {auth.isLoggedIn ? (
        <Avatar size="sm" />
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
  );
};

export default Header;
