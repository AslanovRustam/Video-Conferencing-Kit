import React from "react";
import Title from "../../components/title/Title";
import s from "./home.module.scss";
import SubTitle from "../../components/subTitle/SubTitle";
import Logo from "../../assets/logo.svg";
import VideoScreen from "../../components/videoScreen/VideoScreen";

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
