import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'


const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box w={'100%'} h={'8vh'} background={useColorModeValue('blue.300', 'blackAlpha.200')} boxShadow={'2px 2px 5px 2px #fff '}  className='header'>
      <Box w={{base: '90%', md: '90%'}} minH={'8vh'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} m={'auto'} >
        <Box>
            <Text fontSize={{base: '30px', md: '45px'}}>Population of countries</Text>
        </Box>
        <Box>
            <Button onClick={toggleColorMode}>
               {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Box>
        
      </Box>
    </Box>
  )
}

export default Header
