import React from "react";
import {
  View,
} from "react-native";
import { Item } from "./App";

export type DrinkProps = {
    drink: Item
  };

export default function Drink({drink}: DrinkProps) {

    const {idDrink,strDrink} = drink;

  return (
    <View>{idDrink},{strDrink}</View>
  );
}
