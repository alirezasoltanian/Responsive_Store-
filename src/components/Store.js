import React, { useContext } from 'react';

// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Style
import styles from "./store.module.css";
// img
import img from '../images/Spinner-1.1s-200px (1).gif'

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className={styles.container} >
            {
                products.length ?
                products.map(product => <Product 
                        key={product.id} 
                        productData = {product}
                    />) :  <img className={styles.loading} alt='i' src={img} /> 
                    
            }
        </div>
    );
};

export default Store;