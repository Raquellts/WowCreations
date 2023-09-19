//styles
import Image from "next/image";
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";

export default function AboutOne() {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3`} id="about1">
      <div
        className={`${text.infos} flex justify-center flex-col mx-10 md:mr-0 xl:-mr-16`}
      >
        <p className={text.titulo}>TENHA PRESENÇA ONLINE</p>
        Ter um site permite que você tenha uma presença digital que pode ser
        acessada por pessoas em qualquer lugar do mundo, aumentando a
        visibilidade e alcance do seu negócio ou projeto. Sua jornada para o
        sucesso digital começa aqui.
      </div>
      <div className="flex justify-end col-span-2">
        <Image
          src={"/sites/StateSat.svg"}
          fill={true}
          alt="..."
          className={covers.mockup}
        />
      </div>
    </div>
  );
}
