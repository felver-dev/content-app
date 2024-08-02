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

const SignIn = () => {
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
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
              color: COLORS.darkBlue,
            }}
          >
            Sign In Now!
          </Text>
          <Text style={styles.greyText}>
            Login to see stories around the world!
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
          <View style={styles.gap}>
            <Text style={styles.greyText}>Password</Text>
            <Input
              color={COLORS.darkBlue}
              placeholder="Enter your Password"
              openIcon={
                <FontAwesome name="eye" size={24} color={COLORS.darkBlue} />
              }
              closeIcon={
                <FontAwesome
                  name="eye-slash"
                  size={24}
                  color={COLORS.darkBlue}
                />
              }
            />
          </View>
        </View>
        <View style={styles.gap}>
          <TouchableOpacity
            onPress={() => {
              navigate("ForgotPassword");
            }}
          >
            <Text style={styles.greyText}>Forgot Password?</Text>
          </TouchableOpacity>
          <ButtonWithBackground
            onPress={() => {
              navigate("Main");
            }}
            text="Sign In"
          />
        </View>

        <View
          style={{ alignSelf: "center", flexDirection: "row", marginTop: 20 }}
        >
          <Text style={styles.greyText}>
            Not rolled up yet ? Create an account here!{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigate("SignUp");
            }}
          >
            <Text
              style={{ color: COLORS.primary, fontWeight: "700", fontSize: 16 }}
            >
              register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: (width, height) => ({
    justifyContent: "space-between",
  }),

  greyText: {
    color: COLORS.darkBlue,
    opacity: 0.5,
    fontSize: 16,
  },
  gap: { gap: 10, marginTop: 10 },
});
