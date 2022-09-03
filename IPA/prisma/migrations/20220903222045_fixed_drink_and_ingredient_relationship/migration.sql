/*
  Warnings:

  - You are about to drop the column `drinkId` on the `Ingredient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_drinkId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "drinkId";

-- CreateTable
CREATE TABLE "DrinksOnIngredients" (
    "ingredientId" INT4 NOT NULL,
    "drinkId" INT4 NOT NULL,
    "ingredientIngredientId" INT4 NOT NULL,
    "drinkDrinkId" INT4 NOT NULL,

    CONSTRAINT "DrinksOnIngredients_pkey" PRIMARY KEY ("drinkId","ingredientId")
);

-- AddForeignKey
ALTER TABLE "DrinksOnIngredients" ADD CONSTRAINT "DrinksOnIngredients_ingredientIngredientId_fkey" FOREIGN KEY ("ingredientIngredientId") REFERENCES "Ingredient"("ingredientId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DrinksOnIngredients" ADD CONSTRAINT "DrinksOnIngredients_drinkDrinkId_fkey" FOREIGN KEY ("drinkDrinkId") REFERENCES "Drink"("drinkId") ON DELETE RESTRICT ON UPDATE CASCADE;
