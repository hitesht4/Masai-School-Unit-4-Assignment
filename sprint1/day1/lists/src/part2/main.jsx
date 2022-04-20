import styles from './style.modules.css';


let data=[
    {title:"Join Us",class:"One"},
    {title:"Settings",class:"Two"},
    {title:"Login",class:"Three"},
    {title:"Contact Us",class:"Four"},
    {title:"Search",class:"Five"},
    {title:"Help",class:"Six"},
    {title:"Home",class:"Seven"},
    {title:"Download",class:"Eight"}
];


const Button =(props)=>{
   return( 
   <>
    {data.map(item=>{
      return (  
      <button className={item.class}>{item.title}</button>
      )
    })}
    </>
   );
}
export default Button;