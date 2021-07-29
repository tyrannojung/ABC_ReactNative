import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import AbcLogo from "../../assets/images/icon.png";
import { lightTheme, darkTheme } from "../theme/theme";
import AppThemeContext from "../contexts/AppTheme";

const Container = styled.View`
  flex: 1;
`;

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px 25px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

const ItemTitle = styled.Text`
  font-size: 18px;
  color: ${(props) => props.change.headerTintColor};
`;

const ItemBorder = styled.View`
  flex-direction: column;
  height: 8px;
  background-color: #eeeeee;
  border-top-width: 0.2px;
  border-top-color: #a4a4a4;
`;

const LogoContainer = styled.View`
  align-items: center;
  padding: 10px;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

const Category = ({ navigation }) => {
  const { isDark } = useContext(AppThemeContext);
  const [changeTheme, setChangeTheme] = useState(lightTheme);

  useEffect(() => {
    if (isDark) {
      setChangeTheme(darkTheme);
    }
  }, []);

  const categoryTitle = ["Blocks", "Product", "Defi", "Service", "Privacy"];
  const categoryDec = [
    "Blocks",
    "Product",
    "Defi",
    "이용약관",
    "개인정보처리방침",
  ];

  return (
    <Container>
      <LogoContainer>
        <Logo source={AbcLogo} />
      </LogoContainer>
      <ItemBorder />
      {categoryTitle.map((title, index) => {
        return (
          <ItemContainer key={index} onPress={() => navigation.navigate(title)}>
            <ItemTextContainer>
              <ItemTitle change={changeTheme}>{categoryDec[index]}</ItemTitle>
            </ItemTextContainer>
          </ItemContainer>
        );
      })}
      <ItemBorder />
    </Container>
  );
};

export default Category;
