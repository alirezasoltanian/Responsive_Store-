import React ,{useContext} from 'react';
import styles from './Navbar.module.css'
import logo from '../images/—Pngtree—diamond_990358.png'
import { Link } from 'react-router-dom';
import { BsFillBasketFill } from 'react-icons/bs';
import { CartContext } from '../context/CartContextProvider'

const Navbar = ({Open}) => {
  const {state} = useContext(CartContext)

  return ( 
    <header  className={Open ? styles.close : styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li><Link to = '/'>home</Link></li>
          <li><Link to = 'products'>products</Link></li>
          <li><Link to = '/'>Shopping</Link></li>
          <li><Link to = '/aboutus'>about us</Link></li>
        </ul>
      </div>
      <div className={styles.iconContainer}>
            <Link to='/cart'><BsFillBasketFill /></Link>
            <span>{state.itemsCounter}</span>
            <img  className={styles.logos} src={logo} alt = 'logo' />
      </div>
      
    </header>

   );
}
 
export default Navbar;