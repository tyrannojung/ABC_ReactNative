import React from "react";
import styled from "styled-components/native";
import { Switch } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const SwitchToggle = ({ onValueChange, value }) => {
  return (
    <Container>
      <Switch value={value} onValueChange={onValueChange} />
    </Container>
  );
};

export default SwitchToggle;
