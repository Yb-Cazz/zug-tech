<template>
  <div class="flex items-baseline gap-4">
    <span class="text-4xl lg:text-5xl font-display">{{ stat.value }}</span>
    <span class="text-sm" style="color: var(--muted-foreground)">
      {{ stat.label }}
      <span class="block font-mono text-xs mt-1">{{ stat.sub }}</span>
    </span>
  </div>
</template>

<script setup>
defineProps({
  stat: {
    required: true,
  },
})
</script>
