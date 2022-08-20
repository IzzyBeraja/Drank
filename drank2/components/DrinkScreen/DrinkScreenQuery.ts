import { useState } from "react";

const endpoint = "";

export type Ingredient = {
  name: string;
  amount: string;
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

export const useDrinkScreenQuery = async () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [data, setData] = useState<DrinkScreenQueryReturnType | null>(null);

  try {
    setIsLoading(true);
    const response = await fetch(endpoint);
    const json: DrinkScreenQueryResponse = await response.json();
    const drinksResponse: DrinkScreenQueryReturnType[] = json.drinks
      .slice(0, 1)
      .map(response => ({
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
        ingredients: [],
      }));
    setData(drinksResponse[0]);
  } catch (error) {
    setHasError(true);
    console.error(error);
  } finally {
    setIsLoading(false);
  }

  return [data, isLoading, hasError];
};
