import React from "react";


const ProductCard = (props) => {
    const handleAddtoCart = () => {
        alert('Product ${props.productId},which is  ${props.productName} of brand ${props.brand} has of rupees ${props.price} is  added in the cart, please proceed to pay!!!);                                        ')
    }
    return(
        <div className="product-card">
            <img src="{props.productPic} alt={productName}"/>
            <div className="product-details">
                <h3>{props.productName}</h3>
                <p>{props.brand}</p>
                <p>{props.productDescription}</p>
                <h4>props.price </h4>
                <button onClick={handleAddtoCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;