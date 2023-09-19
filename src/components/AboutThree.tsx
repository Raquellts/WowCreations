//styles
import Image from "next/image";
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";

export default function AboutThree() {
  return (
    <div className={`${covers.divAbout} h-auto md:h-100`} id="about3">
      {/*Gradient cima esquerda*/}
      <div className={`${covers.absoluteBack} ${covers.botLeft} filter2`} />

      {/*Gradient cima direita*/}
      <div className={`${covers.absoluteBack} ${covers.botRight} filter2`} />

      <div className={`${covers.divAbout}`}>
        <div className={`hidden md:block mb-5`}>
          <a href="https://reactjs.org/" target="_blank">
            <Image
              src={"/icons/REACT.svg"}
              height={80}
              width={80}
              alt="React"
              className={`${covers.aboutIcon} ${covers.react} filter`}
            />
          </a>
          <a href="https://sass-lang.com/" target="_blank">
            <Image
              src={"/icons/SASS.svg"}
              height={70}
              width={70}
              alt="Sass"
              className={`${covers.aboutIcon} ${covers.sass} filter`}
            />
          </a>
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
          >
            <Image
              src={"/icons/JS.svg"}
              height={85}
              width={85}
              alt="JavaScript"
              className={`${covers.aboutIcon} ${covers.js} filter`}
            />
          </a>
        </div>

        <div
          className={`${text.infos} ${covers.cardBorder} m-10 w-fit lg:w-1/3 md:w-2/5`}
        >
          <div className="m-10">
            <p className={text.titulo}>COMO TRABALHAMOS</p>
            <p className={text.paragrafo}>
              Na WOWCreations, estamos dedicados a transformar ideias em
              realidade digital de maneira elegante e funcional. Somos uma
              equipe apaixonada por criar landing pages que capturam a essência
              de cada marca e impulsionam resultados mensuráveis. Combinamos
              criatividade, tecnologia e estratégia para oferecer soluções de
              design responsivo que cativam o público e aumentam as conversões.
            </p>
          </div>
        </div>

        <div className={`hidden md:block mb-5`}>
          <a href="https://www.typescriptlang.org" target="_blank">
            <Image
              src={"/icons/TYPESCRIPT.svg"}
              height={80}
              width={80}
              alt="React"
              className={`${covers.aboutIcon} ${covers.typescript} filter`}
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <Image
              src={"/icons/TAILWIND.svg"}
              height={70}
              width={70}
              alt="Sass"
              className={`${covers.aboutIcon} ${covers.tailwind} filter`}
            />
          </a>
          <a href="https://nextjs.org/" target="_blank">
            <Image
              src={"/icons/NEXTJS.svg"}
              height={85}
              width={85}
              alt="JavaScript"
              className={`${covers.aboutIcon} ${covers.nextjs} filter`}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
