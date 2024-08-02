import { View, Text, FlatList, TouchableOpacity } from "react-native";
import TrendList from "./TrendList";
import React from "react";
import { COLORS } from "../../theme/theme";
import Following from "../following/Following";
const Trends = ({ data }) => {
  return (
    <View>
      <Text
        style={{
          paddingHorizontal: 20,
          fontSize: 22,
          color: COLORS.darkBlue,
          fontWeight: "700",
        }}
      >
        Trending Now ...
      </Text>

      <View>
        {data.map((d) => {
          return <TrendList   key={d.id} data={d} />;
        })}
      </View>
    </View>
  );
};

export default Trends;
