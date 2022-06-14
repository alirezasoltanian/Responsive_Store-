import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
//Context
import { CartContext } from '../../context/CartContextProvider'
//Icon
import { BsFillBasketFill } from 'react-icons/bs';

export default function Navbar() {
  const {state} = useContext(CartContext)
  return (
    <div className={styles.mainContainer} >
        <div className={styles.container} >
          <Link to = '/products' className={styles.productLink}>Products</Link>
          <div className={styles.iconContainer}>
            <Link to='/cart'><BsFillBasketFill /></Link>
            <span>{state.itemsCounter}</span>
          </div>
        </div>
    </div>
    
  )
}

