import React, {Component } from 'react';
import styles from './Search.module.css'
class Search extends Component {
  constructor (props) {
    super(props);
    this.state ={
      text : '' ,
    }
    this.input = React.createRef() ;
    
  }
  changeHandler = event => {
    this.setState({
      text : event.target.value
    })
  }
  submitHandler = event => {
    event.preventDefault()
    console.log(this.state.text);
  }
  

  render() { 
    return (
      <form onSubmit={this.submitHandler}>
         <div className={styles.container} >
           <h1>SEARCH</h1>
           <input  placeholder='SEARCH (just for design)' value={this.state.text} onChange={this.changeHandler} />
           <div>
             <br></br>
             <br></br>
             <br></br>
             <span>{this.state.text}</span>
           </div>
         </div>
      </form>
    );
  }
}
 
export default Search;