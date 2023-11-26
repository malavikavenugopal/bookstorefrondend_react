import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"


// api to add books
export const addBooks = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/books`,reqBody)
}

//api to get all video
export const getAllBooks = async ()=>{
    return await commonAPI('GET',`${serverURL}/books`,"")
}

//add item to wishlist
export const addToWishlist = async (details)=>{
    return await commonAPI('POST',`${serverURL}/wishlist`,details)
}

//api to get wishlist
export const getwishlist = async ()=>{
    return await commonAPI('GET',`${serverURL}/wishlist`,"")
}

//api to get wishlist
export const deletewishlist = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/wishlist/${id}`,{})
}

//add item to cart
export const addToCart = async (details)=>{
    return await commonAPI('POST',`${serverURL}/cart`,details)
}

//api to get cart
export const getCart = async ()=>{
    return await commonAPI('GET',`${serverURL}/cart`,"")
}

//api to get cart
export const deleteCart = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/cart/${id}`,{})
}
