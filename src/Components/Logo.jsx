import LogoSvg from "../assets/main-logo.svg";

function Logo() {
  return (
    <picture className="min-w-[256px] w-[min(100%_,90%)] max-lg:w-full">
      <img
        className="h-full w-full "
        src={LogoSvg}
        alt="Existential Coffee Break Logo"
      ></img>
    </picture>
  );
}

export default Logo;
