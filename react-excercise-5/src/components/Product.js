import React from "react"


function Product(props){

    return(
            <div>
                <h2> name: {props.name} </h2> 
                <h3> price: {props.price }</h3>   
                <p> {props.description}</p>
                <br></br>
            </div>
    )
}

export default Product