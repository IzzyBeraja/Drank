import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useDrinkScreenQuery } from "../components/DrinkScreen/DrinkScreenQuery";
import { Text } from "react-native-elements";
type DrinkScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "DrinkScreen"
>;

export default function DrinkScreen({ route }: DrinkScreenProps) {
  const [drinkData, isLoading, error] = useDrinkScreenQuery(
    route.params.drinkId
  );

  return (
    <View>
      {isLoading ? (
        <Text>{"Loading . . ."}</Text>
      ) : (
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: drinkData?.thumbnailUri }}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text h4 style={styles.text}>
              {drinkData?.name}
            </Text>
            <Text style={styles.text}>{drinkData?.category}</Text>
            <Text>{drinkData?.instructions}</Text>

            {/* <Text>{JSON.stringify(drinkData ?? "")}</Text> */}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    maxWidth: 600,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    contain: true,
  },
  textContainer: {
    padding: 10,
  },
  text: {
    marginBottom: 10,
  },
});
