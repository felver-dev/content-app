import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { following } from "../../data/data";
import FollowingList from "./FollowingList";
import { COLORS } from "../../theme/theme";

const Following = ({ data }) => {
  return (
    <View>
      <Text
        style={{
          paddingHorizontal: 20,
          fontSize: 22,
          fontWeight: "700",
          color: COLORS.darkBlue,
        }}
      >
        Following ...
      </Text>
     
      <View style={{marginBottom:80}}>
        {data.map((d) => {
          return <FollowingList key={d.id} data={d} />;
        })}
      </View>
    </View>
  );
};

export default Following;
