import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/splash/Splash";
import Welcome from "../screens/welcome/Welcome";
import SignIn from "../screens/auth/SignIn";
import SignUp from "../screens/auth/SignUp";
import { useState, useEffect } from "react";
import Onboarding from "../screens/onboarding/Onboarding";
import Home from "../screens/home/Home";
import ForgotPassword from "../screens/forgot-password/ForgotPassword";
import ResetPassword from "../screens/forgot-password/ResetPassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/search/Search";
import Add from "../screens/add/Add";
import Bookmark from "../screens/bookmark/Bookmark";
import Settings from "../screens/setting/Settings";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "../theme/theme";
import { View } from "react-native";
import PostDetail from "../screens/add/PostDetail";

const AuthStack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const BottomTabsGroup = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          height: 70,
          left: 0,
          elevation: 0,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Entypo
                name="home"
                size={25}
                color={focused ? COLORS.darkBlue : COLORS.Gray}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Fontisto
                name="search"
                size={25}
                color={focused ? COLORS.darkBlue : COLORS.Gray}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  height: 60,
                  width: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                }}
              >
                <FontAwesome6 name="plus" size={24} color={COLORS.secondary} />
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="bookmark-minus-outline"
                size={25}
                color={focused ? COLORS.darkBlue : COLORS.Gray}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <AntDesign
                name="setting"
                size={25}
                color={focused ? COLORS.darkBlue : COLORS.Gray}
              />
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

const AuthStackGroup = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 60);
  }, [splash]);

  return splash ? (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  ) : (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{ title: "Posts" }}
      />
      <AuthStack.Screen
        name="Main"
        component={BottomTabsGroup}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
const Navigation = () => {
  return <AuthStackGroup />;
};

export default Navigation;
