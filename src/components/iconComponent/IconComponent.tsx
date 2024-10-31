import { SVGProps, useEffect, useState, type FC } from "react";
import s from "./iconComponent.module.scss";
import { IconNameType } from "../../types/icons";

interface IconComponentProps {
  onClick?: () => void;
  selectedClass?: boolean;
  iconName: IconNameType;
}

const IconComponent: FC<IconComponentProps> = ({
  onClick,
  iconName,
  selectedClass,
}) => {
  const [Icon, setIcon] = useState<FC<SVGProps<SVGSVGElement>> | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const module = await import(`../../assets/icons/${iconName}.svg`);
        setIcon(() => module.default);
      } catch (error) {
        console.error(`Icon ${iconName} not found`, error);
      }
    };
    loadIcon();
  }, [iconName]);

  return Icon ? (
    <Icon
      className={`${s.micro} ${selectedClass ? s.selected : ""}`}
      onClick={onClick || undefined}
    />
  ) : null;
};

export default IconComponent;
