import { HStack } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import Toggle from "./Toggle";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack align={"center"} h={14} p={4} mb={4}>
      <IoIosAddCircle size={40} />
        <SearchInput />
        <Toggle />
    </HStack>
  );
};

export default NavBar;
