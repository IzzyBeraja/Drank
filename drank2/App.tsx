import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Item = {
  idDrink: string;
  strDrink: string;
};

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Item[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
      const json = await response.json();
      setData(json.drinks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const renderItem: ListRenderItem<Item> = useCallback(
    ({ item }) => <Text>{item.strDrink}</Text>,
    []
  );

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ idDrink }) => idDrink}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
