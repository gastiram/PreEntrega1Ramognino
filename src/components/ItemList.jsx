import React from 'react'
import Item from './Item'
import ItemDetail from './ItemDetail'
const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos.map((p) => {
                return (
                    <Item
                    key={p.id}
                    titulo ={p.titulo}
                    descripcion ={p.descripcion}
                    precio ={p.precio}
                    id={p.id}
                     />
                )
            
            } )
        
        }
    </div>
  )
}

export default ItemList