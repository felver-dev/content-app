import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../../theme/theme";

const BorderButton = ({ icon, text, onPress }) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        width: 0.8 * width,
        borderRadius: 10,
        borderColor: COLORS.primary,
        borderWidth: 1,
        justifyContent: "center",
        padding: 15,
        flexDirection: "row",
        gap: 20,
      }}
    >
      <Text>{icon}</Text>
      <Text style={{ color: COLORS.primary, fontSize: 20 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BorderButton;
