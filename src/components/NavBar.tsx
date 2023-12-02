import { HStack, Flex } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import Toggle from "./Toggle";

const NavBar = () => {
  return (
    <HStack align={"center"} h={14} justifyContent={"space-between"} p={4}>
      <IoIosAddCircle size={40} />
        <Flex>GamePlus</Flex>
        <Toggle />
    </HStack>
  );
};

export default NavBar;
