import { FormEvent, useState } from "react";
import Button from "../button/Button";
import GoLive from "../../assets/radio.svg";
import s from "./nameComponent.module.scss";
import ModalWrapper from "../modalWrapper/ModalWrapper";
import SubTitle from "../subTitle/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { selectBasicSettings } from "../../redux/selectors";

function NameComponent() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const basicSettings = useSelector(selectBasicSettings);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (basicSettings.camera && basicSettings.microphoneOn) {
      console.log("qwe");
    }
    setShowModal(!showModal);
  };

  const togleModal = () => {
    setShowModal(!showModal);
  };
  console.log(basicSettings);

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" text="Go Live">
          <GoLive className={s.icon} />
        </Button>
      </form>
      {showModal && (
        <ModalWrapper>
          <div className={s.modalContent}>
            <p className={s.title}>Allow to use your microphone and camera</p>
            <SubTitle text="Access to Microphone and Camera is required. Enable permissions for Microphone and Camera by clicking “Allow” on the pop-up." />
            <div className={s.btnContainer}>
              <Button text={"Dismiss"} transparent onClick={togleModal} />
              <Button text={"Retry"} onClick={togleModal} />
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}

export default NameComponent;
