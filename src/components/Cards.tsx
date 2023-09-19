//styles
import Image from "next/image";
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";

export default function Cards() {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 place-items-center lg:mx-20 mx-0 text-center mx-10`}
    >
      <div
        className={`${text.infos} ${covers.cardBorder} ${covers.cardcenter} w-fit md:w-102 lg:w-3/4`}
      >
        <div className="m-5">
          <div className="flex justify-end col-span-2">
            <Image
              src={"/icons/createlogo.svg"}
              height={500}
              width={500}
              alt="..."
              className={covers.cardivs}
            />
          </div>
          <p className={`${text.titulo} uppercase`}> visual </p>
          <p className={`${text.card}`}>
            Damos vida a personalidade da sua marca, criando confiança,
            seriedade e reconhecimento.
          </p>
        </div>
      </div>

      <div
        className={`${text.infos} ${covers.cardBorder} ${covers.cardcenter} w-fit md:w-102 lg:w-3/4`}
      >
        <div className="m-5">
          <div className="flex justify-end col-span-2">
            <Image
              src={"/icons/inovate.svg"}
              height={500}
              width={500}
              alt="..."
              className={covers.cardivs}
            />
          </div>
          <p className={`${text.titulo} uppercase`}> design </p>
          <p className={`${text.card}`}>
            Planejamos antes de construir, utilizando o Figma, garantindo a
            atratividade e usabilidade do site.
          </p>
        </div>
      </div>

      <div
        className={`${text.infos} ${covers.cardBorder} ${covers.cardcenter} w-fit md:w-102 lg:w-3/4`}
      >
        <div className="m-5 ">
          <div className="flex justify-end col-span-2">
            <Image
              src={"/icons/program.svg"}
              height={500}
              width={500}
              alt="..."
              className={covers.cardivs}
            />
          </div>
          <p className={`${text.titulo} uppercase`}> criação </p>
          <p className={`${text.card}`}>
            Criamos sua presença online, a porta de entrada para novos clientes
            e novos negócios.
          </p>
        </div>
      </div>
    </div>
  );
}
