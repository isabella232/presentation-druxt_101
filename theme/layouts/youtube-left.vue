<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  id: {
    type: String,
  },
  class: {
    type: String,
  },
})

const src = computed(() => `https://www.youtube.com/embed/${props.id}?rel=0`)
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="w-full w-full">
      <iframe
        class="w-full h-full"
        height="100%"
        :src="src"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="slidev-layout default" :class="props.class">
      <slot />
      <a href="https://druxtjs.org" target="_blank"><img class="bottom-3 left-67/128 absolute w-10" src="/images/druxt-logomark-transparent.png"></a>
      <a href="https://www.realityloop.com" target="_blank"><img class="bottom-5 right-5 absolute w-13" src="/images/realityloop-logomark-transparent.png"></a>
    </div>
  </div>
</template>