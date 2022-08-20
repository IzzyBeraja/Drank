import React, { useEffect, useState } from "react";
import DrinksList from "./components/DrinksList";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <DrinksList />;
    </NavigationContainer>
  );
}
