import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Contexts/CartContext';
import ReactStars from 'react-stars';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from 'prop-types';
const DetailsCard = ({product}) => {
    const {handleCartItemList, handleWishItemList, products} = useContext(CartContext);
    const{product_id,product_title,product_image,price,description,specification,availability, rating:initialRating} = product;
    const [rating, setRating] = useState(initialRating);
    const [addedToWish, setAddedToWish] = useState(() => {
        const tempProduct = products.find((item) => item.product_id === product_id);
        return tempProduct?.wished || false;
      });
      useEffect(() => {
        const tempProduct = products.find((item) => item.product_id === product_id);
        setAddedToWish(tempProduct?.wished || false);
      }, [products, product_id]);
      const handleRatingChange = (newRating) => {
        setRating(newRating);
      };
      const handleAddToCart = () => {
        handleCartItemList(product);
      };
      const handleAddToWish = () => {
        const tempProduct = products.find((item) => item.product_id === product_id);
        if (!tempProduct?.wished) {
          handleWishItemList({ ...product, wished: true });
          setAddedToWish(true);
        }
      };
      console.log(product)
    return (
        <div className='flex flex-col md:flex-row gap-4 p-3 pt-4 bg-white rounded-xl max-w-6xl mx-auto'>
            <div className='flex justify-center items-center md:w-[45%] mb-2 '>
                <img src={product_image} alt={`Image of ${product_title}`} className='w-3/4 rounded-xl' />
            </div>
            <div className='space-y-3 text-center md:text-left pt-8'>
                <h1 className="font-bold text-2xl">{product_title}</h1>
                <h1 className='font-semibold text-xl text-[#09080FCC]'>Price: ${price}</h1>
                <button className={`px-3 py-2 border-2 font-medium rounded-full ${availability ? "border-green-400 text-green-700 bg-green-200" : "border-red-400 bg-red-300 text-red-700"}`}>{availability?"In Stock":"Out of Stock"}</button>
                <p className="text-[#09080FCC] text-lg mb-1">{description}</p>
                <div className='text-[#09080FCC] text-left mx-auto w-[90%] md:w-full'>
                    <h1 className="text-center md:text-left mb-2 text-lg font-bold text-black">Specification: </h1>
                    <ul className='w-[90%] sm:w-[70%] mx-auto lg:ml-4 flex justify-center flex-col md:mx-0'>
                        {
                            specification.map((spec, idx) => (
                                <li key={idx} className='list-disc'>{spec}</li>
                            ))
                        }
                    </ul>
                </div>
                <h1 className="font-bold text lg text-center md:text-left">Rating: </h1>
                <div className='flex gap-3 items-center justify-center md:justify-start'>
                    <ReactStars count={5} value={rating} size={23} edit={true} isHalf={true} emptyIcon ={<i className='far fa-star'></i>} fullIcon={<i className='fa fa-star'></i>} activeColor="#ffd700" onChange={handleRatingChange}/>
                    <h1 className='bg-[#FFD700] rounded-2xl px-3 font-semibold'>{rating}</h1>
                </div>
                <div className="flex gap-4 items-center justify-center md:justify-start">
                    <button onClick={handleAddToCart} className='flex items-center gap-2 bg-[#9538E2] px-4 py-2 text-white rounded-full font-bold'>Add to Cart <FaCartShopping /></button>
                    <button onClick={handleAddToWish} className={`p-3 rounded-full border-2 border-gray-300 ${addedToWish ? "bg-[#9538E2] cursor-not-allowed" : "bg-gray-300"}`}
            disabled={addedToWish}><FaRegHeart /></button>
                </div>
            </div>
        </div>
    );
};
DetailsCard.proptypes = {
    product: PropTypes.object.isRequired,
};
export default DetailsCard;