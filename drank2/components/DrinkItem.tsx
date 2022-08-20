import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export type DrinkType = {
  id: string;
  name: string;
  imageUri: string;
};

export type DrinkProps = {
  drink: DrinkType;
};

export default function DrinkItem({ drink }: DrinkProps) {
  const { name, imageUri } = drink;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
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
