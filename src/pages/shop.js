import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/product-action";

import Header from "../component/header";
import Footer from "../component/footer";


const ShopPage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [shopProduct, setPreview] = useState([]);

    const loadProduct = () => {
        const url = "https://shop143.onrender.com/telebuy/api/products";

        axios.get(url)
        .then((response) => {
            setPreview(response.data);
        })
        .catch((error) => {
            console.log(error);
            alert("something went wroung try again")

        })

    }

    useEffect(() =>{
        loadProduct(); 
    }, [])

    const showDetails = (product) => {
        navigate("/singleproduct", {state: product});
    }

    const  addProduct = (product) => {
        dispatch(addToCart(product))
        alert("sucessfully added to cart");
    }
    return(
        <div>
           <Header></Header>
           <div className="product-big-title-area">
        <div className="container slidercontent">
            <div className="row">
                <div className="col-md-12">
                    <div className="product-bit-title text-center">
                        <h2>Smartphones</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div classNameName="container">
            <div className="row">

                {
                    shopProduct.map((value, index) => {
                        return(
                            <div className="col-md-3 col-sm-6" key={index}>
                            <div className="single-shop-product">
                                <div className="product-upper">
                                    <img src={value.image} alt=""/>
                                </div>
                                <h2><a href="">{value.name}</a></h2>
                                <div className="product-carousel-price">
                                    <ins>{value.discount_price}</ins> <del>{value.actual_price}</del>
                                </div>
        
                                <div className="product-option-shop">
                                    <a className="add_to_cart_button" onClick={() => addProduct(value)}>Add to cart</a>
                                    <a className="add_to_cart_button" onClick={() => showDetails(value)}>show details</a>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="product-pagination text-center">
                        <nav>
                            <ul className="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
           <Footer></Footer>
        </div>
    )
}

export default ShopPage;