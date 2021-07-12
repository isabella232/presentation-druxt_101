<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  class: {
    type: String,
  },
  image: {
    type: String,
  },
  position: {
    type: String,
  },
})
const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="slidev-layout default" :class="props.class">
      <slot />
      <a href="https://druxtjs.org" target="_blank"><img class="bottom-3 left-5 absolute w-10" src="/images/druxt-logomark-transparent.png"></a>
      <a href="https://www.realityloop.com" target="_blank"><img class="bottom-5 right-67/128 absolute w-13" src="/images/realityloop-logomark-transparent.png"></a>
    </div>
    <div class="w-full w-full" :style="{ ...style, backgroundPosition: position || style.backgroundPosition }"></div>
  </div>
</template>
