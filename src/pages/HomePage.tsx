import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Circle, Map, MapMarker } from "react-kakao-maps-sdk";
import Header from "../components/common/Header";
import ButtonList from "../components/common/ButtonList";
import FloatHeader from "../components/common/FloatHeader";
import SideBar from "../components/home/SideBar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  const [location, setLocation] = useState({
    lat: 37.610953,
    lng: 127.0048039,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

        console.log(
          `${position.coords.latitude} : ${position.coords.longitude}`
        );
      });
    } else {
      alert("geolocation을 사용할수 없어요..");
    }
    console.log("finish");
  }, []);

  useEffect(() => {
    if (!map) return;

    const geoCoder = new kakao.maps.services.Geocoder();

    geoCoder.addressSearch("정릉동 716-40", function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);
      }
    });
  }, [map]);

  return (
    <>
      <Flex w="full" h="full" justifyContent="space-between">
        <SideBar />
        <Flex flex="1" h="full" position="relative">
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: location.lat,
              lng: location.lng,
            }}
            style={{
              // 지도의 크기
              width: "100%",
              height: "100%",
            }}
            level={1} // 지도의 확대 레벨
            onCreate={(map) => setMap(map)}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
              position={{
                lat: 37.610953,
                lng: 127.0048039,
              }}
              clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
              onClick={() => setIsOpen(true)}
            >
              {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
              {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
              {isOpen && (
                <Flex
                  w="150px"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Flex
                    w="full"
                    h="16"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    cursor="pointer"
                    _hover={{ backgroundColor: "blackAlpha.100" }}
                  >
                    <Text>북악루</Text>
                    <Text>19:30</Text>
                  </Flex>
                  <Flex
                    w="full"
                    h="16"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    cursor="pointer"
                    _hover={{ backgroundColor: "blackAlpha.100" }}
                  >
                    <Text>북악루</Text>
                    <Text>19:30</Text>
                  </Flex>
                </Flex>
              )}
            </MapMarker>
            <Circle
              center={{
                lat: 37.610953,
                lng: 127.0048039,
              }}
              radius={150}
            />
          </Map>

          <FloatHeader />
          <ButtonList />
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
