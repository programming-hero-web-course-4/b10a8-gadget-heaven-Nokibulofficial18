import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [activeProducts, setActiveProducts] = useState([]);
    const {products} = useContext(CartContext);

    useEffect(()=>{
        if(activeCategory === "All Products"){
            setActiveProducts(products);
        }
        else{
            setActiveProducts(products.filter((product)=>product.category===activeCategory))
        }
    }, [activeCategory,products]);
    const styleOfActiveCategory = "block font-bold text-lg bg-[#9538E2] text-white px-4 py-2 rounded-xl";
    const styleOfInactiveCategory = "block font-medium text-lg bg-gray-200 mb-4 rounded-xl text-center py-2 text-[#9538E2]";

    return (
        <div className="container mx-auto bg-gray-100 px-5 -mt-6 rounded-xl">
            <h1 className='text-center font-bold text-4xl mb-10 text-[#9538E2]'>Explore Cutting-Edge Gadgets.</h1>
            <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-5'>
            <div className='bg-white flex flex-row justify-center h-fit p-4 rounded-xl'>
                <div className='flex flex-wrap'>
                    <div className='flex flex-wrap justify-center md:flex-col gap-3 mt-3'>
                        <Link onClick={()=>setActiveCategory("All Products")} className={activeCategory==='All Products'?styleOfActiveCategory:styleOfInactiveCategory}> All Products</Link>
                        {[...new Set(products.map((product)=>product.category))].map((category)=>{
                            return(
                                <Link onClick={()=>setActiveCategory(category)} key={category} className={activeCategory=== category?styleOfActiveCategory:styleOfInactiveCategory}>{category}</Link>
                            );
                        }
                        )}
                    </div>
                </div>
            </div>
            <div className="md:col-span-4 lg:col-span-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {activeProducts.map((product) => (
                    <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};


export default Products;