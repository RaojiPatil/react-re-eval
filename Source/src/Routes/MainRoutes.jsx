import { Route, Routes } from "react-router-dom"
import About from "../components/About"
import Home from "../components/Home"
import { Products } from "../components/products"
import { SingleProductList } from "../components/SingleProduct"

export const MainRoutes = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/SingleProduct/:id" element={<SingleProductList/>}></Route>
        </Routes>
        
        </>
    )
}

// all routs are working 