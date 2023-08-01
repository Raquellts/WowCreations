//styles
import covers from "../styles/covers.module.scss";
//components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Footer />
      {/*Ruido de fundo*/}
      <div className={covers.backgroundImage} />
    </main>
  );
}
