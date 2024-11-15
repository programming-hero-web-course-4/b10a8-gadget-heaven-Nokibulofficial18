import React from 'react';
import { Helmet } from 'react-helmet-async';


const About = () => {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center max-w-[900px]'>
            <Helmet>
                <title>Gadget Heaven | About Us</title>
            </Helmet>
            <h1 className="font-bold text-3xl text-center mb-8">About Us</h1>
             {/* Mission Section */}
            <section className="mb-10 bg-[#9538E2] p-8 rounded-2xl text-white ">
                <h2 className="text-2xl font-semibold  mb-2">Our Mission</h2>
                <p className="text-lg"> At GadgetHeaven, we aim to bring you the latest and most innovative gadgets from around the world. We believe that technology should be accessible to everyone, and we strive to provide the best products at the most competitive prices.
                </p>
            </section>
             {/* Our Story Section */}
            <section className="mb-10 bg-[#9538E2] p-8 rounded-2xl text-white">
                <h2 className="text-2xl font-semibold  mb-2">Our Story</h2>
                <p className="text-lg ">
                GadgetHeaven was founded by a group of passionate tech enthusiasts who wanted to share their love for gadgets with the world. What started as a small online store has now evolved into a trusted e-commerce platform with a vast range of tech products. We're constantly evolving and growing to meet the needs of our customers.
                </p>
            </section>
            
             {/* Meet the Team */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    <div className="text-center">
                        <img src="https://i.ibb.co.com/jG66dDP/founder.jpg" alt="Founder" className="mx-auto rounded-full mb-2" />
                        <p className="font-semibold">Kan Williams</p>
                        <p className="text-gray-600">Founder & CEO</p>
                    </div>
                    <div className="text-center">
                        <img src="https://i.ibb.co.com/Cv4gS7J/marketing-lead.jpg" alt="Marketing Lead" className="mx-auto rounded-full mb-2" />
                        <p className="font-semibold">Jane Smith</p>
                        <p className="text-gray-600">Marketing Lead</p>
                    </div>
                    <div className="text-center">
                        <img src="https://i.ibb.co.com/k1CzPH5/Product-manager.jpg" alt="Product Manager" className="mx-auto rounded-full mb-2" />
                        <p className="font-semibold">John Lee</p>
                        <p className="text-gray-600">Product Manager</p>
                    </div>
                    </div>
                </section>
                {/* Contact Us Section */}
                <section className='my-10 bg-black p-8 rounded-2xl text-white '>
                    <h2 className="text-2xl font-semibold  mb-4">Contact Us</h2>
                    <p className="text-lg mb-2">If you have any questions, feel free to reach out:</p>
                    <p className="text-lg  mb-2">
                    Email: <a href="mailto:info@gadgetheaven.com" className="text-blue-500">info@gadgetheaven.com</a>
                    </p>
                    <p className="text-lg ">Follow us on:</p>
                    <div className="flex space-x-4 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">Instagram</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
                    </div>
                </section>
        </div>
    );
};

export default About;