import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Cocktail from "../pages/Cocktail.vue";
import CocktailRandom from "../pages/CocktailRandom.vue";
// використовую createRouter для створення екземпляра роутера і createWebHistory для використання HTML5 History API в режимі історії навігації.
// визначаю три маршрути:
// використовую іменовані маршрути, що дозволя.ть звертатися до них за їхніми іменами у коді.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/cocktails/:rid", //:rid показує, що це динамічний сегмент шляху, який буде доступний як параметр rid у компоненті Cocktail.
      name: "cocktail",
      component: Cocktail,
    },
    {
      path: "/random",
      name: "cocktailRandom",
      component: CocktailRandom,
    },
  ],
});

export default router;
