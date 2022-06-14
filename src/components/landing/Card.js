import React, { Component } from 'react';
import styles from './Card.module.css';
import Up from '../../images/up.svg'
import { Link } from 'react-router-dom';
import Down from '../../images/down.svg'
class Card extends Component {
  constructor() {
    super();
    this.state={
      Counter : 0 ,
      setPoint : "set Point" ,
      pointer : 0 ,
      allPoint : 0 ,
    }
  }
  downHandler = () => {
    if (this.state.Counter) {
   
       this.setState(prevState => ({
         
         Counter : prevState.Counter - 1 ,
       }))
    }
  }

  setPointHandler = () => {
    if(this.state.pointer <= 2) {
      this.setState(prevState => ({
        setPoint : "setAnotherPoint" ,
        pointer : prevState.pointer + 1 ,
        allPoint : prevState.allPoint + this.state.Counter
      }))
    }else{
      this.setState(prevState => ({
        setPoint : "finished" 
      }))
    }    
  }
  upHandler = () => {
    this.setState(prevState => ({
      Counter : prevState.Counter + 1 ,
    }))
  }
  state = {  } 
  render() { 
    // let text ;
    const {image , name , color ,id} = this.props
    const {Counter , pointer ,setPoint , allPoint} = this.state
    // if (0<pointer<4) {
    //   text = <d>{`three choice point  ${pointer} . ${pointer && `${allPoint}`}`}</d>

    // } else if (pointer >3) {
    //   text = <d>{`finished your choice`}</d>
    // } else {
    //   text = ''
    // }
    return (
      <div className={styles.container}>
        <img src={image} alt='image' className={styles.imageTwo} />
        <h3>name : <Link to={`/products/${id}`}>{name}</Link></h3>
        <p>color : {color}</p>
        <p>{ pointer > 0 && pointer < 4 ? `three choice point  ${pointer} . ${allPoint}` :  ''} </p>
        {/* <p>{text}</p> */}
        <div className={styles.counter}>
        <img src={Down} alt='arrow'  width={30} className={Counter ? styles.active : styles.deactive } onClick={this.downHandler} />
        <span >{Counter}</span>
        <img src={Up} alt='arrow' width={30} className={styles.imgUp} onClick={this.upHandler} />
        <button onClick={this.setPointHandler}  >{setPoint}</button>
        </div>

      </div>
    );
  }
}
 
export default Card;