import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button/Button";
import ModalWrapper from "../modalWrapper/ModalWrapper";
import SubTitle from "../subTitle/SubTitle";
import { selectBasicSettings } from "../../redux/selectors";
import { setUser } from "../../redux/userSlice";
import GoLive from "../../assets/icons/radio.svg";
import s from "./nameComponent.module.scss";

interface ModalWrapperProps {
  checkPermissions: () => Promise<void>;
  showModalPremissions: boolean;
  setShowModalPremissions: Dispatch<SetStateAction<boolean>>;
}

function NameComponent({
  checkPermissions,
  showModalPremissions,
  setShowModalPremissions,
}: ModalWrapperProps) {
  const [name, setName] = useState("");
  const basicSettings = useSelector(selectBasicSettings);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("handleSubmit");

    if (!basicSettings.camera || !basicSettings.microphoneOn) {
      setShowModalPremissions(true);
      return;
    }
    checkPermissions();
    dispatch(setUser(name));
    setName("");
  };

  const togleModal = (): void => {
    setShowModalPremissions(!showModalPremissions);
  };

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
      {showModalPremissions && (
        <ModalWrapper>
          <div className={s.modalContent}>
            <p className={s.title}>Allow to use your microphone and camera</p>
            <SubTitle text="Access to Microphone and Camera is required. Enable permissions for Microphone and Camera by clicking “Allow” on the pop-up." />
            <div className={s.btnContainer}>
              <Button text={"Dismiss"} transparent onClick={togleModal} />
              <Button text={"Retry"} onClick={checkPermissions} />
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}

export default NameComponent;
