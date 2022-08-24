import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
} from "react-native";
import DrinkItem, { DrinkType } from "./DrinkItem";
import { Text } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type DrinkAPIResponse = {
  drinks: [{ idDrink: string; strDrink: string; strDrinkThumb: string }];
};

export default function DrinksListScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<DrinkType[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
      const json: DrinkAPIResponse = await response.json();
      const drinksResponse: DrinkType[] = json.drinks.map(
        ({ idDrink, strDrink, strDrinkThumb }) => ({
          id: idDrink,
          name: strDrink,
          imageUri: strDrinkThumb,
        })
      );
      setData(drinksResponse);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const onDrinkPressed = useCallback((drinkId: string) => {
    console.log(`Pressed Drink: ${drinkId}`);
    navigation.navigate("DrinkScreen");
  }, []);

  const renderItem: ListRenderItem<DrinkType> = useCallback(
    ({ item }) => (
      <DrinkItem drink={item} onDrinkPressed={() => onDrinkPressed(item.id)} />
    ),
    []
  );

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text h4>{`${data.length} Results`}</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={renderItem}
          />
        </>
      )}
    </View>
  );
}
