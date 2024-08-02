import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Input from "../../components/inputs/Input";
import ButtonWithOutBackground from "../../components/button/ButtonWithOutBackground";
import { COLORS } from "../../theme/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import CircleIcon from "../../components/circleIcon/CircleIcon";

const ResetPassword = () => {
  const { width, height } = useWindowDimensions();
  const { navigate } = useNavigation();

  return (
    <KeyboardAvoidingView
      enabled={false}
      style={{
        flex: 1,
        justifyContent: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircleIcon />
      </View>
      <View style={styles.container(height, width)}>
        <View style={{ width: 0.8 * width, gap: 10 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
              color: COLORS.darkBlue,
            }}
          >
            Email Sent
          </Text>
          <Text style={styles.greyText}>
            Check your email and click the link to reset your password
          </Text>
        </View>
        <View style={styles.gap}>
          <ButtonWithOutBackground
            onPress={() => {
              navigate("SignIn");
            }}
            text="Reset Password"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: (width, height) => ({
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  }),

  greyText: {
    color: COLORS.darkBlue,
    opacity: 0.5,
    fontSize: 16,
    width: "100%",
  },
  gap: { gap: 10, marginTop: 10 },
});
