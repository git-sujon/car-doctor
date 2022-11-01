import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../Asset/logo.svg'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-semibold p-32  text-white">
        <div>
          <img src={logo} alt="" />
          <p>
            Car Doctor Industries Ltd.
            <br />
            Providing reliable Car Services 1992
          </p>
        </div>
        <div>
          <span className="footer-title">About</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
