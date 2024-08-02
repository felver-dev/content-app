import { View, Text, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../../theme/theme";

const Logo = ({ squareColor, textColor, vColor, dotColor }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        style={{
          backgroundColor: squareColor,
          borderRadius: 8,
          width: 50,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "900",
            color: vColor,
          }}
        >
          V
        </Text>
      </Pressable>
      <Text style={{ color: textColor, fontSize: 35, fontWeight: "700" }}>
        View <Text style={{ fontSize: 45, fontWeight:"900", color:dotColor }}>.</Text>
      </Text>
    </View>
  );
};

export default Logo;
