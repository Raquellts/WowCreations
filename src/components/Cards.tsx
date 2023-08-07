//styles
import Image from "next/image";
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";

export default function Cards() {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 place-items-center mb-1 lg:mx-20 md:mx-10 mx-0`}
    >
      <div
        className={`${text.infos} ${covers.cardBorder} mx-20 w-fit md:w-3/4`}
      >
        <div className="flex justify-end col-span-2">
          <Image
            src={"/icons/createlogo.svg"}
            height={500}
            width={500}
            alt="..."
            className={covers.cardivs}
          />
        </div>
      </div>

      <div
        className={`${text.infos} ${covers.cardBorder} mx-20 w-fit md:w-3/4`}
      >
        <div className="flex justify-end col-span-2">
          <Image
            src={"/icons/inovate.svg"}
            height={500}
            width={500}
            alt="..."
            className={covers.cardivs}
          />
        </div>
      </div>

      <div
        className={`${text.infos} ${covers.cardBorder} mx-20 w-fit md:w-3/4`}
      >
        <div className="flex justify-end col-span-2">
          <Image
            src={"/icons/program.svg"}
            height={500}
            width={500}
            alt="..."
            className={covers.cardivs}
          />
        </div>
      </div>
    </div>
  );
}
