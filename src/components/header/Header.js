import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS } from "../../theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 15,
      }}
    >
      <View>
        <Text
          style={{ color: COLORS.darkBlue, fontSize: 20, fontWeight: "700" }}
        >
          Hello, Jules!
        </Text>
        <Text style={{ fontSize: 16, color: COLORS.darkBlue, opacity: 0.6 }}>
          Let's see recommandation stories for you!
        </Text>
      </View>
      <View>
        <Image
          style={{ width: 50, height: 50, borderRadius: 100 }}
          source={{
            uri: "https://images.unsplash.com/photo-1651303780707-a30a86b27478?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwbWVufGVufDB8fDB8fHww",
          }}
        />
      </View>
    </View>
  );
};

export default Header;
