import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </BrowserRouter>,
)