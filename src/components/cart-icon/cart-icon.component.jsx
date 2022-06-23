import { useContext } from 'react'
import {ReactComponent as CartImage} from '../../assets/shopping-bag.svg'
import {IcontContainer,ShoppingIcon,ItemCount} from './cart-icon.style.jsx'
import { CartContext } from '../../Context/cart-context'
const CartIcon = ()=>{
  const {isCartOpen,setIsCartOpen,count} = useContext(CartContext);

     const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <IcontContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon as={CartImage}/>
            <ItemCount>{count}</ItemCount>
        </IcontContainer>
    )
}

export default CartIcon;