import { View, Text, useWindowDimensions } from "react-native";
import { COLORS } from "../../theme/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CircleIcon = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View
      style={{
        position: "absolute",
        top: -0.2 * height,
        backgroundColor: COLORS.primary,
        width: 120,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
      }}
    >
      <View
        style={{
          borderWidth: 2,
          borderColor: COLORS.primary,
          backgroundColor: COLORS.red,
          width: 25,
          height: 25,
          borderRadius: 100,
          position: "absolute",
          zIndex: 999,
          top: 18,
          right: 15,
        }}
      ></View>
      <View>
        <MaterialCommunityIcons
          name="email"
          size={75}
          color={COLORS.secondary}
        />
      </View>
    </View>
  );
};

export default CircleIcon;
