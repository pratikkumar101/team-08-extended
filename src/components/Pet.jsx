import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Data from './Data/PetsData.jsx'
// import {CgPhone} from 'react-icons/Cg'
import '../css/Pet.css';
import Footer from "./Footer";
import Marquee from "./Marquee.jsx";
function Pet() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const pet = Data.find((value)=> value.id == id);
    
const { name, image, category, gender, age, sterillzed, location, description, fwc, breed} = pet;
    const Loading = () => {
        return (
            <>
                
                Loading....
            </>
        )
    }
    const ShowPet = () => {
        return (
            <>
            <Marquee/>
                <div className="pet-container">
                    <div className="pet-row">
                        <div className="pet-col1 pet-col">
                            <img src={image} alt={name} />
                        </div>
                        <div className="pet-col2 pet-col">
                            <div className="pet-about-col1">
                                <h4>{category}({breed})</h4>
                            </div>
                            <div className="pet-about-col2">
                                <h4>{name}</h4> 
                            </div>
                            <div className="pet-about-col3">
                                <p>Age: {age}</p>
                            </div>
                            <div className="pet-about-col4">
                                <p>Gender: {gender}</p>
                            </div>
                            <div className="pet-about-col5">
                                <p>Sterillzed: {sterillzed}</p>
                            </div>
                            <div className="pet-about-col6">
                                <p>About: {description}</p>
                            </div>
                            <div className="pet-about-col7">
                                <p>Location: {location}</p>
                            </div>
                            <div className="pet-about-col8">
                                <h4>To Contact:</h4>
                            </div>
                            <div className="pet-about-col9">
                                <a href="">+91-9142102268</a>
                            </div>
                            <div className="pet-about-col10">
                                <a href="mailto: pratik2015.kumar@gmail.com">pratik2015.kumar@gmail.com</a>
                            </div>
                            <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KCMgCupq5sl9uh" async> </script> </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    {loading ? <Loading /> : <ShowPet />}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Pet;