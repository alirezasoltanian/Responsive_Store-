import React , {useState,useEffect,createContext}from 'react'
//َAPI
import { getProducts } from '../servies/api';

export const ProductsContext = createContext();

export default function ProductContextProvider({children}) {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
        setProducts(await getProducts());
    }
    fetchAPI();

  },[]);
  return (
      <ProductsContext.Provider value={products}>
        {children}
      </ProductsContext.Provider>
    )
}
