import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { COLORS } from "../../theme/theme";

const Button = ({ icon, text }) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{
        width: 0.8 * width,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.darkGray,
        justifyContent: "flex-start",
        padding: 15,
        flexDirection: "row",
        gap: 20,
      }}
    >
      <Text>{icon}</Text>
      <Text style={{ color: COLORS.darkBlue, fontSize: 20 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
