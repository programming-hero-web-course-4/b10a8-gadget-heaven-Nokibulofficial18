
# Project Name: **Gadget Heaven✨✨** 


Your day to day life using tech gadgets are here

# Short Description: 
Welcome to GadgetHeaven, which is a fully-featured e-commerce platform designed for gadget enthusiasts. It showcases products across categories such as Smartphones, Laptops, Macbooks, Mouse, Speaker, Smart Watches, Tablets, Gaming Console, E-Book Reader. With a structured navigation bar, wishlist, shopping cart, and product filtering system, users can easily browse and purchase their desired tech accessories. The website is built with React and manages data through Context API, with optional data persistence using LocalStorage.

# Key features of the project:
- **Interactive Home Page**: Showcases an attractive banner, categorized sidebar, and gadget cards with product images, names, and prices.

- **Product Details Page**: Each gadget has a dedicated details page with a full description, specifications, availability status, rating, and options to add to the cart or wishlist.
- **Wishlist and Cart System**: Add items to the wishlist and cart, with the cart tab displaying the total price and a sorting feature.

- **Toast Notifications**: Toasts show feedback on adding items to the cart or wishlist, each with distinct messages.

- **Dynamic Routing**: Includes a 404 page, a statistics page with a price vs. product name chart, and dynamic background color on the home page.

#  React Fundamentals Used
- **React Hooks**: Implemented with useState, useEffect, useContext, useNavigate.

- **Context API**: Centralized state management for cart and wishlist functions.

- **Routing**: useNavigate and useLocation from React Router for smooth navigation and route-based actions.

- **Conditional Rendering**: Handled UI elements like the wishlist button disabling, and the cart's Purchase button based on the cart state


# Live link of the website: 
[Live Site Link](https://gadget-heaven-home.netlify.app/)

# Requirement Document:
[Requirement Document Link](https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-Nokibulofficial18/blob/main/public/Project_description.pdf)


# Core Pages and Components

- **Navbar**: Includes logo, brand name, and links to Dashboard and Stats. The active route is visually indicated.
- **Home Page**: A banner section, gadget category sidebar, and product grid. Clicking categories filters gadgets, and each card has a Details button linking to a detailed view.
- **Product Details Page**: Displays complete information on each product with Add to Cart and Wishlist buttons.
- **Dashboard**: Contains Cart and Wishlist tabs, where users can view added items, sort by price, and manage their selections.
- **About Page**: Briefly describes the website and its purpose.
- **404 Page**: Redirects users when they access a non-existent page.

## Data Management

The Context API is used to manage cart and wishlist data across the app, with optional LocalStorage for data persistence across page reloads.

## Additional Functionalities

- **Persistent Wishlist and Cart**: Once an item is added to the wishlist, its button is disabled to prevent duplicates, even when revisiting the product.
- **Sorting and Filtering**: Users can sort cart items by price and filter products by category on the home page.
- **Statistics Page**: Visual chart showing price vs. product name, with additional data mapped by product rating.
- **Purchase Modal**: When completing a purchase, a modal congratulates the user, empties the cart, and redirects them home.

---

Happy shopping With **Gadget Heaven!!😊😊😊😊** 