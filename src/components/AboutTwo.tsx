//styles
import Image from "next/image";
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";

export default function AboutTwo() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className={`${covers.videomock} transform translate-x-10 translate-y-14 scale-150 md:scale-100 md:translate-x-0 md:translate-y-0`}
      >
        <source
          src="/sites/ABfestival.mp4"
          type="video/mp4"
          className="iframe-wrapper"
        />
      </video>
      <div className={`grid grid-cols-1 md:grid-cols-3`}>
        <div className="flex justify-start col-span-2">
          <Image
            src={"/sites/ABfestival.svg"}
            fill={true}
            alt="..."
            className={covers.mockup}
          />
        </div>
        <div
          className={`${text.infos} flex justify-center flex-col ml-10 md:ml-0 mr-10 md:mr-10`}
        >
          <h2 className={text.titulo}>RESPONSIVIDADE</h2>
          De desktops a smartphones, ofereça uma experiência perfeita. Suas
          páginas irão se adaptar magicamente a qualquer tela, garantindo que
          seu conteúdo impressione, independentemente do dispositivo utilizado.
          Alcance uma audiência mais ampla com design responsivo de última
          geração.
        </div>
      </div>
    </div>
  );
}
