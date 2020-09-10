import React, { Component } from 'react'
import {connect} from "react-redux"
import { Button } from 'reactstrap';
class Decrement extends Component {
   
    render() {
        return (
            <div>
   
     
        <Button color="primary" onClick={this.props.dicreament2}>Minus 2</Button>
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

    dicreament2:()=>dispatch({type:'DRCREMENT2'})
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Decrement);