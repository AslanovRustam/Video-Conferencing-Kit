import s from "./logoContainer.module.scss";
import Logo from "../../assets/logo.svg";

function LogoContainer() {
  return <Logo className={s.logo} />;
}

export default LogoContainer;
