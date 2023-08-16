import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@chakra-ui/react'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import AllCountries from './components/AllCountries'

function App() {

  return (
    <>
      <Box>
        <Header />
        <Box>
            <Routes>
                <Route path='/' element={<AllCountries />}></Route>
            </Routes>
        </Box>
      </Box>
    </>
  )
}

export default App
