import React from "react";
import { Text } from "react-native";

export type DrinkType = {
  idDrink: string;
  strDrink: string;
};

export type DrinkProps = {
  drink: DrinkType;
};

export default function DrinkItem({ drink }: DrinkProps) {
  const { idDrink, strDrink } = drink;

  return (
    <Text>
      {idDrink},{strDrink}
    </Text>
  );
}
