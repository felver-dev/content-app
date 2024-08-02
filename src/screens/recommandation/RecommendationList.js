import {
  View,
  Text,
  Image,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../../theme/theme";

const RecommendationList = ({ data }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginVertical: 20,
        position: "relative",
        height: "auto",
      }}
    >
      <Image
        resizeMode="cover"
        style={{
          width: 0.85 * width,
          height: 200,
          marginHorizontal: 15,
          borderRadius: 20,
          opacity: 0.9,
          filter:""
        }}
        source={{ uri: data.url }}
      />
      <View style={{ position: "absolute", top: 140, left: 20 }}>
        <Text
          style={{
            fontSize: 18,
            color: COLORS.secondary,
            fontWeight: "700",
            width: 0.7 * width,
            overflow: "hidden",
          }}
        >
          {" "}
          {data.title}{" "}
        </Text>
        <Text style={{ color: COLORS.secondary }}>
          {" "}
          {data.postedAt} hour ago
        </Text>
      </View>
    </View>
  );
};

export default RecommendationList;
