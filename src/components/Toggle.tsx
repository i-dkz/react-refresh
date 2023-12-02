import { Flex, HStack, Switch, useColorMode } from "@chakra-ui/react"

const Toggle = () => {
    const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
        <Switch colorScheme="purple" isChecked={colorMode === 'dark'} onChange={toggleColorMode}></Switch>
        <Flex>Dark Mode</Flex>
    </HStack>
  )
}

export default Toggle