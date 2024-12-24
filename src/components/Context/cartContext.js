import { createContext, useEffect, useState } from "react";



const cartContext=createContext({})


export const CartContextProvider=({children})=>{

    const [cartItems,setCartItems]=useState({})
    const [searchFilter , setSearchFilter]=useState('')

    useEffect(()=>{
        const existingCartItems=JSON.parse(localStorage.getItem('cartItems')) || {}
        setCartItems(existingCartItems)
    },[])

    const addToCart=(product,qty)=>{
        const newCartItem={[product.Product_Details_Id]:{...product,productQuantity:qty}}
        const updatedCartItems={...cartItems,...newCartItem}
        setCartItems(updatedCartItems)
        localStorage.setItem('cartItems',JSON.stringify(updatedCartItems))
    }

    const deleteCartItem=(productId)=>{
        const CartItems={...cartItems}
        delete CartItems[productId]
        setCartItems(CartItems)
        localStorage.setItem('cartItems',JSON.stringify(CartItems))
    }

    const filterClickHandler=(filtertext)=>{
        setSearchFilter(filtertext)
    }
    
    return (
        <cartContext.Provider value={{addToCart,cartItems,setCartItems,deleteCartItem,searchFilter , filterClickHandler}}>
            {children}
        </cartContext.Provider>
    )
}


export default cartContext