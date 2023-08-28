import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div>
        <div className="mainmenu-area">
     <div className="container">
         <div className="row">
             <div className="navbar-header">
                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                 </button>
             </div>
             <div className="navbar-collapse collapse">
                 <ul className="nav navbar-nav">
                     <li className="active"><NavLink to="/">Home page</NavLink></li>
                     <li><NavLink to="/shop">shop page</NavLink></li>
                     <li><NavLink to="/singleproduct">single product</NavLink></li>
                     <li><NavLink to="/cart">cart</NavLink></li>
                     <li><NavLink to="/checkout">checkout</NavLink></li>
                 </ul>
             </div>
         </div>
     </div>
 </div>
     </div>
    )
}

export default Header;