import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {CartContext} from "../Contexts/CartContext";
import cart from "../../public/assets/icons/cart.svg"
import wish from "../../public/assets/icons/heart.png"
import design from "../../public/assets/Design.png";
import "../CSS/Navbar.css"
const Navbar = () => {
    const navigate = useNavigate();
    const {cartItem, wishItem, cartItemPrice} = useContext(CartContext);
    const [isOpen,setIsOpen] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [isOpenWish, setIsOpenWish] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleCartDropdown = () =>{
        setIsOpenCart(!isOpenCart);
        setIsOpenWish(false);
        setIsProfileOpen(false);
    }
    const toggleWishDropdown = () => {
        setIsOpenWish(!isOpenWish);
        setIsOpenCart(false);
        setIsProfileOpen(false);
      };
      const toggleProfileDropdown = () => {
        setIsProfileOpen(!isProfileOpen);
        setIsOpenCart(false);
        setIsOpenWish(false);
      };
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsOpenCart(false);
        setIsOpenWish(false);
        setIsProfileOpen(false);
      };
      const location = useLocation();
      const handleViewCart = (value) => {
        setIsOpenCart(false);
        setIsOpenWish(false);
        setIsProfileOpen(false);
        navigate("/Dashboard", { state: { active: value } });
      };
      const handleLogoBtn = () => {
        navigate("/");
      };

      const navElements = (
        <ul className="flex flex-col lg:flex-row items-center gap-5 font-medium text-lg">
          <NavLink to="/"> <span onClick={toggleDropdown} className="hover:text-[#3dab0ee1]"> Home </span></NavLink>
          <NavLink to="/Statistics"> <span onClick={toggleDropdown} className="hover:text-[#3dab0ee1]">Statistics </span> </NavLink>
          <NavLink to="/Dashboard"> <span onClick={toggleDropdown} className="hover:text-[#3dab0ee1]"> Dashboard </span> </NavLink>
          <NavLink to="/About"> <span onClick={toggleDropdown} className="hover:text-[#3dab0ee1]"> About Us </span> </NavLink>
        </ul>
      );
      const navElementsEnd = (
        <div className="flex items-center justify-center sm:justify-left gap-2 sm:gap-5">
          <div className={`dropdown ${ window.innerWidth > 1024 ? "dropdown-end" : "dropdown-right"} text-black`}>
            <div tabIndex={0} role="button" className="btn bg-white border-none hover:bg-[#9538E2] btn-circle">
              <div className="indicator"> <img src={cart} onClick={toggleCartDropdown} alt="" className="h-10 w-10 shadow-lg bg-white rounded-full p-2"/>
                {cartItem > 0 ? (<span className="badge badge-sm indicator-item text-[#9538E2]"> {cartItem} </span> ) : null}
              </div>
            </div>
            {isOpenCart && ( <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-16 lg:mt-0 w-32 lg:w-52 shadow-lg">
                <div className="card-body">
                  <span className="text-lg font-semibold">
                    <span className="text-[#9538E2]">{cartItem}</span> Items
                    </span>
                  <span className="text-[#09080F99] text-xs sm:text-base md:text-lg"> Total: ${cartItemPrice}
                  </span>
                  <div className="card-actions">
                    <button onClick={() => handleViewCart("cart")} className="px-2 py-1 rounded-lg bg-[#9538E2] lg:text-lg text-white hover:bg-[#9538E2] btn-block"> Cart </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown lg:dropdown-end text-black">
            <div tabIndex={0} role="button" className="btn bg-white border-none hover:bg-[#9538E2] btn-circle">
              <div className="indicator"> <img src={wish} onClick={toggleWishDropdown} className="h-10 w-10 shadow-lg rounded-full p-3 bg-white" alt="" />
                {wishItem > 0 ? (<span className="badge badge-sm indicator-item text-[#9538E2]"> {wishItem} </span> ) : null}
              </div>
            </div>
            {isOpenWish && ( <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-16 lg:mt-0 w-32 lg:w-52 shadow-lg">
                <div className="card-body">
                  <span className="text-lg font-semibold text-black">
                    <span className="text-[#9538E2]">{wishItem}</span> Items
                  </span>
                  <div className="card-actions"> 
                    <button onClick={() => handleViewCart("wish")} className="px-2 py-1 rounded-lg lg:text-lg bg-[#9538E2] text-white hover:bg-[#9538E2] btn-block" > Wishlist </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown dropdown-end text-black">
            <div tabIndex={0} role="button" className="btn bg-white border-none hover:bg-[#9538E2] btn-circle avatar" >
              <div className="w-10 rounded-full">
                <img onClick={toggleProfileDropdown} alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            {isProfileOpen && (
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 font-medium hover:bg-[#9538E2] rounded-box z-[1] mt-16 lg:mt-0 w-40 lg:w-52 p-2 shadow-lg" >
                <li>
                  <a className="justify-between p-2"> Profile
                    <span className="badge bg-[#9538E2] text-white font-semibold"> New </span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li className="border-2 border-gray-200 w-fit px-1 mt-1 rounded-lg"> <a>Logout</a> </li>
              </ul>
            )}
          </div>
        </div>
      );
    return (
      <div className={`navbar container py-2 mb-4 md:py-6 px-3 mt-3 mx-auto ${location.pathname==='/'?"bg-[#9538E2]":"bg-white text-black"} rounded-t-xl`}>
      <div className="navbar-start">
          <div className={`${location.pathname==='/'?"":"border-2 border-[#9538E2] rounded-lg"}`}>
              <a onClick={handleLogoBtn} className="text-black flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 rounded-lg font-bold bg-white">
                  Gadget <span className="text-orange-600">Heaven</span>
                  <img src={design} alt="design" className="w-5 h-5"/>
              </a>
          </div>
      </div>
      <div className="navbar-center hidden lg:flex">{navElements}</div>
      <div className="navbar-end">
          <div className="hidden sm:flex">{navElementsEnd}</div>
          <div className="dropdown dropdown-left shadow-lg rounded-full p-2">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black" >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" onClick={toggleDropdown} viewBox="0 0 24 24" stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
          </div>
          {isOpen && (<ul className="menu menu-sm lg:hidden dropdown-content text-black lg:text-white bg-base-100 rounded-box z-[1] mt-16 w-fit p-4 pb-4 space-y-2 shadow">
        <div>{navElements}</div>
        <div className="sm:hidden">{navElementsEnd}</div>
      </ul>)}
      </div>
  </div>
    );
};

export default Navbar;