import Title from "../../components/title/Title";
import SubTitle from "../../components/subTitle/SubTitle";
import VideoScreen from "../../components/videoScreen/VideoScreen";
import Logo from "../../assets/icons/logo.svg";
import s from "./home.module.scss";

function Home() {
  return (
    <section className={s.section}>
      <Logo className={s.logo} />
      <div className={s.titleContainer}>
        <Title text="Get Started" />
        <SubTitle text="Setup your audio and video before joining" />
      </div>
      <p className={s.badge}>
        <span className={s.innerText}>You are the first to join</span>
      </p>
      <VideoScreen />
    </section>
  );
}

export default Home;
