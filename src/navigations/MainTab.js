import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Home, Settings } from "../screens";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { lightTheme, darkTheme } from "../theme/theme";
import AppThemeContext from "../contexts/AppTheme";

const TabIcon = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const MainTab = ({ navigation, route }) => {
  const { isDark } = useContext(AppThemeContext);

  let theme = lightTheme;
  if (isDark) {
    theme = darkTheme;
  }

  useEffect(() => {
    const title = getFocusedRouteNameFromRoute(route) ?? "Home";
    navigation.setOptions({
      headerTitle: title,
      headerRight: () =>
        title === "Home" && (
          <MaterialCommunityIcons
            name="menu"
            size={26}
            color={theme.borderColor}
            style={{ margin: 10 }}
            onPress={() => navigation.navigate("Category")}
          />
        ),
    });
  }, [route]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        labelPosition: "beside-icon",
        showLabel: false,
        style: {
          backgroundColor: theme.backgroundColor,
          borderTopColor: theme.borderColor,
          borderTopWidth: 0.3,
        },
        activeTintColor: theme.tabActiveColor,
        inactiveTintColor: theme.borderColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: props.focused ? "home" : "home-outline",
            }),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: props.focused ? "settings" : "settings-outline",
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
