import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const FilterCountry = ({setApi}) => {
  return (
    <>
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pt={'20px'}>

        <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Regions
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setApi('https://restcountries.com/v3.1/region/Europe')}>Europe</MenuItem>
        <MenuItem onClick={() => setApi('https://restcountries.com/v3.1/region/Asia')}>Asia</MenuItem>
        <MenuItem onClick={() => setApi('https://restcountries.com/v3.1/region/America')}>America</MenuItem>
        <MenuItem onClick={() => setApi('https://restcountries.com/v3.1/region/Africa')}>Africa</MenuItem>
        <MenuItem onClick={() => setApi('https://restcountries.com/v3.1/region/Ocean')}>Ocean</MenuItem>
      </MenuList>
    </Menu>
    </Box>
    </>
  );
};

export default FilterCountry;