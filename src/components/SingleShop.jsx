import React from 'react'
import { useParams } from 'react-router-dom'
import Data from "./Data/ShopData";
import { useDispatch } from 'react-redux';
import '../css/SingleShop.css';
import Footer from './Footer';
import Marquee from './Marquee';
const SingleShop = () => {

  const { idS } = useParams();
  const product = Data.find((value) => {
    return value.id == idS;
  });
  const dispatch = useDispatch();
  const { name, price, category, description, image } = product;
  {product.quantity = 1}
  return (
    <>
    <Marquee/>
      <div className="singleShop">
      
        <div className="singleShop-card">
          <div className="singleShop-card-img">
            <img src={image} alt={name} />
          </div>
          <div className="singleShop-card-info">
            <div className="singleShop-card-heading">
              <h4>{name}</h4>
            </div>
            <div className="singleShop-card-desc">
              <p>{description}</p>
            </div>
            <div className="singleShop-card-price">
              <p>{price}</p>
            </div>
            <div className="singleShop-card-btn">
            <button onClick={() => dispatch({ type: "ADD", payload: product })}> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
      
    </>

  )
}

export default SingleShop

{/* <h1>{idS}</h1>
      <h2>{name}</h2>
      <button onClick={() => dispatch({ type: "ADD", payload: product })}> Add to Cart</button>
      <div>SingleShop</div> */}