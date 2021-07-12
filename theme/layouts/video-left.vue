<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  class: {
    type: String,
  },
  video: {
    type: String,
  },
})

</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <video controls class="w-full w-full">
      <source :src="video">
    </video>
    <div class="slidev-layout default" :class="props.class">
      <slot />
      <a href="https://druxtjs.org" target="_blank"><img class="bottom-3 left-67/128 absolute w-10" src="/images/druxt-logomark-transparent.png"></a>
      <a href="https://www.realityloop.com" target="_blank"><img class="bottom-5 right-5 absolute w-13" src="/images/realityloop-logomark-transparent.png"></a>
    </div>
  </div>
</template>