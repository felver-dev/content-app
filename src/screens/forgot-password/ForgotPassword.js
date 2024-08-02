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
import ButtonWithBackground from "../../components/button/ButtonWithBackground";
import { COLORS } from "../../theme/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const { width, height } = useWindowDimensions();
  const { navigate } = useNavigation();

  return (
    <KeyboardAvoidingView
      enabled={false}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.container(height, width)}>
        <View style={{ width: 0.8 * width }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
              color: COLORS.darkBlue,
            }}
          >
            Reset Password!
          </Text>
          <Text style={styles.greyText}>
            Input your username or email that we send link to reset your old
            password!
          </Text>
        </View>
        <View>
          <View style={styles.gap}>
            <Text style={styles.greyText}>Username or email</Text>
            <Input
              color={COLORS.darkBlue}
              placeholder="Enter your username or email"
            />
          </View>
        </View>
        <View style={styles.gap}>
          <ButtonWithBackground
            onPress={() => {
              navigate("ResetPassword");
            }}
            text="Reset Password"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: (width, height) => ({
    justifyContent: "center",
    alignItems: "center",
  }),

  greyText: {
    color: COLORS.darkBlue,
    opacity: 0.5,
    fontSize: 16,
    width: "100%",
  },
  gap: { gap: 10, marginTop: 10 },
});
