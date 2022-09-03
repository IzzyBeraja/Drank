import React from "react";
import { StyleSheet, View } from "react-native";
import { Ingredient } from "./DrinkScreenQuery";
import { Text } from "react-native-elements";

export type IngredientsProps = {
  ingredients: Ingredient[] | undefined;
};

export default function IngredientList({
  ingredients,
}: IngredientsProps): JSX.Element {
  return (
    <View>
      <Text style={styles.ingredientsText}>{`Ingredients`}</Text>
      {ingredients ? (
        <View style={styles.ingredientContainer}>
          {ingredients?.map(({ name, amount }) => (
            <Text>{`${name} : ${amount}`}</Text>
          ))}
        </View>
      ) : (
        ""
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientsText: { marginBottom: 10 },
  ingredientContainer: { marginBottom: 10 },
});
