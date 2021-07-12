<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout section w-full h-full grid from-green-500" :style="style">
    <div class="my-auto w-full">
      <slot />
      <a href="https://druxtjs.org" target="_blank"><img class="bottom-3 left-5 absolute w-10" src="/images/druxt-logomark-transparent.png"></a>
      <a href="https://www.realityloop.com" target="_blank"><img class="bottom-5 right-5 absolute w-13" src="/images/realityloop-logomark-transparent.png"></a>
    </div>
  </div>
</template>
