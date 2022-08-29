import "./Header.css";
import Logo from "../../../assets/img/GitHub-Mark-Light-32px.png";
import Nav from "./Nav/Nav";
import bell from "../../../assets/img/photo_2022-08-28_02-31-15.jpg";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { context } from "../../../context";

const Header = () => {
  const { values } = useContext(context);
  const {
    setUser,
    searchUser,
    foundUsers,
    setSearchUser,
    getInfo,
    setFoundUsers,
  } = values;

  return (
    <>
      <header className="site-header p-3">
        <div className="container">
          <div className="d-flex align-items-center">
            <img src={Logo} alt="site-logo" />
            <input
              onChange={(e) => {
                return (
                  setSearchUser(e.target.value),
                  !searchUser ? setFoundUsers([]) : ""
                );
              }}
              onKeyPress={(e) => {
                e.key.toLowerCase().trim() === "enter" ? getInfo() : "";
              }}
              className="serach-input ms-4 rounded"
              placeholder="Serach or jump to..."
              type="serach"
            />
            <ul className="search-items position-absolute list-unstyled p-0 m-0 rounded-3">
              {searchUser
                ? foundUsers.map((item) => {
                    return (
                      <li
                        className="search-item py-2 px-2  border-bottom"
                        key={item.id}
                        onClick={(e) => {
                          setUser(item.login), setSearchUser("");
                        }}
                      >
                        {item.login}
                      </li>
                    );
                  })
                : ""}
            </ul>
            <Nav />
            <img className="bell" src={bell} alt="" />
            <nav class="navbar navbar-dark ">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasDarkNavbar"
                  aria-controls="offcanvasDarkNavbar"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="offcanvas offcanvas-end  text-bg-dark"
                  style={{ width: "250px" }}
                  tabindex="-1"
                  id="offcanvasDarkNavbar"
                  aria-labelledby="offcanvasDarkNavbarLabel"
                >
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                      Dark offcanvas
                    </h5>
                    <button
                      type="button"
                      class="btn-close btn-close-white"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Home
                        </a>
                      </li>
                      <li class="nav-item pt-2">Your Profile</li>
                      <li class="nav-item pt-2">Your Repository</li>
                      <li class="nav-item pt-2">Your Project</li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "active text-decoration-none"
                            : "text-decoration-none"
                        }
                        to="/log"
                      >
                        <li class="nav-item text-decoration-none nav-link">
                          Log Out
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
