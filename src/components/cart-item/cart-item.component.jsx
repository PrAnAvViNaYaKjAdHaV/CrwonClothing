import {ItemContainer,Image,Name,Price,ImageDetils} from './cart-item.style.jsx'

const CartItem = ({cartItems}) =>{
    const {price,imageUrl,quantity,name}=cartItems;
    console.log(cartItems);
    return (
        <ItemContainer>
          <Image src={imageUrl} alt = {`${name}`}/>
             <ImageDetils>
               <Name>{name}</Name>
               <Price>{quantity}*${price}</Price>
             </ImageDetils>
        </ItemContainer>
    )
}

export default CartItem