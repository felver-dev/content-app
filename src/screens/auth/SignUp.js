import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

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
            Sign Up Now!
          </Text>
          <Text style={styles.greyText}>
            Sign up to see stories around the world!
          </Text>
        </View>
        <View>
          <View style={styles.gap}>
            <Text style={styles.greyText}>Username</Text>
            <Input color={COLORS.darkBlue} placeholder="Enter your username" />
          </View>
          <View style={styles.gap}>
            <Text style={styles.greyText}>Email</Text>
            <Input color={COLORS.darkBlue} placeholder="Enter your or email" />
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
        <View style={[styles.gap, { marginTop: 20 }]}>
          <ButtonWithBackground text="Sign Up" />
        </View>
      </View>
      <View
        style={{ alignSelf: "center", flexDirection: "row", marginTop: 20 }}
      >
        <Text style={styles.greyText}>Already rolled up ? </Text>
        <TouchableOpacity
          onPress={() => {
            navigate("SignIn");
          }}
        >
          <Text
            style={{ color: COLORS.primary, fontWeight: "700", fontSize: 16 }}
          >
            log in
          </Text>
        </TouchableOpacity>
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
