import React, { Component } from 'react';
import styles from "./footer.module.css"
class Footer extends Component {
  state = {  } 
  render() { 
    return (
      <div className={styles.container} >
        <p>All rights reserved 2022</p>
      </div>
    );
  }
}
 
export default Footer ;