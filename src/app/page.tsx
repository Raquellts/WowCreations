//styles
"use client";
import covers from "../styles/covers.module.scss";

import { useEffect } from "react";
import { themeChange } from "theme-change";

//components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutOne from "@/components/AboutOne";
import AboutTwo from "@/components/AboutTwo";
import AboutThree from "@/components/AboutThree";
import Projects from "@/components/Projects";
import Cards from "@/components/Cards";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <main>
      <div id="overflow">
        <div
          style={{ width: "65px", height: "65px" }}
          className="md:hidden absolute bottom-0 right-0"
        >
          <button
            data-toggle-theme="dark,winter"
            data-act-class="ACTIVECLASS"
            className="btn btn-defualt btn-circle fixed drop-shadow-lg"
            style={{ zIndex: 100 }}
          >
            <Image
              src={"/icons/sunmoon.svg"}
              width={35}
              height={35}
              alt="..."
              className="filter opacity-70"
            />
          </button>
        </div>

        <Navbar dataToggleTheme="dark,winter" dataActClass="ACTIVECLASS" />

        <Header />

        <AboutOne />

        <AboutTwo />

        <AboutThree />

        <Cards />

        <Projects />

        <Footer />

        {/*Ruido de fundo*/}
      </div>
    </main>
  );
}
