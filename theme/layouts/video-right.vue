<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  src: {
    type: String,
  },
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="slidev-layout default" :class="props.class">
      <slot />
    </div>
    <video controls class="w-full w-full">
      <source :src="src">
    </video>
  </div>
</template>