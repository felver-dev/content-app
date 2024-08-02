import { View, Text, FlatList, useWindowDimensions } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../../theme/theme";
import RecommendationList from "./RecommendationList";

const Recommendation = ({ data }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{ fontSize: 25, color: COLORS.darkBlue, fontWeight: "700" }}
        >
          For you
        </Text>
        <Text style={{ fontSize: 16, opacity: 0.6 }}>
          Let's see recommendation stories
        </Text>
      </View>

      <FlatList
        style={{ height: "auto" }}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        horizontal
        data={data}
        renderItem={({ item }) => {
          return <RecommendationList data={item} />;
        }}
      />
    </View>
  );
};

export default Recommendation;
