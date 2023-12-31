import { Flex, HStack, Switch, useColorMode } from "@chakra-ui/react"

const Toggle = () => {
    const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
        <Switch colorScheme="teal" isChecked={colorMode === 'dark'} onChange={toggleColorMode}></Switch>
        <Flex wrap={"nowrap"} w={20}>Dark Mode</Flex>
    </HStack>
  )
}

export default Toggle