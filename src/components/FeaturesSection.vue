<template>
  <section id="features" class="relative py-24">
    <div class="max-w-8xl mx-auto px-5 lg:px-10">
      <!-- Header -->
      <div class="mb-14">
        <span class="flex items-center gap-4 text-sm font-mono mb-7 text-muted-foreground">
          <span class="w-9 h-px bg-foreground"></span>
          Capabilities
        </span>
        <h2 class="text-5xl font-display tracking-tight">
          Understand the African consumer.<br />
          <span class="text-muted-foreground">In real time.</span>
        </h2>
      </div>

      <div>
        <div v-for="feature in features" :key="feature.number" class="group">
          <div
            class="flex flex-col lg:flex-row gap-8 lg:gap-16 py-10 lg:py-20 border-b border-solid border-b-gray-200"
          >
            <div>
              <span class="font-mono text-sm text-muted-foreground">{{ feature.number }}</span>
            </div>
            <div class="flex-1 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3
                  class="text-3xl lg:text-4xl font-display mb-4 transition-transform duration-500 group-hover:translate-x-2"
                >
                  {{ feature.title }}
                </h3>
                <p class="text-lg text-muted-foreground">
                  {{ feature.description }}
                </p>
              </div>

              <!-- Feature Animation -->
              <FeatureAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureAnimation from './FeatureAnimation.vue'

const features = [
  {
    number: '01',
    title: 'Brand Sentiment Intelligence',
    description:
      'Track the emotional pulse of your brand across Africa. We analyze millions of conversations across social platforms to show exactly how customers feel about your products and services.',
  },
  {
    number: '02',
    title: 'Market Gap Discovery',
    description:
      'Identify opportunities hidden in competitor complaints. By listening to what customers dislike about rival brands, we reveal the exact features and campaigns you should launch next.',
  },
  {
    number: '03',
    title: 'Marketing Impact Tracking',
    description:
      'Measure how audiences react to your campaigns, influencers, and product launches in real time. Know instantly whether your marketing spend is driving real engagement or just noise.',
  },
  {
    number: '04',
    title: 'Crisis Early Warning',
    description:
      'Detect reputation risks before they explode. Our system identifies early negative trends and alerts your team before a small complaint becomes a trending crisis.',
  },
]
</script>
