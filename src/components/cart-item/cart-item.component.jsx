import './cart-item.style.scss'

const CartItem = ({cartItems}) =>{
    const {price,imageUrl,quantity,name}=cartItems;
    console.log(cartItems);
    return (
        <div className='cart-item-container'>
          <img src={imageUrl} alt = {`${name}`}/>
             <div className='item-details'>
               <span className='name'>{name}</span>
               <span className='price'>{quantity}*${price}</span>
             </div>
        </div>
    )
}

export default CartItem