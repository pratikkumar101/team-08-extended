import React from "react";
import Data from "./Data/ShopData";
// import { GiShoppingBag } from "react-icons/gi";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../css/Shop.css'
import Footer from "./Footer";
import Marquee from "./Marquee";



const Shop = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;

  useEffect(() => {
    const getItems = async () => {
      const response = Data;
      if (componentMounted) {
        setData(response);
        setFilter(Data);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getItems();
  }, [])
  const filterShop = (cat) => {
    const updatedList = Data.filter((x) => x.category == cat);
    setFilter(updatedList);
  }
  return (
    <div className="productConatiner" style={{ backgroundColor: "rgb(234, 232, 232)" }}>
      <Marquee />
      <div className="buttons d-flex justify-content-center pb-5 pt-5">
        <button className="btn btn-outline-dark me-2 filter" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-dark me-2 filter" onClick={() => filterShop("accessories")}>Accessories</button>
        <button className="btn btn-outline-dark me-2 filter" onClick={() => filterShop("medicines")}>Medicine</button>
        <button className="btn btn-outline-dark me-2 filter" onClick={() => filterShop("food")}>Food</button>
      </div>
      <div className="products" >
        {filter.map((item) => {
          { item.quantity = 1 }

          return (

            <div className="product-card" key={item.id} style={{ backgroundColor: "white" }}>
              {console.log(item)}
              <div className="product-img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="product-info">
                <div className="product-info-name">
                  <h4>{item.name}</h4>
                </div>
                <div className="product-info-price">
                  <p>Rs. {item.price}</p>
                </div>
              </div>
              <div className="product-btn">
                <div className="product-btn-view">
                  <button > <Link to={`/shop/${item.id}`} > View </Link></button>
                </div>
                <div className="product-btn-atc">
                  <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;



{/* <div className="product" key={item.id}>
<img src={` ../images/${item.image}`} alt="cart" />
<h4>{item.name}</h4>
<p>ksh. {item.price}</p>
<Link to = {`/shop/${item.id}`} > Buy </Link>
<button onClick={() => dispatch({ type: "ADD", payload: item })}>
  add to cart
</button>
</div> */}