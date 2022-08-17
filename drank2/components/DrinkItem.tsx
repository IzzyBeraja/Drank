import React from "react";
import { Text, View, Image } from "react-native";

export type DrinkType = {
  id: string;
  name: string;
  imageUri: string;
};

export type DrinkProps = {
  drink: DrinkType;
};

export default function DrinkItem({ drink }: DrinkProps) {
  const { id, name, imageUri } = drink;

  return (
    <View>
      <Image source={{ uri: imageUri }} style={{ width: 400, height: 400 }} />
      <Text>
        {id}: {name}
      </Text>
    </View>
  );
}
