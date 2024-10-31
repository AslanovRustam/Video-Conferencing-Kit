import Title from "../../components/title/Title";
import SubTitle from "../../components/subTitle/SubTitle";
import VideoScreen from "../../components/videoScreen/VideoScreen";
import LiveBadge from "../../components/liveBadge/LiveBadge";
import PeopleInRoom from "../../components/peopleInRoom/PeopleInRoom";
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
      <div className={s.sessionComponent}>
        <LiveBadge />
        <PeopleInRoom />
      </div>
      <VideoScreen />
    </section>
  );
}

export default Home;
