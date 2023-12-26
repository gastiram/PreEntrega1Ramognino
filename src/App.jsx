import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
const App = () => {

  return (
    <BrowserRouter>

    <NavBar/>
     
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>} />
      <Route exact path='/category/:categoryId' element={<ItemListContainer/>} />
      <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
      <Route exact path='/Cart' element={<Cart/>} />


    </Routes>



     </BrowserRouter>
    
  )
}
export default App