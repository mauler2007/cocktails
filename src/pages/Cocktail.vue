<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { COCKTAIL_BY_ID } from "@/constants";
import AppLayout from "../components/AppLayout.vue";

const route = useRoute(); // data.drinks[0]
const router = useRouter();

const cocktail = ref(null);

const cocktailId = computed(() => route.path.split("/").pop());

const ingredients = computed(() => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;

    const ingredient = {};
    ingredient.name = cocktail.value[`strIngredient${i}`];
    ingredient.measure = cocktail.value[`strMeasure${i}`];

    ingredients.push(ingredient);
  }
  return ingredients;
});

async function getCocktail() {
  const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailId.value}`);
  cocktail.value = data?.data?.drinks[0];
}

function goBack() {
  router.go(-1);
}

getCocktail();
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :img-url="`${cocktail.strDrinkThumb}`" :back-func="goBack">
      <div class="wrapper">
        <div class="info">
          <h1 class="title">{{ cocktail.strDrink }}</h1>
          <div class="line"></div>
          <div class="list">
            <div
              v-for="(item, key) in ingredients"
              :key="key"
              class="list-item"
            >
              {{ item.name }}
              <template v-if="item.measure"> | {{ item.measure }} </template>
            </div>
          </div>
          <div class="instructions">{{ cocktail.strInstructions }}</div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="sass" scoped>
// @import '../assets/styles/main'
</style>
