import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Logo from "../../components/logo/Logo";
import { COLORS } from "../../theme/theme";
import Button from "../../components/button/Button";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.4,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingVertical: 40,
          gap: 10,
        }}
      >
        <Logo
          squareColor={COLORS.primary}
          textColor={COLORS.primary}
          vColor={COLORS.secondary}
          dotColor={COLORS.darkGray}
        />
        <Text
          style={{ fontSize: 35, fontWeight: "700", color: COLORS.darkBlue }}
        >
          Welcome Back!
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.text}>
            Hello there, Continue with and see the stories
          </Text>
          <Text style={styles.text}>from around the world.</Text>
        </View>
      </View>
      <View
        style={{
          gap: 20,
          flex: 0.35,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          icon={<AntDesign name="apple1" size={27} color="black" />}
          text="Continue with Apple"
        />
        <Button
          icon={<AntDesign name="google" size={26} color="black" />}
          text="Continue with Google"
        />
        <Button
          icon={<MaterialIcons name="email" size={26} color="black" />}
          text="Continue with Email"
        />

        <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
          <Text>Already have an account ?</Text>
          <TouchableOpacity onPress={() => {navigate("SignIn")}}>
            <Text style={{ color: COLORS.primary, fontWeight: "700" }}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 0.25,
          justifyContent: "flex-end",
          alignItems: "center",
          paddingVertical: 30,
        }}
      >
        <Text style={{ color: COLORS.darkBlue, opacity: 0.5 }}>
          By continuing, you accept the Terms Of Use
        </Text>
        <Text style={{ color: COLORS.darkBlue, opacity: 0.5 }}>
          and Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: 18,
    color: COLORS.darkBlue,
    opacity: 0.5,
  },
});
