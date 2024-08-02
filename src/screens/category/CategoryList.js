import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../theme/theme";

const CategoryList = ({ data, index, setActiveCat, activeCat }) => {
  return (
    <View
      style={{
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setActiveCat(index);
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: COLORS.darkBlue,
            fontWeight: activeCat === index ? "500" : "500",
            opacity: activeCat === index ? 1 : 0.6,
          }}
        >
          {data.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryList;
