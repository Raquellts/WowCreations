//styles
import Image from "next/image";
import covers from "../styles/covers.module.scss";

export default function Projects() {
  return (
    <div className="">
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full flex justify-center"
        >
          <Image
            src={"/sites/StateSat.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl`}
            alt="..."
          />
          <div className="absolute flex justify-center bottom-2 gap-10">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full flex justify-center"
        >
          <Image
            src={"/sites/ABfestival.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl`}
            alt="..."
          />
          <div className="absolute flex justify-center bottom-2 gap-10">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide3"
          className="carousel-item relative w-full flex justify-center"
        >
          <Image
            src={"/sites/MuseoBR.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl`}
            alt="..."
          />
          <div className="absolute flex justify-center bottom-2 gap-10">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide4"
          className="carousel-item relative w-full flex justify-center"
        >
          <Image
            src={"/sites/RLdesign.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl`}
            alt="..."
          />
          <div className="absolute flex justify-center bottom-2 gap-10">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide5"
          className="carousel-item relative w-full flex justify-center"
        >
          <Image
            src={"/sites/SantaRita.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl`}
            alt="..."
          />
          <div className="absolute flex justify-center bottom-2 gap-10">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide6"
          className="carousel-item relative w-full flex justify-center"
        >
          <Image
            src={"/sites/Woods.png"}
            height={1500}
            width={2000}
            quality={100}
            className={`w-100 md:w-101 h-fit mt-20 border-4 rounded-3xl`}
            alt="..."
          />
          <div className="absolute flex justify-center bottom-2 gap-10">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2 my-5">
        <a href="#slide1" className="btn btn-xs btn-circle">
          1
        </a>
        <a href="#slide2" className="btn btn-xs btn-circle">
          2
        </a>
        <a href="#slide3" className="btn btn-xs btn-circle">
          3
        </a>
        <a href="#slide4" className="btn btn-xs btn-circle">
          4
        </a>
        <a href="#slide5" className="btn btn-xs btn-circle">
          5
        </a>
        <a href="#slide6" className="btn btn-xs btn-circle">
          6
        </a>
      </div>
    </div>
  );
}
