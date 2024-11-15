import React, { act, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Cart from './Cart';
import Wish from './Wish'

const Dashboard = () => {
    const [cartIsActive, setCartIsActive] = useState(true);
    const [wishIsActive, setWishIsActive] = useState(true);

    const location = useLocation();
    const { active } = location.state || {active: "cart"};
    const handleCartIsActive = () =>{
        setCartIsActive(true);
        setWishIsActive(false);
    }
    const handleWishIsActive = () =>{
        setCartIsActive(false);
        setWishIsActive(true);
    }
    useEffect(() => {
        if(active === "cart"){
            handleCartIsActive();
        }
        else if(active === "wish"){
            handleWishIsActive();
        }
    },[active]);
    return (
        <div className='container mx-auto text-white'>
            <div className='bg-[#9538E2] relative py-5'>
                <div className='text-center mb-5'>
                    <h1 className='font-bold text-4xl mb-4'>Dashboard</h1>
                    <p className="text-gray-100 w-[90%] md:w-1/2 mx-auto text-lg">
                        Get insights and manage your favorite gadgets with ease. Stay
                        updated on the latest additions to enhance your tech experience!
                    </p>
                </div>
                <div className='flex w-fit mx-auto gap-5'>
                    <button onClick={handleCartIsActive} className={`px-3 py-2 ${cartIsActive?"bg-white text-[#9538E2] font-bold": "bg-none text-white border-2 border-white"} rounded-xl text-xl`}>Cart</button>
                    <button onClick={handleWishIsActive} className={`px-3 py-2 ${wishIsActive ?"bg-white text-[#9538E2] font-bold": "bg-none text-white border-2 border-white"} rounded-xl text-xl`}>Wishlist</button>
                </div>    
            </div> 
            <div className='text-black'>
                {cartIsActive ? (
                    <div>
                        <Helmet>
                            <title>Gadget Heaven | Dashboard | Cart</title>
                        </Helmet>
                        <Cart></Cart>
                    </div>
                ):(
                    <div>
                        <Helmet>
                            <title>Gadget Heaven | Dashboard | Wishlist</title>
                        </Helmet>
                        <Wish></Wish>
                    </div>
                )}
            </div>
                      
        </div>
    );
};

export default Dashboard;