import { View, Text, Animated, TouchableOpacity, Easing } from "react-native";
import { useRef, useEffect } from "react";
import AnimatedView from "./AnimatedView";

const Animation = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing:Easing.cubic,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    console.log(fadeAnim);
  }, []);
  return (
    <View>
      <Animated.View
        style={[
          {
            backgroundColor: "dodgerblue",
            padding: 20,
            borderRadius: 10,
            width: 200,
          },
          { opacity: fadeAnim },
        ]}
      >
        <Text style={{ color: "#ffe", fontSize: 20, textAlign: "center" }}>
          Fade In Text
        </Text>
      </Animated.View>
      <Text>Animation</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "dodgerblue",
          padding: 20,
          borderRadius: 10,
          width: 200,
        }}
        onPress={fadeIn}
      >
        <Text style={{ color: "#fff" }}>fadeIn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "dodgerblue",
          padding: 20,
          borderRadius: 10,
          width: 200,
        }}
        onPress={fadeOut}
      >
        <Text style={{ color: "#fff" }}>fadeOut</Text>
      </TouchableOpacity>

      <AnimatedView
        style={{ backgroundColor: "salmon", padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: "#fff" }}>Jules</Text>
      </AnimatedView>
    </View>
  );
};

export default Animation;
