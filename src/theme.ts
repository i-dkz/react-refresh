import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "dark"
}

const theme = extendTheme({
    config, 
    colors : {
        gray: {

            700: '#181818',
            800: '#121212',
            900: '#111'
        }
    }});

export default theme;