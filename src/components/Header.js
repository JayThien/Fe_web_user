import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsTelegram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import Logo from "../assets/img/logo.jpg";
import { Link, useLocation } from "react-router-dom";

// tailwindCSS
const styles = {
  hover: "hover:text-yellow-500 cursor-pointer text-blue-500",
  hoverNavItem: "hover:text-yellow-500 hover:bg-blue-500",
  focusNavItem: "text-white bg-blue-500",
};

const Header = () => {
  const location = useLocation();
  const navList = [
    {
      to: "/",
      name: "Trang chủ",
    },
    {
      to: "/contact",
      name: "Liên hệ",
    },
    {
      to: "/news",
      name: "Tin tức",
    },
  ];

  return (
    <div className="flex flex-col pt-4 w-full items-center justify-center">
      {/* Information */}
      <div className="flex flex-row container lg:max-w-7xl">
        <div className="flex flex-1 px-4 lg:px-0">
          <img src={Logo} alt="logo" className="w-30 h-28 object-cover" />
        </div>
        <div className="hidden lg:flex flex-col flex-1 gap-4 items-end justify-end">
          <div className="gap-4 flex flex-row">
            <BsFacebook className={styles.hover} size={20} />
            <BsTwitter className={styles.hover} size={20} />
            <BsTelegram className={styles.hover} size={20} />
          </div>
          <div className="flex flex-row gap-4">
            <div
              className={`flex flex-row items-center justify-center gap-2 ${styles.hover}`}
            >
              <BsFillTelephoneFill className={styles.icon} size={20} />
              <p> 000 000 0001 </p>
            </div>
            <div
              className={`flex flex-row items-center justify-center gap-2 ${styles.hover}`}
            >
              <div>|</div>
              <HiOutlineMailOpen size={20} />
              <p>studentteam10people@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Nav */}
      <div className="flex w-full bg-yellow-500 items-center justify-center mt-4">
        <nav className="container lg:max-w-7xl">
          <ul className="flex flex-row">
            {navList?.map((nav, index) => (
              <Link
                to={nav.to}
                key={index}
                className={`${styles.hoverNavItem} ${
                  location.pathname === nav.to && styles.focusNavItem
                } text-base font-medium px-10 py-4`}
              >
                {nav.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
