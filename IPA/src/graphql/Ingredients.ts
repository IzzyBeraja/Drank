import { extendType, inputObjectType, nonNull, objectType } from "nexus";

export const Ingredient = objectType({
  name: "Ingredient",
  definition(t) {
    t.nonNull.int("ingredientId");
    t.nonNull.string("name");
    t.nonNull.string("amount");
  },
});

export const IngredientInputType = inputObjectType({
  name: "IngredientInputType",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("amount");
  },
});

export const IngredientQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("ingredients", {
      type: "Ingredient",
      async resolve(_, __, { prisma }) {
        return await prisma.ingredient.findMany();
      },
    });
  },
});

export const IngredientMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createIngredient", {
      type: "Ingredient",
      args: { data: nonNull("IngredientInputType") },
      async resolve(_, { data }, { prisma }) {
        return await prisma.ingredient.create({ data });
      },
    });
  },
});
