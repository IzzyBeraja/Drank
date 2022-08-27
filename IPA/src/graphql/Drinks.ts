import { NexusGenObjects } from "./../../nexus-typegen";
import { extendType, objectType } from "nexus";

export const Drink = objectType({
  name: "Drink",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("name");
    t.nullable.string("altName");
    t.nonNull.string("category");
    t.nullable.string("videoUri");
    t.nonNull.boolean("alcoholic");
    t.nonNull.string("glassType");
    t.nonNull.string("instructions");
    t.nonNull.list.nonNull.field("ingredients", { type: "Ingredient" });
  },
});

export const DrinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("drinks", {
      type: "Drink",
      resolve() {
        return Drinks;
      },
    });
  },
});

const Drinks: NexusGenObjects["Drink"][] = [
  {
    id: "11007",
    name: "Margarita",
    altName: null,
    category: "Ordinary Drink",
    videoUri: null,
    alcoholic: true,
    glassType: "Cocktail Glass",
    instructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    ingredients: [{ id: "1", name: "Tequila", amount: "1 1/2 oz" }],
  },
];
