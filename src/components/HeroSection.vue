<template>
  <section class="relative min-h-screen flex flex-col justify-center overflow-hidden">
    <!-- Hero Content -->
    <div class="relative max-w-full mx-auto lg:mx-7 px-6 lg:px-16 py-28">
      <!-- Hero Eyebrow -->
      <div class="mb-8">
        <span class="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
          <span class="w-8 h-px bg-foreground"></span>
          Where brands meet African consumers
        </span>
      </div>

      <!-- Headline -->
      <div class="mb-12">
        <h1
          class="font-display leading-[0.9] tracking-tight"
          style="font-size: clamp(3rem, 12vw, 10rem)"
        >
          <span class="block">The platform</span>
          <span class="block">
            to
            <span class="inline-flex flex-col gap-1 w-max animate-char-in">
              {{ active_text }}
              <div class="h-3 bg-stone-200 -z-20"></div>
            </span>
          </span>
        </h1>
      </div>

      <!-- Sub headline -->
      <div>
        <p class="max-w-lg text-xl leading-7 text-muted-foreground mb-10">
          We help brands decode African consumer behavior through real conversations, community
          insights, and data-driven intelligence.
        </p>
      </div>
    </div>

    <!-- Stats Marquee -->
    <div class="relative bottom-16 overflow-hidden">
      <div class="flex w-max gap-20 animate-[marquee_20s_linear_infinite]">
        <div class="flex gap-20 shrink-0">
          <StatItem v-for="stat in stats" :key="stat.value" :stat="stat" />
        </div>
        <!-- Marquee copy -->
        <div class="flex gap-20 shrink-0">
          <StatItem v-for="stat in stats" :key="'copy-' + stat.value" :stat="stat" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import StatItem from './StatItem.vue'

const stats = [
  { value: '12M+', label: 'consumer conversations analyzed', sub: 'Across Africa' },
  { value: '8+', label: 'African markets covered', sub: 'Growing weekly' },
  { value: '92%', label: 'insight accuracy rate', sub: 'Brand partners' },
  { value: '3x', label: 'faster consumer understanding', sub: 'Startups' },
]

const hero_text = ['listen', 'understand', 'analyze', 'act']
const currentIndex = ref(0)

const active_text = ref(hero_text[0])

let interval

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % hero_text.length
    active_text.value = hero_text[currentIndex.value]
  }, 2000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped></style>
