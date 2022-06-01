import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const removeCarts = (cartItems, removeCart) => {
     const existingCartItem = cartItems.find(
       (cartItem)=>cartItem.id === removeCart.id
     )
     if(existingCartItem){
       return cartItems.filter((cartItem)=> cartItem.id !== removeCart.id);
     }
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeToCart: () => {},
  removeFromCart: () => {},
  count: 0,
  Total:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItmes] = useState([]);
  const [count, setCount] = useState(0);
  const[Total,setTotal] = useState(0);
  useEffect(() => {
    const newCount = cartItems.reduce(
      (accumulator, cartItems) => accumulator + cartItems.quantity,
      0
    );
    const newTotal = cartItems.reduce(
       (accumulator,cartItems)=>accumulator+(cartItems.quantity*cartItems.price),0
    )
    setCount(newCount);
    setTotal(newTotal);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItmes(addCartItem(cartItems, productToAdd));
  };
  const removeToCart = (cartItemToRemove) => {
    setCartItmes(removeCartItem(cartItems, cartItemToRemove));
  };
  const removeFromCart = (removeCart) => {
    setCartItmes(removeCarts(cartItems, removeCart));
  };
  
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    count,
    removeToCart,
    removeFromCart,
    Total
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
