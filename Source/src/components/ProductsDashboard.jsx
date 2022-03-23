import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsReq, getproductsData, getProductsSuccess, getProductsFailure, sortProducts } from "../Redux/actions";

export const Products = () => {
  // to get all products list on component mounts


  const {data} = useSelector((state)=>({
    data : state.data
}))


  const dispatch = useDispatch()

  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData())
 
    axios("https://movie-fake-server.herokuapp.com/products")
    .then((res)=> {
    dispatch(getProductsSuccess(res.data))
    console.log(res.data);
     } )
    .catch((err)=> {
    dispatch(getProductsFailure(err))
    })
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    console.log(e.target.value)
    dispatch(sortProducts(e.target.value))
    // dispach handle sort action to the store
  };
  return (
    <>
      <h2>Products</h2>

      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>


      <div className="products-list">




        {/* map throught th products  list and display the results */}

        {data &&
          data.map(() => {
            return <div>{/* display the results here */}</div>;
          })}
      </div>
    </>
  );
 };

export default Products