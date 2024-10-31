import { useState, type FC } from "react";
import Devider from "../devider/Devider";
import IconComponent from "../iconComponent/IconComponent";
import ToggleSwitch from "../toggleSwitch/toggleSwitch";
import { IconNameType } from "../../types/icons";
import s from "./settings.module.scss";

interface DeviceSettingsNotificationsProps {}

interface Notification {
  id: number;
  text: string;
  iconName: IconNameType;
  status: boolean;
}

const DeviceSettingsNotifications: FC<
  DeviceSettingsNotificationsProps
> = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 0, text: "Peer Joined", iconName: "PeopleAdd", status: false },
    { id: 1, text: "Peer Leave", iconName: "PeopleLeave", status: false },
    { id: 2, text: "New Message", iconName: "Chat", status: true },
    { id: 3, text: "Hand Raise", iconName: "HandOn", status: true },
    { id: 4, text: "Error", iconName: "Alert", status: true },
  ]);

  const handleToggle = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, status: !notification.status }
          : notification
      )
    );
  };

  return (
    <ul className={s.notificationList}>
      {notifications.map(({ id, text, iconName, status }) => (
        <li className={s.notificationItem} key={id}>
          <div className={s.outer}>
            <div className={s.inner}>
              <IconComponent iconName={iconName} />
              <span className={s.text}>{text}</span>
            </div>
            <ToggleSwitch status={status} onToggle={() => handleToggle(id)} />
          </div>
          <Devider />
        </li>
      ))}
    </ul>
  );
};

export default DeviceSettingsNotifications;
