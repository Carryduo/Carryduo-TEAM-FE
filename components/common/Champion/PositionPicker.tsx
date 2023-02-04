import React, { useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useRecoilState } from "recoil";
import { PickPosition } from "../../../core/config/PickPosition";

interface IProps {
  line: string;
}

const PositionPicker = ({ line }: IProps) => {
  const [position, setPosition] = useRecoilState(PickPosition);
  const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setPosition(String(event.currentTarget.getAttribute("value")));
  };
  useEffect(() => {
    if (position === "") setPosition(line);
  }, []);
  console.log(position, line);
  return (
    <ToggleButtonGroup
      color="success"
      value={position}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className="h-14"
    >
      <ToggleButton value="top">
        <img
          alt="top"
          src="/positionIcon/Position_Challenger-top.png"
          width={40}
          height={40}
        />
      </ToggleButton>
      <ToggleButton value="jungle">
        <img
          alt="jungle"
          src="/positionIcon/Position_Challenger-jungle.png"
          width={40}
          height={40}
        />
      </ToggleButton>
      <ToggleButton value="mid">
        <img
          alt="mid"
          src="/positionIcon/Position_Challenger-mid.png"
          width={40}
          height={40}
        />
      </ToggleButton>
      <ToggleButton value="ad">
        <img
          alt="ad"
          src="/positionIcon/Position_Challenger-ad.png"
          width={40}
          height={40}
        />
      </ToggleButton>
      <ToggleButton value="support">
        <img
          alt="support"
          src="/positionIcon/Position_Challenger-support.png"
          width={40}
          height={40}
        />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default PositionPicker;
