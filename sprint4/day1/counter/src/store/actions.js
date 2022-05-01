import { Decrement, Increment,Divide,Multiply,setX} from "./actionType"

export const IncrementFunction=(payload)=>({
      type:Increment,
      payload
});

export const DecrementFunction=(payload)=>({
      type:Decrement, 
      payload 
});

export const DivideFunction=(payload)=>({
      
      type:Divide, 
      payload 
});
export const MultiplyFunction=(payload)=>({
      type:Multiply,
      payload 
});
export const settting=(payload)=>({
      type:setX, 
      payload 
});

