import { GET_Todos,DELETE_Todos,POST_Todos } from './actionTypes';

export const reducer=(state,action)=>{
      switch(action.type){
          case GET_Todos:{
              return{
                 ...state,
                  todos:action.payload,
              }
          }
         case DELETE_Todos:{
              return{
                 ...state,
                  todos:state.todos.filter((todo)=>todo.id!== action.payload),
              }
          }
        case POST_Todos:{
              return{
                 ...state,
                  todos:action.payload,
              }
          }
        default:{
            return{
                ...state,
               todos:state.todos
            }
        }
      }
}

