import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

export type DrinkType = {
  id: string;
  name: string;
  imageUri: string;
};

export type DrinkProps = {
  drink: DrinkType;
  onDrinkPressed: () => void;
};

export default function DrinkItem({ drink, onDrinkPressed }: DrinkProps) {
  const { name, imageUri, id } = drink;
  const onPressFunction = useCallback(() => {
    console.log(`Touch me: ${id}`);
    onDrinkPressed();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressFunction}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: 400,
    height: 400,
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    backgroundColor: "rgba(0,0,0, .5)",
    width: "100%",
  },
  text: {
    color: "white",
    fontWeight: "800",
  },
});
