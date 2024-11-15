import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { TiShoppingCart } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from 'react-toastify';
const Wish = () => {
    const {wishItemList, setWishItemList, handleCartItemPrice, handleCartItemList, products} = useContext(CartContext);
    const [selectedItem, setSelectedItem] = useState(wishItemList);
    useEffect(()=>{
        setSelectedItem(wishItemList||[])
    },[wishItemList]);
    
    const removeFromWish = (product) => {
        const updatedCartList = wishItemList.filter((item) => item !== product);
        products.map((item) => {
                if (item.product_id === product.product_id) {
                item.wished = false;
            }
        });
        setWishItemList(updatedCartList);
        toast.success("Item Removed from Wish");
    };

    const handleAddToCart = (item) => {
        handleCartItemPrice(item.price);
        handleCartItemList(item);
        toast.success("Item added from Cart");
    };
    return (
        <div className="my-20 max-w-5xl mx-auto container">
            <div className="text-center">
                <h1 className="font-bold text-4xl">WishList</h1>
            </div>
            {selectedItem.length == 0 ? (
                <div className="text-center mt-10 border-2 border-gray-200 rounded-xl p-5">
                    <h1 className="text-3xl text-red-500 font-bold"> No items in WishList </h1>
                </div>
            ) : (
                <div className="mt-10">
                    {selectedItem.map((item) => {
                        const { product_id, product_image, product_title, description, price, } = item;
                        return (
                            <div key={product_id} className="flex flex-col md:flex-row justify-around items-center max-w-5xl mx-auto    border-2 border-gray-300 rounded-xl mb-5 p-4" >
                                <div className="md:w-1/4 mr-5 flex justify-center items-center mb-4 md:mb-0">
                                    <img src={product_image} alt="" className="h-[150px] rounded-xl" />
                                </div>
                                <div className="flex-grow text-center md:text-left">
                                    <h1 className="font-semibold text-2xl mb-3"> {product_title} </h1>
                                    <p className="w-[80%] md:w-full mx-auto text-lg text-[#09080F99] mb-3"> {description} </p>
                                    <h1 className="font-semibold text-lg text-[#09080FCC] mb-3"> Price: ${price} </h1>
                                    <div className="flex justify-center md:justify-start mb-3 md:mb-0">
                                        <button onClick={() => handleAddToCart(item)} className="flex items-center gap-2 bg-[#9538E2] px-3 py-1 text-white rounded-xl font-bold" > Add to Cart <TiShoppingCart /> </button>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => removeFromWish(item)} className="text-3xl text-red-600"> <RiDeleteBin5Line/></button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Wish;