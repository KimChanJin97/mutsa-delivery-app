import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const Page = () => {
  return (
    <Box w="full" h="full">
      <Header />
      <Box h="full">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Page;
