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
    </div>
  </div>
</template>