import {createStore} from 'redux';


const reducers=(state,action)=>{
    switch(action.type){
        case 'INCREMANT':
        return { counter: state.counter+1}
    
    case 'DRCREMENT': 
    return {
        counter: state.counter-1
    }
    case 'DRCREMENT2': 
    return {
        counter: state.counter-2
    }
    case 'RESET': 
    return {
        counter: 0
    }
    default :
    return state;
}
}

const initialState={
    counter:2,
   
}

export default createStore (reducers, initialState);