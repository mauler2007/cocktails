<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <img class="pic" :src="`${cocktail.strDrinkThumb}`" />
    </RouterLink>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.root
    width: calc( (100%  - 76px) / 3  )
    padding-right: 30px
    padding-bottom: 20px
    &:nth-child(3n+3)
        padding-right: 0
.pic
    width: 120px
    height: 120px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: 100%

.name
    padding-top: 15px
    letter-spacing: 0.1em
</style>
