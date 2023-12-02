import { HStack, Flex } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";

const NavBar = () => {
  return (
    <HStack align={"center"} h={14}>
      <IoIosAddCircle size={40} />
        <Flex>GamePlus</Flex>
    </HStack>
  );
};

export default NavBar;
