import { Box, FormControlLabel, Switch } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { isDescState } from "../../../../atoms/descAtoms";
import { useRecoilState } from "recoil";

export default function FixedButton() {
  const [isDesc, setIsDesc] = useRecoilState(isDescState);
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDesc(event.target.checked);
  };

  return (
    <FixedButtonContainer>
      <FormControlLabel
        control={
          <Switch
            checked={isDesc}
            onChange={handleSwitchChange}
            color="primary"
          />
        }
        label={isDesc ? "설명 ON" : "설명 OFF"}
      />
    </FixedButtonContainer>
  );
}

const FixedButtonContainer = styled(Box)`
  position: fixed;
  width: 158px;
  bottom: 30px;
  left: 40px;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;
