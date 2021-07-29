import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppThemeContext = createContext({
  dispatch: () => {},
});

const AppThemeProvider = ({ children }) => {
  useEffect(() => {
    _loadTheme();
  }, []);

  const _loadTheme = async () => {
    const loadTheme = await AsyncStorage.getItem("type");
    var value = JSON.parse(loadTheme);

    if (value != null && value.type) {
      setIsDark(value.type);
    }
  };

  const [isDark, setIsDark] = useState(false);

  const value = { isDark, dispatch: setIsDark };

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};

export { AppThemeProvider };
export default AppThemeContext;
