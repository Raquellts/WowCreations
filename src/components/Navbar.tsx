//propers
import Image from "next/image";
//styles
import buttons from "../styles/buttons.module.scss";
import navbar from "../styles/navbar.module.scss";

export default function Navbar() {
  return (
    <div
      className={`${navbar.backNav} sticky top-0 z-50 navbar backdrop-blur-xl bg-white/50`}
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
        {/* logo for desktop */}
        <Image
          src={"/WOWlogoPT.png"}
          width={50}
          height={50}
          alt="..."
          className="ml-5 hidden sm:block"
        ></Image>
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
        <a className={`${buttons.primaryButton} btn`}>Contato</a>
      </div>
    </div>
  );
}
