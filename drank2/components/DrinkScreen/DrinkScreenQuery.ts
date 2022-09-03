import { useEffect, useState } from "react";

const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export type Ingredient = {
  name: string | null;
  amount: string | null;
};

export type DrinkScreenQueryResponse = {
  drinks: [
    {
      idDrink: string | null;
      strDrink: string | null;
      strDrinkAlternate: string | null;
      strTags: string | null;
      strVideo: string | null;
      strCategory: string | null;
      strIBA: string | null;
      strAlcoholic: string | null;
      strGlass: string | null;
      strInstructions: string | null;
      strInstructionsES: string | null;
      strInstructionsDE: string | null;
      strInstructionsFR: string | null;
      strInstructionsIT: string | null;
      strDrinkThumb: string | null;
      strIngredient1: string | null;
      strIngredient2: string | null;
      strIngredient3: string | null;
      strIngredient4: string | null;
      strIngredient5: string | null;
      strIngredient6: string | null;
      strIngredient7: string | null;
      strIngredient8: string | null;
      strIngredient9: string | null;
      strIngredient10: string | null;
      strIngredient11: string | null;
      strIngredient12: string | null;
      strIngredient13: string | null;
      strIngredient14: string | null;
      strIngredient15: string | null;
      strMeasure1: string | null;
      strMeasure2: string | null;
      strMeasure3: string | null;
      strMeasure4: string | null;
      strMeasure5: string | null;
      strMeasure6: string | null;
      strMeasure7: string | null;
      strMeasure8: string | null;
      strMeasure9: string | null;
      strMeasure10: string | null;
      strMeasure11: string | null;
      strMeasure12: string | null;
      strMeasure13: string | null;
      strMeasure14: string | null;
      strMeasure15: string | null;
      strImageSource: string | null;
      strImageAttribution: string | null;
      strCreativeCommonsConfirmed: string | null;
      dateModified: string | null;
    }
  ];
};

export type DrinkScreenQueryReturnType = {
  drinkID: string;
  name: string;
  altName: string | null;
  tags: string[];
  video: string | null;
  category: string;
  IBA: string;
  alcoholic: boolean;
  glass: string;
  instructions: string;
  thumbnailUri: string;
  ingredients: Ingredient[];
};

export const useDrinkScreenQuery = (
  drinkID: string
): [DrinkScreenQueryReturnType | null, boolean, boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [data, setData] = useState<DrinkScreenQueryReturnType | null>(null);

  useEffect(() => {
    const runQueryAsync = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${endpoint}${drinkID}`);
        const json: DrinkScreenQueryResponse = await response.json();
        const drinksResponse: DrinkScreenQueryReturnType[] = json.drinks
          .slice(0, 1)
          .map((response) => ({
            drinkID: response.idDrink ?? "",
            name: response.strDrink ?? "",
            altName: response.strDrinkAlternate,
            tags: (response.strTags ?? "").split(","),
            video: response.strVideo ?? "",
            category: response.strCategory ?? "",
            IBA: response.strIBA ?? "",
            alcoholic: response.strAlcoholic === "alcoholic",
            glass: response.strGlass ?? "",
            instructions: response.strInstructions ?? "",
            thumbnailUri: response.strDrinkThumb ?? "",
            ingredients: [
              { name: response.strIngredient1, amount: response.strMeasure1 },
              { name: response.strIngredient2, amount: response.strMeasure2 },
              { name: response.strIngredient3, amount: response.strMeasure3 },
              { name: response.strIngredient4, amount: response.strMeasure4 },
              { name: response.strIngredient5, amount: response.strMeasure5 },
              { name: response.strIngredient6, amount: response.strMeasure6 },
              { name: response.strIngredient7, amount: response.strMeasure7 },
              { name: response.strIngredient8, amount: response.strMeasure8 },
              { name: response.strIngredient9, amount: response.strMeasure9 },
              { name: response.strIngredient10, amount: response.strMeasure10 },
              { name: response.strIngredient11, amount: response.strMeasure11 },
              { name: response.strIngredient12, amount: response.strMeasure12 },
              { name: response.strIngredient13, amount: response.strMeasure13 },
              { name: response.strIngredient14, amount: response.strMeasure14 },
              { name: response.strIngredient15, amount: response.strMeasure15 },
            ].filter(({ name, amount }) => name != null && amount != null),
          }));
        setData(drinksResponse[0]);
      } catch (error) {
        setHasError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    runQueryAsync();
    console.log("getting the drink");
  }, [drinkID]);

  return [data, isLoading, hasError];
};
