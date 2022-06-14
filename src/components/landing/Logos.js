import React, { Component } from 'react';
import styles from './Logos.module.css';

import image1 from '../../images/—Pngtree—diamond icon cartoon style_5258457.png'
import image2 from '../../images/—Pngtree—gem cartoon diamond pink_6421130.png'
import image3 from "../../images/—Pngtree—crystal diamond's rainbow glass refracts_6796529.png"
class Logos extends Component {
  state = {  } 
  render() { 
    return (
      <div className={styles.RContainer}>
      <div className={styles.container}>
        <h3>PARTNER OR INVESTOR ...</h3>
        <div>
            <img src={image1} alt='image1' />
            <img src={image2} alt='image2' />
            <img src={image3} alt='image3' />
        </div>
      </div>
      </div>
    );
  }
}
 
export default Logos;