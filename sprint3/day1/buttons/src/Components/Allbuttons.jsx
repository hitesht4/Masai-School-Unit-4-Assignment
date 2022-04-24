import React from 'react'
import {Container ,Btndesign} from './Button.styled';

const data=[
    {"title":"Primary Button","variant":'Primary'},
    {title:"Default Button",variant:'Default'},
    {title:"Dashed Button",variant:'Dashed'},
    {title:"Text Button",variant:'Text'},
    {title:"Link Button",variant:'Link'},
];
const Allbuttons = () => {
  
   return( 
       <Container>
              {data.map(item=>{
      return (  
         <Btndesign variant={item.variant}>{item.title}</Btndesign>
      )
     
    })}
       </Container>  
   );
}

export default Allbuttons;