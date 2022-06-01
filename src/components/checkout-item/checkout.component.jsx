import { useContext } from "react";
import { CartContext } from "../../Context/cart-context";

import './checkout.style.scss'

const CheckoutItem = ({cartItem})=>{
    const{removeFromCart,addItemToCart, removeToCart} = useContext(CartContext);
    const {name,imageUrl,price,quantity} = cartItem;
    const addItemHandler = ()=>addItemToCart(cartItem);
    const removeItemHandler = ()=>removeToCart(cartItem);
    const clearHandler = ()=>removeFromCart(cartItem);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem