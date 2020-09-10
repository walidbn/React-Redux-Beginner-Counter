import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import store from './Store/Store';


export default class App extends Component 
{
  

render(){

return(
<Provider store={store}>
<div>
<Counter/>

</div>
</Provider>
)

}




}