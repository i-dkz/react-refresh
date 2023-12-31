import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import theme from "./theme.ts"
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(

    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <App />
      </ChakraProvider>
    </React.StrictMode>

);
