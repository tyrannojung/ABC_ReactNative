import React from "react";
import Navigation from "./navigations";
import { AppThemeProvider } from "./contexts";
import { AppStatusBar } from "./components";

const App = () => {
  return (
    <AppThemeProvider>
      <AppStatusBar />
      <Navigation />
    </AppThemeProvider>
  );
};

export default App;
