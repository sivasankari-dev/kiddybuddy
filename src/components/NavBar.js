import React, {useState} from "react";
import '../style/NavBar.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   // Function to handle dropdown visibility
   const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    return (
      <>
      <nav className="navbar">
       {/* Burger Icon (visible on all screens) */}
      <div className="burger-icon" onClick={handleMenuToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> 

      {/* Logo */}
      <div className="logo">
        <h1>Kidzone</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search toys..." />
        <FaSearch className="search-icon" />
      </div>

      {/* Icons Section */}
      <div className="icons">
        <div className="icon user-icon"><FaRegCircleUser/></div>
        <div className="icon wishlist-icon"><FaCartShopping/></div>
        <div className="icon cart-icon"><FaRegHeart/></div>
      </div>
    </nav>

      {/* Menu items below the navbar */}
         <div className="menu">
        <ul className="menu-items">
          <li className="menu-item">Login</li>
          <li className="menu-item">Winter sale</li>
          <li className="menu-item dropdown"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}>Brands
            {/* <FaChevronDown className={`dropdown-icon ${isMenuOpen ? 'rotate' : ''}`} /> */}
            {/* Dropdown Menu */}
            <ul className= {`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <li className="dropdown-item">Brand 1</li>
              <li className="dropdown-item">Brand 2</li>
              <li className="dropdown-item">Brand 3</li>
              <li className="dropdown-item">Brand 4</li>
            </ul></li>
          <li className="menu-item">Category</li>
          <li className="menu-item">Age-wise</li>
          <li className="menu-item">Bulkorder</li>
          <li className="menu-item">Giftcards</li>
          <li className="menu-item">About Us</li>
          <li className="menu-item">Contact Us</li>
        </ul>
      </div>


      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-item">Home</div>
        <div className="mobile-menu-item">Login</div>
        <div className="mobile-menu-item">Category</div>
        <div className="mobile-menu-item">About Us</div>
        <div className="mobile-menu-item">Contact Us</div>
      </div>
      </>
  );
};

//         <div>
//         <nav>
//         <h1 className='brandname'>Kidzone</h1>
//         <ul>
//           <li>
//           <FaRegCircleUser className="icon"/>
//           </li>
//           <li>
//           <FaCartShopping  className="icon"/>
//           </li>
//           <li>
//           <FaRegHeart className="icon"/>
//           </li>
//         </ul>
//        </nav>
//        </div>
//     );
// }

export default NavBar;
