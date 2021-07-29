import React, { useContext } from "react";
import AppThemeContext from "../contexts/AppTheme";
import { StatusBar } from "react-native";

const AppStatusBar = () => {
  const { isDark } = useContext(AppThemeContext);

  if (isDark) {
    return <StatusBar barStyle="light-content" />;
  } else {
    return <StatusBar barStyle="dark-content" />;
  }
};

export default AppStatusBar;
