import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../theme/theme";

const TrendList = ({ data }) => {
  return (
    <TouchableOpacity

      style={{
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
      }}
    >
      <View style={{ marginVertical: 10 }}>
        <Image
          style={{ width: 100, aspectRatio: 1, borderRadius: 10 }}
          source={{ uri: data.url }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          height: "100%",
          marginTop: 15,
        }}
      >
        <Text> {data.author} </Text>
        <Text
          style={{ fontSize: 16, fontWeight: "700", color: COLORS.darkBlue }}
        >
          {data.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.darkBlue,
            opacity: 0.6,
            fontSize: 17,
          }}
        >
          {data.content}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.darkBlue,
            opacity: 0.6,
            fontSize: 17,
          }}
        >
          {data.postedAt} hour ago
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendList;
