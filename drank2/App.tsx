import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrinkScreen from "./screens/DrinkScreen";
import DrinksListScreen from "./components/DrinksListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrinksListScreen}
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
        <Stack.Screen name="DrinkScreen" component={DrinkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
