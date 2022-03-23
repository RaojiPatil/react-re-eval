import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home"
  }, {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },

  {
    title: "Products",
    link: "/products",
    id: "header-link-products",
  },

];
export const Navbar = () => {
  return  (
    //map through the link ad display it in header
    <div className="navbar">
      <div className="mainDiv">
      {links.map((e, i) => {
        return (
          <Link className="Link"
           key={i} id={e.id} to={e.link}>
            {e.title}
          </Link>
        );
      })}
      </div>
    
    </div>
  )
 
};
