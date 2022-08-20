import React, { useEffect, useState } from "react";
import DrinksList from "./components/DrinksList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrinkItem from "./components/DrinkItem";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrinksList}
          options={{
            title: "Dranks",
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="Drink" component={DrinkItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
