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

export default function Home() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <main>
      <div id="overflow">
        <Navbar dataToggleTheme="dark,winter" dataActClass="ACTIVECLASS" />

        <Header />

        <AboutOne />

        <AboutTwo />

        <AboutThree />

        <Cards />

        <Projects />

        <Footer />

        {/*Ruido de fundo*/}
        <div className={covers.backgroundImage} />
      </div>
    </main>
  );
}
