import React from 'react'

const ItemListContainer = () => {

    const products = [
            {
            nombre: "producto 1",
            precio: 300,
            id: 1
            },
            {
            nombre: "producto 2",
            precio: 150,
            id: 2
            },
            {
            nombre: "producto 3",
            precio: 50,
            id: 3
            },
            {
            nombre: "producto 4",
            precio: 400,
            id: 4
            },
            ]


    const deseos = [
        {deseo: 'terminar de aprender JS', id: 1},
        {deseo: 'Aprender Typescript', id: 2},
        {deseo: 'Aprender Express', id: 3}
        ]

        const [ deseosActuales, setDeseosActuales] = React.useState(deseos)
        const cumplirDeseo = (id) => {
            /* Aca dice que solo se quede los deseos que son distintos al id que eligio */
            setDeseosActuales(deseosActuales.filter(deseo => deseo.id != id))
        }

return (
    <>
    <div>
        {products.map(producto => ( 
            <div key={producto.id}>
                <h2>Nombre: {producto.nombre} </h2>
                <h3>Precio: ${producto.precio}</h3>
                <button>Comprar</button>
                <hr/>
            </div>
        ))}

        {
            deseosActuales.map(deseo => (
                <div key={deseo.id} style={{display:"flex",alignItems: "center"}}>
                    <h2>Deseo: {deseo.deseo}</h2>
                    <button onClick = { () => cumplirDeseo(deseo.id) }>Cumplir</button>
                </div>
            ))
        }
    </div>
    </>
    )
}

export default ItemListContainer
/* EJERCICIO
A partir de este array de deseos, quiero renderizar una carta con el array y un boton que al presionar cada deseo
elimine este de la lista (const deseos) */
