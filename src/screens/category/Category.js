import { View, Text, FlatList } from "react-native";
import CategoryList from "./CategoryList";
import { useState } from "react";

const Category = ({ data }) => {
  const [activeCat, setActiveCat] = useState(0);

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        horizontal
        data={data}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item, index }) => (
          <CategoryList
            data={item}
            index={index}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
          />
        )}
      />
    </View>
  );
};

export default Category;
