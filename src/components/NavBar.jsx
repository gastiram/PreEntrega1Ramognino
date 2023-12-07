import React from 'react'
import CartWidget from './CartWidget';
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {

    return <div>
    <Flex>
        <Box p='4'>
            MangaSHOP
        </Box>
        <Spacer />

        <Menu>
  <MenuButton>
    Productos
  </MenuButton>
  <MenuList>
    <MenuItem>Mangas</MenuItem>
    <MenuItem>Figuras</MenuItem>
    <MenuItem>Remeras</MenuItem>
    <MenuItem>Accesorios</MenuItem>
  </MenuList>
  <Spacer />
</Menu>

        <Box p='4'>
            
            <CartWidget />
        </Box>
    </Flex>
        </div>
}

export default NavBar