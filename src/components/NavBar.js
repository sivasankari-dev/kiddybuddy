import React from "react";
import '../style/NavBar.css';

const NavBar = (props) => {

    return (
        <div>
        <nav>
        <h1 className='brandname'>Kidzone</h1>
        <ul>
          <li>
          <i className="fas fa-user fa-lg icon"></i> 
          </li>
          <li>
          <i class="fas fa-shopping-cart fa-lg icon"></i>
          </li>
          <li>
          <i class="fas fa-heart fa-lg icon"></i>
          </li>
        </ul>
       </nav>
       </div>
    );
}

export default NavBar;
