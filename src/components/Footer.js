import React from "react";
import Logo from "../assets/img/logo.jpg";
import {
  BsFacebook,
  BsTwitter,
  BsTelegram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { HiOutlineMailOpen, HiLocationMarker } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const styles = {
  hover: "hover:text-yellow-500 cursor-pointer text-blue-500",
  hoverNavItem: "hover:text-yellow-500",
  focusNavItem: "text-blue-500",
};

const Footer = () => {
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
    <div className="flex flex-col gap-4 py-10 container lg:max-w-7xl items-center justify-center">
      <div>
        <img src={Logo} alt="logo" className="w-30 h-28 object-cover" />
      </div>
      <div className="gap-4 flex flex-row">
        <BsFacebook className={styles.hover} size={20} />
        <BsTwitter className={styles.hover} size={20} />
        <BsTelegram className={styles.hover} size={20} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <span className="font-bold text-base uppercase">Về chúng tôi</span>
          <ul className="flex flex-1 flex-col gap-4">
            {navList?.map((nav, index) => (
              <Link
                to={nav.to}
                key={index}
                className={`${styles.hoverNavItem} ${
                  location.pathname === nav.to && styles.focusNavItem
                } text-base font-medium`}
              >
                {nav.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-end justify-end">
          <span className="font-bold text-base uppercase">Liên hệ</span>
          <div className={`flex flex-row gap-4 items-center ${styles.hover}`}>
            <BsFillTelephoneFill size={20} />
            <p>000 000 0001</p>
          </div>
          <div className={`flex flex-row gap-4 items-center ${styles.hover}`}>
            <HiLocationMarker size={20} />
            <p>Van Lang University</p>
          </div>
          <div className={`flex flex-row gap-4 items-center ${styles.hover}`}>
            <HiOutlineMailOpen size={20} />
            <p>studentteam10people@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="opacity-70 text-sm mt-4">&copy;Copyright by myTeam</p>
    </div>
  );
};

export default Footer;
