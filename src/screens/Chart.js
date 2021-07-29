import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { lightTheme, darkTheme } from "../theme/theme";
import AppThemeContext from "../contexts/AppTheme";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.change.backgroundColor};
`;

const Chart = () => {
  const { isDark } = useContext(AppThemeContext);
  const [changeTheme, setChangeTheme] = useState(lightTheme);

  useEffect(() => {
    if (isDark) {
      setChangeTheme(darkTheme);
    }
  }, []);

  return <Container change={changeTheme}></Container>;
};

export default Chart;
