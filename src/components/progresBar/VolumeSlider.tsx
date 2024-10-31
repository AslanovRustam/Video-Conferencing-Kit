import { ChangeEvent, useState } from "react";
import s from "./volumeSlider.module.scss";
import IconComponent from "../iconComponent/IconComponent";

const VolumeSlider = () => {
  const [volume, setVolume] = useState(30); // Начальное значение громкости

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className={s.volumeSlider}>
      <IconComponent iconName="MicOn" />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className={s.slider}
        style={{
          background: `linear-gradient(to right, #EFF0FC ${volume}%, #8f909b ${volume}%)`,
        }}
      />
    </div>
  );
};

export default VolumeSlider;
