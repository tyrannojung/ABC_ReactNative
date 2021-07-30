import * as React from "react";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";

const Blocks = () => {
  return (
    <WebView
      source={{
        uri: "https://bts-app.nodehome.io/",
      }}
      // 디바이스 체크
      injectedJavaScript={
        `
        var dtype = 
        '` +
        Platform.OS +
        `';
        window.localStorage.setItem("dtype", dtype );
        `
      }
      onMessage={(event) => {}}
    />
  );
};

export default Blocks;
