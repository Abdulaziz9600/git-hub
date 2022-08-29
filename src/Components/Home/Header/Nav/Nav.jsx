import React from "react";

const Nav = () => {
  return (
    <>
      <div className="container">
        <nav className="nav-item ">
          <ul className='nav-list d-flex align-items-center m-0 gap-4 list-unstyled' >
            <li className='text-white'>Pull requests</li>
            <li className='text-white'>Issues</li>
            <li className='text-white'>Marketplace</li>
            <li className='text-white'>Explore</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
