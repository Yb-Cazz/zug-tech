<template>
  <section
    id="process-section"
    class="bg-foreground relative overflow-hidden min-h-screen py-24 text-background"
  >
    <div class="relative z-10 mx-auto max-w-8xl px-6">
      <!-- Header -->
      <div class="mb-16">
        <span class="flex items-center gap-3 text-sm font-mono mb-6 text-background opacity-60">
          <span class="w-8 h-px bg-background opacity-40"></span>
          Process
        </span>
        <h2 class="text-4xl lg:text-6xl font-display tracking-tight">
          Three steps.<br />
          <span class="opacity-60">Infinite possibilities.</span>
        </h2>
      </div>

      <!-- Main section Two column layout -->
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <!-- Steps -->
        <div>
          <button
            v-for="(step, i) in steps"
            :key="step.numeral"
            type="button"
            class="w-full text-left py-8 transition-all duration-50 group"
            :style="{
              // borderBottom: activeStep === i ? '1px solid var(--background);' : 'none',
              opacity: activeStep === i ? '1' : '0.4',
            }"
            @click="setActiveStep(i)"
          >
            <div class="flex items-start gap-6">
              <span class="font-display text-3xl text-background opacity-30">{{
                step.numeral
              }}</span>
              <div class="flex-1">
                <h3
                  class="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300"
                >
                  {{ step.title }}
                </h3>
                <p class="leading-relaxed text-background opacity-60">
                  {{ step.description }}
                </p>
                <!-- Progress bar (only for active step) -->
                <div
                  v-if="activeStep === i"
                  class="mt-4 h-px overflow-hidden bg-gray-500 opacity-60"
                >
                  <div class="h-full bg-white w-0 z-40 animate-progress"></div>
                </div>
              </div>
            </div>
          </button>
        </div>

        <!-- Code window -->
        <div class="lg:sticky lg:top-32 self-start">
          <div class="border border-solid border-stone-100/10 overflow-hidden">
            <!-- Window header -->
            <div
              class="px-6 py-4 flex items-center justify-between border-b border-solid border-stone-100/10"
            >
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-stone-100/20"></div>
                <div class="w-3 h-3 rounded-full bg-stone-100/20"></div>
                <div class="w-3 h-3 rounded-full bg-stone-100/20"></div>
              </div>
              <span class="text-xs font-mono text-stone-500">workflow.ts</span>
            </div>

            <!-- Code content -->
            <div class="p-8 font-mono text-sm min-h-[280px]">
              <pre v-if="activeStep == 0">
                <code class="text-background opacity-60">
      zug.listen({
        platforms: [
          "X",
          "TikTok",
          "Facebook",
          "Blogs"
        ],
        region:"Africa",
        language:["English","Pidgin","Slang"]
      })
                </code>
              </pre>
              <pre v-if="activeStep == 1">
                <code class="text-background opacity-60">
      zug.analyze({  
        sentiment: true,
        detectTrends: true,
        detectCrisis: true,
        competitorInsights: true
      }),
                </code>
              </pre>
              <pre v-if="activeStep == 2">
                <code class="text-background opacity-60">
      zug.insights({
        dashboard: true,
        alerts: "real-time",
        reports: "executive"
      })

      // Insight ready                  
                </code>
              </pre>
            </div>

            <!-- Status bar -->
            <div
              class="px-6 py-4 flex items-center gap-3 border-t border-solid border-stone-100/10"
            >
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span class="text-xs font-mono text-stone-500">Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeStep = ref(0)

const steps = [
  {
    numeral: 'I',
    title: 'Listen to the Market',
    description:
      'ZUG continuously monitors millions of public conversations across social platforms, forums, and blogs to capture what African consumers are really saying about your brand and competitors.',
  },
  {
    numeral: 'II',
    title: 'Analyze the Signal',
    description:
      'Our AI understands African tone, slang, and sarcasm to classify conversations into sentiment, trends, and emerging risks in real time.',
  },
  {
    numeral: 'III',
    title: 'Turn Insight into Action',
    description:
      'Receive clear dashboards, alerts, and executive summaries that help your team make faster and smarter business decisions.',
  },
]

function setActiveStep(i) {
  activeStep.value = i
}

const codeText = [
  'zug.listen({',
  '  platforms: [',
  '    "X",',
  '    "TikTok",',
  '    "Facebook",',
  '    "Blogs"',
  '  ],',
  '  region: "Africa",',
  '  language: ["English", "Pidgin", "Slang"]',
  '})',
]

const codes = [
  'zug.analyze({  sentiment: true,detectTrends: true,detectCrisis: true,competitorInsights: true})',
  'zug.listen({platforms: ["X","TikTok","Facebook","Blogs"],region:"Africa",language:["English","Pidgin","Slang"]})',
  'zug.insights({dashboard: true,alerts: "real-time",reports: "executive"})// Insight ready',
]

const regex = /(?<=[,\{\[])(?=.)|(?=\/\/|\}|\])/

const newSplit = (codes) => {
  codes.map((code) => {
    const result = code.split(regex)
    console.log(result)
  })
}

// Auto-cycle steps
onMounted(() => {
  setInterval(() => {
    activeStep.value = (activeStep.value + 1) % steps.length
  }, 5000)
})
</script>
