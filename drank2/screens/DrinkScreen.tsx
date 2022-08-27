import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type DrinkScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "DrinkScreen"
>;

export default function DrinkScreen({ route }: DrinkScreenProps) {
  return (
    <View>
      <Text>{`Drink Screen: ${route.params.drinkId}`}</Text>
    </View>
  );
}
