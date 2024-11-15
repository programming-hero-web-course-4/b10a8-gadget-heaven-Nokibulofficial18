import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImg from "../../public/assets/banner.jpg"
const Banner = () => {
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate("/Dashboard");
    };
    return (
        <div className='container mx-auto relative rounded-xl pb-28 -mt-4'>
            <div className='bg-[#9538E2] rounded-b-xl g-[510px] pt-10 pb-10'>
                <h1 className='w-[90%] md:w-[80%] lg:[60%] mb-5 mx-auto text-center font-bold text-3xl md:text-4xl lg:text-5xl'>
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="w-[70%] md:w-[50%] mb-5 mx-auto text-center">
                Explore the latest gadgets that will take your experience to the next
                level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button onClick={handleNavigate} className='block px-4 py-2 font-bold md:text-xl bg-white rounded-full border-indigo-300  text-black hover:bg-[9538E2] hover:border-2 hover:border-black hover:text-black w-fit mx-auto'>Shop Now</button>
            </div>
            <div className='w-fit mx-auto -mt-[2%] md:-mt-[2%] lg:-mt-[2%]'>
                <div className='w-3/4 lg:w-1/2 mx-auto rounded-2xl border-4 border-white p-3'>
                    <img src={bannerImg} alt="Banner Image" className='rounded-2xl' />
                </div>                
            </div>
            
        </div>
    );
};

export default Banner;