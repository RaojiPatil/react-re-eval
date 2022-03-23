import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsReq, getProductsSuccess } from "../Redux/actions";
import "./Products.css"
export const Products = () => {

  const {products, isLoading} = useSelector((state)=>({
      products : state.products,
     
  }))

  const dispatch = useDispatch()
  
  useEffect(() => {
  
    dispatch(getProductsReq())
    axios("https://movie-fake-server.herokuapp.com/products")
    .then((res)=>{
      console.log(res.data)
      
    dispatch(getProductsSuccess(res.data))
    })


  }, [dispatch]);

 
 
  return (
    <>
      <h2>Products</h2>

    
      <select >
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>

      
      <div className="products-list">
       {products[0]?.map((e)=>{
         return <Link key={e.id} className="Link" to={`/products/${e.id}`}><div className="card" >
         <img src={e.image} alt="" />
          <h4>Brand: {e.brand}</h4>
         <p>Price: {e.price} /- Rs</p>
     </div></Link>
       })}
      </div>
    </>
 
   );
};

// all action are working on this page spically for function 