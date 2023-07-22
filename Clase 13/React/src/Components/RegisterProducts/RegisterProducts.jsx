import React, { useState } from 'react'
import "./RegisterProducts.css"
import CardProduct from '../CardProduct/CardProduct'


const RegisterProducts = () => {

    const opciones = ["juegos", "tecnologia", "hogar", "electrodomésticos"]
    const handleSubmitRegisterProduct = (evento) => {
        evento.preventDefault()

        /* Esta es la forma nueva. hasta el array de objetos */
        /* desestructura a target de evento*/
        const {target} = evento
        /* desestructura todo lo de entre llaves de target */
        const {nombre, categoria, precio, thumbnail, envios}= target
        const newProduct =
            {
                nombre: nombre.value,
                precio: precio.value,
                thumbnail: thumbnail.value,
                envios: envios.checked,
                categoria: categoria.value,
                /* El + Math.random lo utilizamos para que no se repita el numero que toque en el primer Math.random */
                id: Math.random() + Math.random
            }
            /* lo siguiente devuelve un nuevo array con el producto que ya estaba y agregando el nuevo producto */
            setProducts([...products, newProduct])
}

    const [products, setProducts] = useState([])
    console.log(products)
    /* Esta es la forma en que veniamos trabajando pero lo hacemos de otra. Ahora se trabajara
    sobre los valores de los estados (es mas estricto) */
    /* const [RegisterProduct, setRegisterProduct] = useState({nombre:"", categoria:""}) */

return (
    <div className='formularioProductoSection'>
        <h1>Registro de productos en React</h1>
        <form onSubmit={handleSubmitRegisterProduct}>
            <div>
                <label htmlFor="nombre"> Ingrese el nombre de su producto: </label>
                <input type="text" placeholder='Carta especial 32' name='nombre' id='nombre'/>
                </div>
            <div>
                <label htmlFor="categoria"> Ingrese la categoría del producto: </label>
                <select name="categoria" id="categoria">
                    {opciones.map((opcion) => <option value={opcion} key={opcion}> {opcion} </option>)}
                </select>
            </div>
            <div>
                <label htmlFor="precio">Ingrese el costo del producto:</label>
                <input  type="number" name="precio" id= "precio"/>
            </div>
            <div>
            <label htmlFor="thumbnail">Ingrese la direccion de la imagen:</label>
            <input type="text" name='thumbnail' id='thumbnail' />                
            </div>
            <div>
            <label htmlFor="envios">Acepta envios:</label>
            <input type="checkbox" name="envios" id="envios" />
            </div>
            
            <input type="submit" value="registrar" />
        </form>

        {/* aca va el mapeo de productos */}
        {products.map(product => <CardProduct key={product.id} {...product}/>)}
    </div>
    )
}

export default RegisterProducts