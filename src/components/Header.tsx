//styles
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";

export default function Header() {
  return (
    <div className={`${covers.relativeDiv}`}>
      <div className={`${covers.absoluteBack} ${covers.topLeft}`} />

      <div className={`${covers.absoluteBack} ${covers.topRight}`} />

      <div className={`${covers.divHeader} flex flex-col text-focus-in`}>
        {/*wow creations texto*/}
        <div className={`${text.bigHDTXT} flex flex-row uppercase`}>
          <div className={`${text.W}`}>w</div>
          <div>o</div>
          <div className={`${text.W} mr-6`}>w</div>
          <div className="hidden md:block">creations</div>
        </div>

        {/*creations texto para telas SM*/}
        <div className={`${text.smallHDTXT} flex flex-row uppercase md:hidden`}>
          creations
        </div>

        {/*texto header para telas BG - MD*/}
        <p className={`${text.smallHDTXT} hidden md:block`}>
          Se alinhe a modernidade
        </p>
      </div>
    </div>
  );
}
