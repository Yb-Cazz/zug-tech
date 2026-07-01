<template>
  <section class="relative py-24 overflow-hidden">
    <div class="max-w-8xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Left  section content -->
        <div>
          <span class="flex items-center gap-3 text-sm font-mono mb-6 text-muted-foreground">
            <span class="w-8 h-px bg-foreground opacity-30"></span>
            Understanding Africa
          </span>
          <h2 class="text-4xl lg:text-6xl font-display tracking-tight mb-8">
            Market by market.<br />Across Africa.
          </h2>
          <p class="text-xl leading-relaxed mb-12 text-muted-foreground">
            ZUG continuously monitors consumer conversations across Africa's fastest-growing digital
            markets. From Lagos to the world, we capture real-time sentiment and trends shaping the
            next generation of African brands.
          </p>
        </div>

        <!-- Right section content -->
        <div>
          <div class="border border-solid border-gray-300">
            <!-- Table Header -->
            <div
              class="px-6 py-4 flex items-center justify-between border-b border-solid border-gray-300"
            >
              <span class="text-sm font-mono text-muted-foreground">Edge Network</span>
              <span class="flex items-center gap-2 text-xs font-mono text-green-500">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                All operational
              </span>
            </div>

            <!-- Markets list -->
            <div>
              <div
                v-for="(market, i) in markets"
                :key="market.city"
                class="px-6 py-5 flex items-center justify-between transition-all duration-300 border-b border-solid border-b-muted-foreground/20 last:border-none"
                :class="{
                  'bg-stone-200/30': i == activeMarket,
                }"
              >
                <div class="flex items-center gap-4">
                  <span
                    class="w-2 h-2 rounded-full transition-colors duration-300"
                    :class="i == activeMarket ? 'bg-black' : 'bg-gray-302'"
                  ></span>
                  <div>
                    <div class="font-medium">{{ market.city }}</div>
                    <div class="text-sm text-muted-foreground">
                      {{ market.country }}
                    </div>
                  </div>
                </div>
                <span class="font-mono text-sm text-muted-foreground">{{
                  market.conversations
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const activeMarket = ref(0)

const markets = [
  { city: 'Lagos', country: 'Nigeria', conversations: '4.2M conversations' },
  { city: 'Nairobi', country: 'Kenya', conversations: '2.1M conversations' },
  { city: 'Johannesburg', country: 'South Africa', conversations: '3.5M conversations' },
  { city: 'Accra', country: 'Ghana', conversations: '1.4M conversations' },
  { city: 'Cairo', country: 'Egypt', conversations: '3.0M conversations' },
  { city: 'Casablanca', country: 'Morocco', conversations: '1.2M conversations' },
]

onMounted(() => {
  setInterval(() => {
    activeMarket.value = (activeMarket.value + 1) % markets.length
  }, 3000)
})
</script>
