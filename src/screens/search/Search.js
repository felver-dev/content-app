import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/inputs/Input";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../../theme/theme";
import { following } from "../../data/data";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [search, setSearch] = useState("");
  const { width, height } = useWindowDimensions();
  const { navigate } = useNavigation();

  const handleChange = (value) => {
    setSearch(value);
  };

  const searchToDisplay = following.filter((f) =>
    f.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={{ flex: 1, alignItems: "center", marginVertical: 20 }}>
      <Input
        color={COLORS.darkBlue}
        beforeIcon={
          <Ionicons name="search" size={24} color={COLORS.darkBlue} />
        }
        placeholder="Search"
        // value={search}
        onChangeText={(val) => handleChange(val)}
      />

      <ScrollView
        contentContainerStyle={{
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flex: 1,
          width: 0.8 * width,
          height,
          marginVertical: 20,
        }}
      >
        {search &&
          searchToDisplay.map((f) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigate("PostDetail", { data: f });
                }}
                style={{ flexDirection: "column" }}
                key={f.id}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 10,
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Image
                    resizeMode="cover"
                    style={{
                      width: 0.25 * width,
                      height: 80,
                      borderRadius: 10,
                    }}
                    source={{ uri: f.url }}
                  />
                  <View>
                    <Text style={{ color: COLORS.darkBlue, opacity: 0.6 }}>
                      {f.field}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.darkBlue,
                        fontWeight: "700",
                      }}
                    >
                      {f.title.slice(0, 20)}...
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.darkBlue,
                        opacity: 0.6,
                      }}
                    >
                      {f.description.slice(0, 25)} ...
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Search;
