import Card from './Card';

let data=[
    {
    date:"28/10/2020",
    imgUrl:"https://www.amanida.com/wp-content/uploads/2018/04/amazon-logo-a-smile-black.png",
    title:"Amazon Gift",
    title2:"Pay",
    category:"Dekstop-Mobile",
    bg:"#ffa500",
},
{
    date:"17 Sept 2020",
    imgUrl:"https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
    title:"Apple Gift ",
    title2:"Payment",
    category:"MacOs-Mobile", 
    bg:"#f5f5f5",
}];

const Main=()=>{
   return( 
   <>
    {data.map(item=>{
      return ( 
          
       <Card date={item.date}
         imgUrl={item.imgUrl}
         title={item.title} 
         title2={item.title2}
         category={item.category}
         bg={item.bg}/>
      )
    })}
    </>
   );
    
}

export default Main;