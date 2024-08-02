import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";

const FollowingList = ({ data }) => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={{
        width,
      }}
      onPress={() => {
        navigate("PostDetail", { data: data });
      }}
    >
      <View
        style={{
          width,
          gap: 20,
          marginTop: 10,
          padding: 15,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={{ uri: data.url }}
          />
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: COLORS.darkBlue,
              }}
            >
              {data.name}
            </Text>
            <Text> {data.reason} </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: COLORS.darkBlue,
            textAlign: "left",
          }}
        >
          {data.title}
        </Text>
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: COLORS.darkBlue,
              textAlign: "left",
              opacity: 0.6,
            }}
          >
            {" "}
            {data.description}{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: COLORS.primary,
              textAlign: "left",
            }}
          >
            Read Time :{data.readTime} min
          </Text>
          <Text style={{ textAlign: "right" }}>
            <MaterialCommunityIcons
              name="bookmark-minus-outline"
              size={26}
              color={COLORS.Gray}
            />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FollowingList;
