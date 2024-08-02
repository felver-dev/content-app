import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
  Pressable,
  Platform,
} from "react-native";

import { COLORS } from "../../theme/theme";
import { useState } from "react";

const Input = ({
  placeholder,
  value,
  onChangeText,
  color,
  closeIcon,
  openIcon,
  beforeIcon
}) => {
  const { width } = useWindowDimensions();
  const [visiblePassword, setVisiblePassword] = useState(true);

  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };
  return (
    <View
      style={{
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: 0.8 * width,
        borderWidth: 1,
        borderColor: COLORS.darkGray,
        alignItems: "center",
        paddingHorizontal: 5,
        padding: Platform.OS === "ios" ? 5 : "auto",
      }}
    >
    {beforeIcon}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={color}
        secureTextEntry={!visiblePassword}
        style={{
          borderRadius: 10,
          justifyContent: "flex-start",
          padding: 10,
          width: 0.7 * width,
          color: COLORS.darkBlue,
          opacity: 0.7,
        }}
      />
      <Pressable onPress={handleVisiblePassword}>
        <Text>{visiblePassword ? closeIcon : openIcon}</Text>
      </Pressable>
    </View>
  );
};

export default Input;
