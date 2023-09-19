//styles
import Image from "next/image";
import text from "../styles/text.module.scss";

export default function Projects() {
  return (
    <div className="text-center mb-16">
      <p className={`${text.titulo} h-0`}>projetos</p>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src={"/sites/SantaRita.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl mx-auto`}
            alt="..."
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mt-10 xl:mx-20 md:mx-5">
            <a href="#slide5" className="btn btn-circle btn-sm btn-outline">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-sm btn-outline">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src={"/sites/Woods.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl mx-auto`}
            alt="..."
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mt-10 xl:mx-20 md:mx-5">
            <a href="#slide1" className="btn btn-circle btn-sm btn-outline">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-sm btn-outline">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src={"/sites/MuseoBR.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl mx-auto`}
            alt="..."
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mt-10 xl:mx-20 md:mx-5">
            <a href="#slide2" className="btn btn-circle btn-sm btn-outline">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-sm btn-outline">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src={"/sites/RLdesign.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl mx-auto`}
            alt="..."
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mt-10 xl:mx-20 md:mx-5">
            <a href="#slide3" className="btn btn-circle btn-sm btn-outline">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle btn-sm btn-outline">
              ❯
            </a>
          </div>
        </div>

        <div id="slide5" className="carousel-item relative w-full">
          <Image
            src={"/sites/StateSat.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl mx-auto`}
            alt="..."
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mt-10 xl:mx-20 md:mx-5">
            <a href="#slide4" className="btn btn-circle btn-sm btn-outline">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-sm btn-outline">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
