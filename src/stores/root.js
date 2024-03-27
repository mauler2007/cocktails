import { defineStore } from "pinia";
import axios from "axios";
import { INGREDIENTS_URL, COCKTAILS_BY_INGR_URL } from "../constants/";

// Оголошення кореневого стору за допомогою Pinia.
// pinia  в отличии vue-x  нет мутаций
export const useRootStore = defineStore("root", {
  state: () => ({
    // Стан кореневого стору, що містить інгредієнти.
    ingredients: [],
    cocktails: [],
  }),
  actions: {
    // отримання інгредієнтів з сервера.
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL);
      this.ingredients = data?.data?.drinks;
      // console.log("Ingredients:", this.ingredients);
    },
    async getCocktails(ingredient) {
      const data = await axios.get(`${COCKTAILS_BY_INGR_URL}${ingredient}`);
      this.cocktails = data?.data?.drinks;
      // console.log("Cocktail:", this.cocktail);
    },
  },
});
