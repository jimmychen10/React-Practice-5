import React from "react"
import vschoolProducts from "./data/vschoolProducts.js"
import Product from "./components/Product.js"


function App (){
    const producComponenets = vschoolProducts.map((product) => <Product key={product.id}  name={product.name} price ={product.price} description = {product.description}/>)
    return(
        <div>
            {producComponenets}
        </div>
    )
}

export default App