import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { lightTheme, darkTheme } from "../theme/theme";
import {
  Category,
  Defi,
  Service,
  Privacy,
  Product,
  Blocks,
  Chart,
  News,
  TotalPrice,
} from "../screens";
import MainTab from "./MainTab";
import AppThemeContext from "../contexts/AppTheme";

const Stack = createStackNavigator();

const MainStack = () => {
  const { isDark } = useContext(AppThemeContext);
  let theme = lightTheme;

  if (isDark) {
    theme = darkTheme;
  }

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        cardStyle: { backgroundColor: theme.backgroundColor },
        headerTintColor: theme.headerTintColor,
        headerTitleAlign: "center",
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: theme.backgroundColor,
          borderBottomWidth: 0.3,
          borderBottomColor: theme.borderColor,
        },
      }}
    >
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Blocks" component={Blocks} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Defi" component={Defi} />
      <Stack.Screen name="Service" component={Service} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Chart" component={Chart} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="TotalPrice" component={TotalPrice} />
    </Stack.Navigator>
  );
};

export default MainStack;
