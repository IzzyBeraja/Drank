import React, { useEffect, useState } from "react";
import DrinksList from "./components/DrinksList";

export type Item = {
  idDrink: string;
  strDrink: string;
};

export default function App() {
  return <DrinksList />;
}
