import { NexusGenObjects } from "./../../nexus-typegen";
import { extendType, inputObjectType, list, nonNull, objectType } from "nexus";

export const Drink = objectType({
  name: "Drink",
  definition(t) {
    t.nonNull.int("drinkId");
    t.nonNull.string("name");
    t.nullable.string("altName");
    t.nonNull.string("category");
    t.nullable.string("videoUri");
    t.nonNull.boolean("alcoholic");
    t.nonNull.string("glassType");
    t.nonNull.string("instructions");
  },
});

export const DrinkInputType = inputObjectType({
  name: "DrinkInputType",
  definition(t) {
    t.nonNull.string("name");
    t.nullable.string("altName");
    t.nonNull.string("category");
    t.nullable.string("videoUri");
    t.nonNull.boolean("alcoholic");
    t.nonNull.string("glassType");
    t.nonNull.string("instructions");
  },
});

export const DrinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("drinks", {
      type: "Drink",
      async resolve(_, __, { prisma }) {
        return await prisma.drink.findMany();
      },
    });
  },
});

export const DrinkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createDrink", {
      type: "Drink",
      args: { data: nonNull("DrinkInputType") },
      async resolve(_, { data }, { prisma }) {
        return await prisma.drink.create({ data });
      },
    });
  },
});

const Drinks: NexusGenObjects["Drink"][] = [
  {
    drinkId: 11007,
    name: "Margarita",
    altName: null,
    category: "Ordinary Drink",
    videoUri: null,
    alcoholic: true,
    glassType: "Cocktail Glass",
    instructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  },
];
