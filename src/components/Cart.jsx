import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSortAmountDown } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
const Cart = () => {
    const {cartItemPrice, cartItemList, setCartItemList,handleCartItemListOnPayment} = useContext(CartContext);
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(cartItemList);
    const [paymentPrice, setPaymentPrice] = useState(cartItemPrice);
    useEffect(() =>{
        if(cartItemPrice==0){
            return;
        }
        setPaymentPrice(cartItemPrice);
    },[cartItemPrice]);

    const sortSelectedItemList = () =>{
        if(selectedItem.length === 0){
            toast.warning("No Item in the cart");
            return;
        }
        const sortedItem = [...selectedItem].sort((a,b)=> b.price - a.price);
        setSelectedItem(sortedItem);
    };
    const removeFromCart = (product) => {
        const updatedCartList = cartItemList .map((item) => {
            if (item.product_id === product.product_id) {
                return { ...item, cartCount: item.cartCount - 1 };
            }
            return item;
        }).filter((item) => item.cartCount > 0);
            setCartItemList(updatedCartList);
            if (updatedCartList.length === 0) {
            toast.warning("Cart is Empty!!!!")
            return;
        }
        toast.success("Item Removed from Cart");
    };

    const openPaymentModal = () => {
        if (cartItemList.length == 0) {
            toast.error("No Items in Cart!!!")
            return;
        }
        handleCartItemListOnPayment();
        document.getElementById("paymentModal").showModal();
    };
    const handleModalClose = () =>{
        navigate("/");
        setPaymentPrice(0);
    };

    return (
        <div className='container mx-auto my-20 max-w-5xl'>
            <dialog id="paymentModal" className="modal">
                <div className="modal-box w-fit">
                    <div>
                        <div className="flex justify-center mb-5">
                            <img src="https://i.ibb.co.com/0hXGStR/successful-payment.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                        <h1 className="font-bold text-3xl">Payment Successfully</h1>
                        <hr className="h-2" />
                        <h1 className="font-medium text-[#09080F99]">Thanks for purchasing. </h1>
                        <h1 className="font-medium text-[#09080F99]">Total: ${paymentPrice}</h1>
                        </div>
                    </div>
                    <div className="modal-action">
                        <button onClick={handleModalClose} className="w-full bg-[#11000008] rounded-2xl p-2 font-bold" > Close </button>
                    </div>
                </div>
            </dialog>
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-5 sm:gap-0 p-2">
                <div>
                    <h1 className="font-bold text-2xl">Cart</h1>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-5 sm:justify-start">
                    <h1 className="font-bold text-2xl">Total Cost: ${cartItemPrice}</h1>
                    <button onClick={sortSelectedItemList} className='shadow-lg flex items-center gap-2 font-semibold border-2 border-[#9538E2] text-[#9538E2] px-3 py-2 rounded-full'>Sort By Price{" "} <FaSortAmountDown /></button>
                    <button onClick={openPaymentModal} disabled={cartItemList.length === 0} className={`font-medium rounded-full ${
                    cartItemList.length === 0 ? "cursor-not-allowed" : "" } px-4 py-2 bg-[#9538E2] hover:bg-white hover:border-[1px] hover:border-[#9538E2] hover:text-[#9538E2] text-white`} > Purchase </button>
                </div>
            </div>
            {selectedItem.length === 0 ? (
                <div className="text-center mt-10 border-2 border-gray-200 rounded-xl p-5">
                    <h1 className="text-3xl text-red-500 font-bold">No items in Cart</h1>
                </div>
            ) : (
                <div className="mt-10">
                    {selectedItem.map((item) => {
                        const { product_id, product_image, product_title, description, price, cartCount, } = item;
                        return (
                            <div key={product_id} className="flex flex-col md:flex-row justify-around items-center max-w-5xl mx-auto border-2 border-gray-300 rounded-xl mb-5 p-4">
                                <div className="md:w-1/4 mr-5 flex justify-center items-center mb-4 md:mb-0">
                                    <img src={product_image} alt="" className="h-[150px] rounded-xl" />
                                </div>
                                <div className="flex-grow text-center md:text-left">
                                    <h1 className="font-semibold text-2xl mb-3"> {product_title} </h1>
                                    <p className="w-[80%] md:w-full mx-auto text-lg text-[#09080F99] mb-3"> {description} </p>
                                    <h1 className="font-semibold text-lg text-[#09080FCC]"> Price: ${price} </h1>
                                </div>
                                <div>
                                    <button onClick={() => removeFromCart(item)} className="text-3xl text-red-600 flex md:flex-col gap-3 items-center mt-3 md:mt-0" >
                                        <RiDeleteBin5Line />
                                        <div className="badge bg-green-400 p-3 font-bold text-lg">{cartCount} </div>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Cart;