//propers
import Image from "next/image";
import React from "react";

//styles
import buttons from "../styles/buttons.module.scss";
import navbar from "../styles/navbar.module.scss";
import Modal from "./Modal";

interface NavbarProps {
  dataToggleTheme: string;
  dataActClass: string;
  // Add any other props you expect to receive
}
const Navbar = (props: NavbarProps) => {
  return (
    <div
      className={`${navbar.backNav} sticky top-0 z-50 navbar backdrop-blur-2xl bg-base-100/50`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className={`${buttons.primaryButton} ml-3 btn md:hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu bg-base-100/80 menu-lg dropdown-content backdrop-blur rounded-box w-52"
          >
            <li>
              <a className={buttons.linkButton} href="#about3">
                Inicio
              </a>
            </li>
            <li>
              <a className={buttons.linkButton}>Sobre</a>
            </li>
            <li>
              <a className={buttons.linkButton}>Trabalhos</a>
            </li>
            <li>
              <a className={buttons.linkButton}>Projetos</a>
            </li>
          </ul>
        </div>
        {/* logo for desktop */}
        <a href="#Inicio">
          <Image
            src={"/logo/WOWlogoPT.png"}
            width={50}
            height={50}
            alt="..."
            className="ml-5 hidden sm:block filter"
          ></Image>
        </a>
      </div>
      <div
        className={`${navbar.navbarStyle} menu-horizontal navbar-center hidden md:flex`}
      >
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className={buttons.linkButton}>Inicio</a>
          </li>
          <li>
            <a className={buttons.linkButton}>Sobre</a>
          </li>
          <li>
            <a className={buttons.linkButton}>Trabalhos</a>
          </li>
          <li>
            <a className={buttons.linkButton}>Projetos</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end mr-3">
        <button
          data-toggle-theme={props.dataToggleTheme}
          data-act-class={props.dataActClass}
          className="btn btn-ghost btn-circle btn-sm"
        >
          <Image
            src={"/icons/sunmoon.svg"}
            width={50}
            height={50}
            alt="..."
            className="filter opacity-70"
          />
        </button>
        <Modal />
      </div>
    </div>
  );
};
export default Navbar;
