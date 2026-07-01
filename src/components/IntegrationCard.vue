<template>
  <div
    class="px-8 py-6 shrink-0 transition-all duration-300 group border border-solid"
    :class="[hovered ? 'border-black/20' : '', hovered ? 'bg-stone-200/50' : 'bg-transparent']"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div
      class="text-lg font-medium transition-transform"
      :class="hovered ? 'translate-x-1' : 'translate-x-0'"
    >
      {{ item.name }}
    </div>
    <div class="text-sm text-muted-foreground">{{ item.category }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  item: { type: Object, required: true },
})

const hovered = ref(false)
</script>
