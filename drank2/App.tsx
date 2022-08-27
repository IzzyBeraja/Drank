import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrinkScreen from "./screens/DrinkScreen";
import DrinksListScreen from "./screens/DrinksListScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrinksListScreen"
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
