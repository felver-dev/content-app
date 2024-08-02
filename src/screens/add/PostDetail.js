import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Reactm, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../theme/theme";

const PostDetail = () => {
  const { data } = useRoute().params;
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 100 }}
          source={{ uri: data.url }}
        />
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{ fontSize: 20, fontWeight: "700", color: COLORS.darkBlue }}
          >
            {data.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              opacity: 0.7,
              marginTop: 3,
              color: COLORS.darkBlue,
            }}
          >
            {data.reason}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "left",
          fontWeight: "600",
          color: COLORS.darkBlue,
          marginTop: 20,
        }}
      >
        {data.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "justify",
          fontWeight: "500",
          color: COLORS.darkBlue,
          marginTop: 20,
          opacity: 0.6,
        }}
      >
        {data.description}
      </Text>
      <Image
        resizeMode="cover"
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
          marginVertical: 30,
        }}
        source={{ uri: data.picture }}
      />
      <Text
        style={{
          fontSize: 16,
          textAlign: "justify",
          fontWeight: "500",
          color: COLORS.darkBlue,
          opacity: 0.6,
        }}
      >
        {data.description}
        {data.description}
      </Text>
    </ScrollView>
  );
};

export default PostDetail;
