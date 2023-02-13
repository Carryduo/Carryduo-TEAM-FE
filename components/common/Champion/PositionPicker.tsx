import React, { useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useRecoilState } from "recoil";
import { PickPosition } from "../../../core/config/PickPosition";
import Position from "../../../core/config/ChampionPosition.json";

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
  return (
    <ToggleButtonGroup
      color="success"
      value={position}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className="h-14"
    >
      {Position.ChampionWinRatedata.map(({ id }) => {
        return (
          <ToggleButton key={id} value={id}>
            <img
              alt={id}
              src={`/positionIcon/Position_Challenger-${id}.png`}
              width={40}
              height={40}
            />
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default PositionPicker;
