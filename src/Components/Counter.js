import React, { Component } from 'react'
import {connect} from "react-redux"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import Decrement from'./Decrement';
class Counter extends Component {
   
    render() {
        return (
            <div>
                <Card>
                <CardTitle><h3>React Redux Counter</h3></CardTitle>
                    <CardBody>
                <Button color="secondary" onClick={this.props.increament}>Increament+</Button>
      <span style={{fontSize:'25px'}}>  Counter : {this.props.counter} </span>
     
        <Button color="secondary"onClick={this.props.dicreament}>- Decreament</Button>
        
        <Button style={{marginRight:'10px !important'}}color="danger" onClick={this.props.reset}>Reset</Button>
        <Decrement/>
       </CardBody>
        </Card>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        counter: state.counter,
       
    }
};
const mapDispatchtoProps =(dispatch)=>{
    return{
    increament : ()=>dispatch({type:'INCREMANT'}),
    dicreament:()=>dispatch({type:'DRCREMENT'}),
    reset:()=>dispatch({type:'RESET'})
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Counter);