import { useState } from "react";
import SettingsItem from "./SettingsItem";
import IconComponent from "../iconComponent/IconComponent";
import Devider from "../devider/Devider";
import DeviceSettingsTab from "./DeviceSettingsTab";
import s from "./settings.module.scss";
import DeviceSettingsNotifications from "./DeviceSettingsNotifications";
import { log } from "console";

interface SettingsProps {
  closeModal: () => void;
  cameraStream: MediaStream | null;
  micStream: MediaStream | null;
}

interface ITab {
  id: number;
  text: string;
  iconName: "Settings" | "BellOn";
  isActive: boolean;
}

function Settings({ closeModal, cameraStream, micStream }: SettingsProps) {
  const [tabs, setTabs] = useState<ITab[]>([
    { id: 0, text: "Device Settings", iconName: "Settings", isActive: true },
    { id: 1, text: "Notifications", iconName: "BellOn", isActive: false },
  ]);

  const handleActiveTab = (id: number) => {
    const newTabs = tabs.map((item) =>
      item.id === id
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setTabs(newTabs);
  };
  const activeTab = tabs.find((tab) => tab.isActive);
  console.log(activeTab);

  return (
    <div className={s.container}>
      <aside className={s.aside}>
        <p className={s.title}>Settings</p>
        <ul className={s.list}>
          {tabs.map((item) => (
            <li
              className={`${s.item} ${item.isActive && s.active}`}
              key={item.id}
              onClick={() => handleActiveTab(item.id)}
            >
              <SettingsItem iconName={item.iconName} text={item.text} />
            </li>
          ))}
        </ul>
      </aside>
      <div className={s.content}>
        <div className={s.wrapper}>
          <p className={s.title}>{activeTab?.text}</p>
          <IconComponent iconName="Cross" onClick={closeModal} />
        </div>
        <Devider />
        {activeTab?.id === 0 ? (
          <DeviceSettingsTab
            cameraStream={cameraStream}
            micStream={micStream}
          />
        ) : (
          <DeviceSettingsNotifications />
        )}
      </div>
    </div>
  );
}

export default Settings;
