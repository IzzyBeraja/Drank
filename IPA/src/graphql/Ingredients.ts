import { objectType } from "nexus";

export const Ingredient = objectType({
  name: "Ingredient",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("name");
    t.nonNull.string("amount");
  },
});
