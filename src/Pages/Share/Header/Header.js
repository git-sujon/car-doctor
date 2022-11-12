import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Asset/logo.svg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const deleteHandler = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 font-semibold my-14">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn w-28 btn-ghost normal-case text-xl">
            <img className="w-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

           
              {user?.email ? (
                <>
                  <li>
                    <Link to="/orders">Orders</Link>
                  </li>
                  <li>
                    <button onClick={deleteHandler} className="">
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
           

         
          </ul>
        </div>

        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-outline btn-warning">Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
