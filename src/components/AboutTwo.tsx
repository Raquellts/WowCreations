//styles
import Image from "next/image";
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";

export default function AboutTwo() {
  return (
    <div>
      <video autoPlay muted loop className={covers.videomock}>
        <source
          src="/sites/ABfestival.mp4"
          type="video/mp4"
          className="iframe-wrapper"
        />
      </video>
      <div className={`grid grid-cols-1 md:grid-cols-3 mt-10`}>
        <div className="flex justify-start col-span-2">
          <Image
            src={"/sites/ABfestival.svg"}
            fill={true}
            alt="..."
            className={covers.mockup}
          />
        </div>
        <div
          className={`${text.infos} flex justify-center flex-col ml-10 md:ml-0 mr-10 md:mr-0`}
        >
          <h2 className={text.titulo}>Tenha Presença Online</h2>
          Ter um site permite que você tenha uma presença digital que pode ser
          acessada por pessoas em qualquer lugar do mundo, aumentando a
          visibilidade e alcance do seu negócio ou projeto.
        </div>
      </div>
    </div>
  );
}
