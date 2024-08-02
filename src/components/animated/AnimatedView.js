import { View, Text, Animated, Easing } from "react-native";
import React, { useRef, useEffect } from "react";

const AnimatedView = ({ children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing:Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);


  Animated.sequence([
    Animated.decay(position, {
        velocity:{ges}
    })
  ])
  return (
    <Animated.View style={{ ...style, opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedView;
