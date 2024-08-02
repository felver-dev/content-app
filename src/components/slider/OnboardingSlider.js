import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import SliderItem from "./SliderItem";
import { useState, useRef, useEffect } from "react";
import Pagination from "../panigation/Pagination";
import { COLORS } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";

const OnboardingSlider = ({ data }) => {
  const [index, setIndex] = useState(0);
  const { width, height } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollIndexRef = useRef(null);
  const {navigate} = useNavigation();

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleViewableItems = useRef(({ viewableItems }) => {
    viewableItems.map((v) => {
      setIndex(v.index);
    });
  }).current;

  const handleScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleNext = (index) => {
    if (index === data.length) {
      index = 0
      navigate("Welcome");
    }
    scrollIndexRef.current?.scrollToIndex({
      animated: true,
      index,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.9 }}>
        <FlatList
          ref={scrollIndexRef}
          data={data}
          renderItem={({ item }) => <SliderItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={handleScroll}
          snapToAlignment="center"
          onViewableItemsChanged={handleViewableItems}
          viewabilityConfig={viewabilityConfig}
        />
      </View>

      <View
        style={{
          flex: 0.4,
          width,
          alignItems: "center",
          justifyContent: "center",
          height,
        }}
      >
        <Pagination data={data} scrollX={scrollX} index={index} />
        <TouchableOpacity
          onPress={() => handleNext(index + 1)}
          style={styles.button(width)}
        >
          <Text style={styles.textButton}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: (width) => ({
    backgroundColor: COLORS.primary,
    padding: 14,
    width: 0.8 * width,
    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 10,
  }),

  textButton: {
    fontSize: 22,
    color: COLORS.secondary,
    fontWeight: "600",
    textAlign: "center",
  },
});
