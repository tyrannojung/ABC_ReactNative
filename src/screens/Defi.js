import React from "react";
import { WebView } from "react-native-webview";

const Defi = () => {
  return <WebView source={{ uri: "http://defi.nodehome.io:7000/" }} />;
};

export default Defi;
