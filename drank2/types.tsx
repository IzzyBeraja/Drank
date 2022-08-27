export type RootStackParamList = {
  DrinksListScreen: undefined;
  DrinkScreen: { drinkId: string };
};

export type DrinkAPIResponse = {
  drinks: [{ idDrink: string; strDrink: string; strDrinkThumb: string }];
};
