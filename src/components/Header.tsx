//styles
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";

export default function Header() {
  return (
    <div className={`${covers.relativeDiv}`} id="#">
      <div className={`${covers.absoluteBack} ${covers.topLeft} filter2`} />

      <div className={`${covers.absoluteBack} ${covers.topRight} filter2`} />

      <div className={`${covers.divHeader} flex flex-col text-focus-in`}>
        {/*wow creations texto para telas LG*/}
        <div className="hidden md:block">
          <div className={`${text.bigHDTXT} flex flex-row uppercase`}>
            <div className={`${text.W}`}>w</div>
            <div className="mt-0.2">o</div>
            <div className={`${text.W} mr-6`}>w</div>
            <div>creations</div>
          </div>
        </div>

        {/*wow creations texto para telas SM*/}
        <div className="md:hidden sm:block flex flex-col ml-1">
          <div className={`${text.UltrabigTXT} flex flex-row uppercase`}>
            <div className={`${text.W}`}>w</div>
            <div className="mt-0.2">o</div>
            <div className={`${text.W} mr-6`}>w</div>
          </div>
          <div className={`${text.smallHDTXT}`}>creations</div>
        </div>
        {/*texto header para telas BG - MD*/}
        <p className={`${text.smallHDTXT} hidden md:block`}>
          Se alinhe a modernidade
        </p>
      </div>
    </div>
  );
}
