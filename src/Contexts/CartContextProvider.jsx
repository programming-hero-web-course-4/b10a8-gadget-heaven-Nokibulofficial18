import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(0);
  const [wishItem, setWishItem] = useState(0);
  const [cartItemList, setCartItemList] = useState([]);
  const [wishItemList, setWishItemList] = useState([]);
  const [cartItemPrice, setCartItemPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    setCartItem(cartItemList.reduce((acc, item) => acc + item.cartCount, 0));
    setCartItemPrice(cartItemList.reduce((acc, item) => acc + item.price * item.cartCount, 0));
    }, [cartItemList]);

  useEffect(() => {
    setWishItem(wishItemList.length);
  }, [wishItemList]);

  useEffect(() => {
    setCartItemList(cartItemList);
  }, [cartItemList]);

  const handleCartItemPrice = (price) => {
    const newCartItemPrice = cartItemPrice + price;
    setCartItemPrice(newCartItemPrice);
  };
  const handleCartItemListOnPayment = () => {
    setCartItemList([]);
    setCartItem(0);
    setCartItemPrice(0);
  };
  const handleCartItemList = (item) => {
    if (item.availability === false) {
      toast.error("Product is out of stock");
      return;
    } else {
      handleCartItemPrice(item.price);
      toast.success("Item added to Cart");
    }
    const productIndex = cartItemList.findIndex(
      (cartItem) => cartItem.product_id === item.product_id
    );

    if (productIndex >= 0) {
      const updatedCartList = [...cartItemList];
      updatedCartList[productIndex] = {
        ...updatedCartList[productIndex],
        cartCount: updatedCartList[productIndex].cartCount + 1,
      };
      setCartItemList(updatedCartList);
    } else {
      setCartItemList([...cartItemList, { ...item, cartCount: 1 }]);
    }
  };

  const handleWishItemList = (item) => {
    const updatedItem = { ...item, wished: true };
    products.map((product) => {
      if (product.product_id === item.product_id) {
        product.wished = true;
      }
    });
    setWishItemList([...wishItemList, updatedItem]);
    toast.success("Item added to Wishlist");
  };

  return (
    <CartContext.Provider
      value={{ cartItem, wishItem, cartItemPrice, handleCartItemPrice, cartItemList, wishItemList, handleCartItemList, handleWishItemList, setCartItemList, setWishItemList, handleCartItemListOnPayment, products,}}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};