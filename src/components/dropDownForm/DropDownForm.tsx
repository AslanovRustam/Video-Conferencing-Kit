import { useEffect, useRef, useState, type FC } from "react";
import IconComponent from "../iconComponent/IconComponent";
import { IAudioDevice, IVideoDevice } from "../../types/streamDevice";
import s from "./dropDownForm.module.scss";

interface DropDownFormProps {
  title: string;
  devices: IAudioDevice[] | IVideoDevice[];
  onClick: (deviceId: string) => Promise<void>;
}

const DropDownForm: FC<DropDownFormProps> = ({ title, devices, onClick }) => {
  const [showList, setShowList] = useState<boolean>(false);
  const currentActiveDevice = devices.find((item) => item.checked === true);
  const dropDownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handler = (e: MouseEvent): void => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(e.target as Node)
    ) {
      setShowList(false);
    }
  };
  const showDropdownList = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setShowList(!showList);
  };

  return (
    <div className={s.container}>
      <p className={s.title}>{title}</p>
      <div className={s.selection} onClick={showDropdownList}>
        <div className={s.currentSelection}>
          <IconComponent
            iconName={
              title === "Video"
                ? "CameraOn"
                : title === "Microphone"
                ? "MicOn"
                : "Speakers"
            }
          />
          <p className={s.text}>{currentActiveDevice?.label}</p>
        </div>
        <IconComponent iconName="check" />
      </div>
      <ul className={`${s.list} ${showList && s.show}`} ref={dropDownRef}>
        {devices.map((item) => (
          <li
            key={item.deviceId}
            className={s.item}
            onClick={() => onClick(item.deviceId)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownForm;
