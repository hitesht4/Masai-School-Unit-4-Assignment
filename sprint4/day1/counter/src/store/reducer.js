import {Increment,Decrement,Multiply,Divide} from './actionType';




export const reducer=(state,action)=>{
      switch(action.type){
          case Increment:{
              return{
                 ...state,
                  count:state.count+action.payload
              }
          }
        case Decrement:{
              return{
                  ...state,
                  count:state.count-action.payload
              }
          }
        case Multiply:{
              return{
                  ...state,
                  count:state.count*action.payload
              }
          }
        case Divide:{
              return{
                  ...state,
                  count:state.count/action.payload
              }
          }
  
        default:{
            return{
                ...state,
               count: state.count
            }
        }
      }
}





