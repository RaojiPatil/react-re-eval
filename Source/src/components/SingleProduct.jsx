import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const SingleProductList = () => {


  const [data, setData] = useState([])
   const {id} = useParams()
   
   useEffect(()=>{
     axios(`https://movie-fake-server.herokuapp.com/products/${id}`)
     .then((res)=>
     setData(res.data)
     )
     .catch((err)=>
     console.log(err)
     )
   },[])


  return <>
   {
        <div style={{marginTop:"20px"}}>
        <img src={data.image} alt="" />
        {<p>brand :{data.brand}</p>}
        <h4>Title:{data.title}</h4>
       
        {<p>price: {data.price}</p>}
        </div>
      }
  </>;
};

export default SingleProductList


// all action are working on this page