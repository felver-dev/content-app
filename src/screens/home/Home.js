import { View, ScrollView, useWindowDimensions } from "react-native";
import React from "react";
import Header from "../../components/header/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Category from "../category/Category";
import Recommendation from "../recommandation/Recommendation";
import Trends from "../Trends/Trends";
import {
  categories,
  recommendations,
  trends,
  following,
} from "../../data/data";
import { StatusBar } from "expo-status-bar";
import Following from "../following/Following";

const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Header />
      <Category data={categories} />

      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Recommendation data={recommendations} />
        <Trends data={trends} />
        <Following data={following} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
