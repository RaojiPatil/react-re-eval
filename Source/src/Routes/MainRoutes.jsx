import { Route, Routes } from "react-router-dom"
import About from "../components/About"
import Home from "../components/Home"
import { Products } from "../components/ProductsDashboard"
import { SingleProductList } from "../components/SingleProduct"

export const MainRoutes = ()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/movies" element={<Products/>}></Route>
            <Route path="/movies/:id" element={<SingleProductList/>}></Route>
        </Routes>
        
        </>
    )
}
