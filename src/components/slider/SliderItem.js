import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Animated,
  Easing,
} from "react-native";
import React, { useRef } from "react";
import { COLORS } from "../../theme/theme";

const SliderItem = ({ item }) => {
  const { width, height } = useWindowDimensions();
  const translateYImage = useRef(new Animated.Value(40)).current;
  
  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container(width, height)}>
      <Animated.Image
        style={[
          styles.picture(width, height),
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
        source={{ uri: item.url }}
        resizeMode="cover"
      />
      <Text style={styles.text(width)}> {item.text} </Text>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: (width, height) => ({
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  }),
  picture: (width) => ({
    width: 0.7 * width,
    aspectRatio: 1,
    borderRadius: 10,
  }),

  text: (width) => ({
    fontSize: 30,
    textAlign: "center",
    color: COLORS.darkBlue,
    fontWeight: "600",
    width: 0.75 * width,
    marginVertical: 20,
  }),
});
