import React from 'react'
import CartWidget from './CartWidget';
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    return (  
    <div>

      <Flex>
      
      <Box p='4'>
           <Link to="/">
            MangaSHOP
           </Link> 
        </Box>
      
        
      <Spacer />
    

        <Menu>
  <MenuButton>
    Productos
  </MenuButton>
  <MenuList>
    <Link to={'/category/A'}><MenuItem>Mangas</MenuItem></Link>
    <Link to={'/category/B'}><MenuItem>Figuras</MenuItem></Link>
    <Link to={'/category/C'}><MenuItem>Remeras</MenuItem></Link>
    <Link to={'/category/D'}><MenuItem>Accesorios</MenuItem></Link>
    
    
    
    
  </MenuList>
  <Spacer />
</Menu>

        <Box p='4'>
            <Link to="/Cart">
            <CartWidget />
            </Link>
            
        </Box>
    </Flex>
        </div>
    )
}

export default NavBar