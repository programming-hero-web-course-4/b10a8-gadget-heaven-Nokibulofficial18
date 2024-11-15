import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {product_title,price,product_image, product_id}=product;
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/ProductDetails/${product_id}`)
    };
    console.log(product)
    return (
        <div className='p-4 bg-white rounded-xl text-center md:text-left'>
            <img src={product_image} alt={`Image of ${product_title}`} className='h-[250px] rounded-xl mx-auto mb-5'/>
            <h1 className="font-bold text-2xl mb-2">{product_title}</h1>
            <h2 className='text-[#09020F99] text-xl font-semibold mb-2'>Price: ${price}</h2>
            <button onClick={handleClick} className='px-5 py-3 text-[#9538E2] border-2 border-[#9538E2] hover:bg-[#9538E2] hover:text-white font-semibold rounded-3xl'>View Details</button>            
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object
};

export default Product;