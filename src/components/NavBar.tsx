import { HStack } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";
import Toggle from "./Toggle";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
    <HStack align={"center"} h={14} p={4} mb={4}>
      <IoIosAddCircle size={40} />
        <SearchInput onSearch={onSearch}/>
        <Toggle />
    </HStack>
  );
};

export default NavBar;

