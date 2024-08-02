import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../../theme/theme";

const Pagination = ({ data, scrollX, index }) => {
  const { width } = Dimensions.get("screen");
  const handleNext = (index) => {
    index++;
  };
  return (
    <View style={styles.container}>
      {data.map((d, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dots, { width: dotWidth, opacity }]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: "100%",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
});
