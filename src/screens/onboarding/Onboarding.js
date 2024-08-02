import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import OnboardingSlider from "../../components/slider/OnboardingSlider";
import Pagination from "../../components/panigation/Pagination";
import { data } from "../../data/data";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <OnboardingSlider data={data} />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#ddd"
  },
});
