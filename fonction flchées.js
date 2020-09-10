import React, { Component } from 'react';
import {createStore} from 'redux';
import './App.css';



export default class App extends Component 
{
  constructor(props) {
  super(props)
this.state={
  counter:0
}

}
setCountPlus=()=>{
  this.setState(
  {counter : ++this.state.counter}
  );
}
setCountMinus=()=>{
  this.setState(
  {counter : this.state.counter+-1}
  );
}
render(){

return(

<div>
<button onClick={()=>this.setCountPlus()}>+</button>
<div style={{fontSize:'50px', textAlign: 'center'}}>{this.state.counter}</div>
<button onClick={()=>this.setCountMinus()}>-</button>

</div>

)

}




}