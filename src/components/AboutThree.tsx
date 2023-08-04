//styles
import Image from "next/image";
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";

export default function AboutThree() {
  return (
    <div className={`${covers.divAbout} h-auto md:h-100`}>
      {/*Gradient cima esquerda*/}
      <div className={`${covers.blob} ${covers.botLeft}`} />

      {/*Gradient cima direita*/}
      <div className={`${covers.blob} ${covers.botRight}`} />

      <div className={`${covers.divAbout}`}>
        <div className={`hidden md:block`}>
          <Image
            src={"/icons/REACT.svg"}
            height={80}
            width={80}
            alt="React"
            className={`${covers.aboutIcon} ${covers.react}`}
          />
          <Image
            src={"/icons/SASS.svg"}
            height={70}
            width={70}
            alt="Sass"
            className={`${covers.aboutIcon} ${covers.sass}`}
          />
          <Image
            src={"/icons/JS.svg"}
            height={85}
            width={85}
            alt="JavaScript"
            className={`${covers.aboutIcon} ${covers.js}`}
          />
        </div>

        <div
          className={`${text.infos} m-10 border-4 rounded-3xl w-fit lg:w-1/3 md:w-2/5`}
        >
          <p className="m-10">
            <h2 className={text.titulo}>Tenha Presença Online</h2>
            Ter um site permite que você tenha uma presença digital que pode ser
            acessada por pessoas em qualquer lugar do mundo, aumentando a
            visibilidade e alcance do seu negócio ou projeto.
          </p>
        </div>

        <div className={`hidden md:block`}>
          <Image
            src={"/icons/PYTHON.svg"}
            height={80}
            width={80}
            alt="React"
            className={`${covers.aboutIcon} ${covers.phyton}`}
          />
          <Image
            src={"/icons/TAILWIND.svg"}
            height={70}
            width={70}
            alt="Sass"
            className={`${covers.aboutIcon} ${covers.tailwind}`}
          />
          <Image
            src={"/icons/NEXTJS.svg"}
            height={85}
            width={85}
            alt="JavaScript"
            className={`${covers.aboutIcon} ${covers.nextjs}`}
          />
        </div>
      </div>
    </div>
  );
}