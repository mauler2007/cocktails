<script setup>
import AppLayout from "../components/AppLayout.vue";
import CocktailThumb from "../components/CocktailThumb.vue";
import { useRootStore } from "@/stores/root"; // використовую його для отримання доступу до функцій та стану вашого стору.
import { storeToRefs } from "pinia"; // дозволяє конвертувати стор у реактивні змінні Vue.

const rootStore = useRootStore(); // створено екземпляр кореневого стору за допомогою useRootStore.
rootStore.getIngredients(); // отримую дані про інгредієнти з сервера.
const { ingredients, cocktails, ingredient } = storeToRefs(rootStore); //використовую, storeToRefs, щоб конвертувати ingredients i coctails з  стору у реактивну змінну Vue.

function getCocktails() {
  rootStore.getCocktails(rootStore.ingredient);
}

function removeIngredient() {
  rootStore.setIgredient(null);
}
</script>

<template>
  <AppLayout
    img-url="/src/assets/img/bg-1.jpg"
    :back-func="removeIngredient"
    :is-back-button-visible="!!ingredient"
  >
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <h1 class="title">Choose your drink</h1>
        <div class="line"></div>
        <div class="select-wrapper">
          <!--  v-model="ingredient" для зв'язку вибраного інгредієнту з реактивною змінною ingredient.  -->
          <el-select
            v-model="rootStore.ingredient"
            placeholder="Choose main ingredient"
            size="large"
            filterable
            allow-create
            class="select"
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
          <div class="text">
            Try our delicious cocktail recipes for every occasion. Find
            delicious cocktail recipes by ingredient through our cocktail
            generator.
          </div>
          <img src="/src/assets/img/coctails.png" alt="coctails" class="img" />
        </div>
      </div>
      <div v-else class="info">
        <h1 class="title">Coctails with {{ ingredient }}</h1>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.select-wrapper
    padding-top: 50px

.select
    width: 220px

.text
    max-width:  516px
    margin:0 auto
    padding-top: 50px
    line-height: 36px
    letter-spacing: 0.1em
    color: $textMuted

.img
    margin-top: 60px

.cocktails
  display: flex
  flex-wrap: wrap
  align-items: center
  max-height: 400px
  margin-top: 60px
  overflow-y: auto
</style>
