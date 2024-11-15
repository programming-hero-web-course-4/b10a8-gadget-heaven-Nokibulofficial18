import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';
import PropTypes from 'prop-types';

const ProductDetails = () => {
    const product = useLoaderData();
    return (
        <div className='container mx-auto bg-[#fdfcfc]'>
            <Helmet>
                <title>Gadget Heaven | {product.product_id}</title>
            </Helmet>
            <div className='text-center bg-[#9538E2] py-8 sm:h-[300px]'>
                <h1 className="text-white font-bold text-3xl">Product Details</h1>
                <p className="text-white w-[90%] md:w-1/2 mx-auto mt-3 text-center">
                Explore the latest gadgets that will take your experience to the next
                level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div> 
                <div className='sm:-mt-24 lg:-mt-32 mb-20 shadow-lg py-4'>
                    <DetailsCard product= {product}></DetailsCard>
                </div>           
        </div>
    );
};
ProductDetails.proptypes = {
    product: PropTypes.object,
};

export default ProductDetails;