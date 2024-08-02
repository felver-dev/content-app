import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import Logo from "../../components/logo/Logo";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../theme/theme";

const Splash = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        flex: 1,
        width,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar style="light" />
      <Logo
        squareColor={COLORS.secondary}
        vColor={COLORS.primary}
        textColor={COLORS.secondary}
      />
    </View>
  );
};

export default Splash;
