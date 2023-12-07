import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {

  return (
    <div>
     <NavBar/>
     <ItemListContainer greeting={"Bienvenidos a MangaSHOP"}/>
    </div>
  )
}
export default App