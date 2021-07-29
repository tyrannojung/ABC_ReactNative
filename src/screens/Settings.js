import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { lightTheme, darkTheme } from "../theme/theme";
import { SwitchToggle } from "../components";
import AppThemeContext from "../contexts/AppTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.change.backgroundColor};
`;

const ItemBorder = styled.View`
  flex-direction: column;
  height: 8px;
  background-color: #eeeeee;
  border-top-width: 0.2px;
  border-top-color: #a4a4a4;
`;

//리스트
const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
`;

const ItemTitle = styled.Text`
  font-size: 18px;
  color: ${(props) => props.change.headerTintColor};
`;

const ItemDescription = styled.Text`
  font-size: 16px;
  color: grey;
`;
//

const Settings = () => {
  useEffect(() => {
    _loadTheme();
  }, []);

  const _loadTheme = async () => {
    const loadTheme = await AsyncStorage.getItem("type");
    var value = JSON.parse(loadTheme);
    if (value != null && value.type) {
      setIsDark(value.type);
      setChangeTheme(darkTheme);
    }
  };

  const [isDark, setIsDark] = useState(false);
  const [changeTheme, setChangeTheme] = useState(lightTheme);
  const { dispatch } = useContext(AppThemeContext);

  const _saveTheme = async (type) => {
    try {
      await AsyncStorage.setItem("type", JSON.stringify(type));
    } catch (e) {
      console.error(e);
    }
  };

  const _onValueChange = (type) => {
    setIsDark(type);
    dispatch(type);
    _saveTheme({ type });

    if (type) {
      setChangeTheme(darkTheme);
    } else {
      setChangeTheme(lightTheme);
    }
  };

  const contentTitle = ["버전 정보", "저작권"];
  const contentDec = ["2.0.1", "ABCLab Inc."];
  return (
    <Container change={changeTheme}>
      <ItemBorder />
      <TextContainer>
        <ItemTitle change={changeTheme}>다크 모드</ItemTitle>
        <SwitchToggle value={isDark} onValueChange={_onValueChange} />
      </TextContainer>
      <ItemBorder />
      {contentTitle.map((title, index) => {
        return (
          <TextContainer key={index}>
            <ItemTitle change={changeTheme}>{title}</ItemTitle>
            <ItemDescription>{contentDec[index]}</ItemDescription>
          </TextContainer>
        );
      })}
      <ItemBorder />
    </Container>
  );
};

export default Settings;
