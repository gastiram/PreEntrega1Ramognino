import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const {id} = useParams()
    

    const productos = [
        {id: 1,  titulo: "Producto A1", descripcion: "descripcion producto  A", precio: "1000", category: "A"},
        {id: 2,  titulo: "Producto A2", descripcion: "descripcion producto  A", precio: "1000", category: "A"},
        {id: 3,  titulo: "Producto A3", descripcion: "descripcion producto  A", precio: "1000", category: "A"},
        {id: 4, titulo: "Producto B1", descripcion: "descripcion producto  B", precio: "1200", category: "B"},
        {id: 5, titulo: "Producto B2", descripcion: "descripcion producto  B", precio: "1200", category: "B"},
        {id: 6, titulo: "Producto B3", descripcion: "descripcion producto  B", precio: "1200", category: "B"},
        {id: 7, titulo: "Producto C1", descripcion: "descripcion producto  C", precio: "1300", category: "C"},
        {id: 8, titulo: "Producto C2", descripcion: "descripcion producto  C", precio: "1300", category: "C"},
        {id: 9, titulo: "Producto C3", descripcion: "descripcion producto  C", precio: "1300", category: "C"},
        {id: 10, titulo: "Producto D1", descripcion: "descripcion producto D", precio: "1400", category: "D"},
        {id: 11, titulo: "Producto D2", descripcion: "descripcion producto D", precio: "1400", category: "D"},
        {id: 12, titulo: "Producto D3", descripcion: "descripcion producto D", precio: "1400", category: "D"}
    ]

    const mostrarProductos = new Promise ((resolve, reject) => {

        
        if(productos.length > 0){
            setTimeout(()=>{
                resolve(productos)
            }, 3000)
        }else {
            reject("No se obtuvieron productos")
        }
    })

    mostrarProductos
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.log(error)
        })

    const productoFiltrado = productos.find((producto)=>producto.id == id)

        return (
            <div>
                <ItemDetail
                producto ={productoFiltrado} />
                        
            </div>
        )
}

export default ItemDetailContainer