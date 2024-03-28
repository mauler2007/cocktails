<script setup>
import { Back } from "@element-plus/icons-vue";
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
    required: true,
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="root">
    <img
      :style="`background-image: url(${imgUrl})`"
      class="img"
      src=""
      alt=""
    />
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isBackButtonVisible"
          class="back"
          type="primary"
          circle
          :icon="Back"
          @click="backFunc"
        ></el-button>
        <el-button class="btn">Get random cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.root
    display: flex
    min-height: 100vh
    background-color: $background
.img
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%

.main
    position: relative
    width: 50%
    padding: 32px 40px

.btn
    position: absolute
    top: 32px
    right: 40px
    font-size: 16px
    font-family: 'Raleway', 'Aral', sans-serif
    background-color: $accent
    color: $text
    border: none
    &:hover,
    &:active
        background-color: darken($accent, 10%)
        color: darken($accent, 10%)

.btns
  display: flex
  justify-content: space-between
  align-items: center


.back
  background-color: transparent
  border-color: white
  &:hover
    background-color: $accent
</style>
