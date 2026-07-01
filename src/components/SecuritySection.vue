<template>
  <section id="security" class="relative py-24 lg:py-32 overflow-hidden">
    <div class="max-w-8xl mx-auto px-6 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <!-- Left -->
        <div>
          <span class="flex items-center gap-3 text-sm font-mono mb-6 text-muted-foreground">
            <span class="w-8 h-px bg-foreground opacity-30"></span>
            Security
          </span>
          <h2 class="text-4xl lg:text-6xl font-display tracking-tight mb-8">
            Privacy and trust<br />by design.
          </h2>
          <p class="text-xl leading-relaxed mb-12 text-muted-foreground">
            Consumer intelligence should never compromise privacy. ZUG analyzes public conversations
            while protecting individuals and brands.
          </p>
        </div>

        <!-- Right: cards -->
        <div class="grid gap-6">
          <div
            v-for="(item, i) in securityItems"
            :key="item.title"
            class="p-6 transition-all duration-500 group border border-solid border-stone-200"
            @mouseenter="hoveredTab = i"
            @mouseleave="hoveredTab = null"
            :class="hoveredTab === i ? 'border-stone-400/50' : 'border-stone-200'"
          >
            <div class="flex items-start gap-4">
              <div
                class="shrink-0 w-10 h-10 flex items-center justify-center transition-colors duration-300 group-hover:bg-foreground group-hover:text-background"
                style="border: 1px solid hsl(var(--foreground) / 0.1)"
              >
                <component :is="item.icon" class="w-5 h-5" />
              </div>
              <div>
                <h3
                  class="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300"
                >
                  {{ item.title }}
                </h3>
                <p style="color: hsl(var(--muted-foreground))">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineComponent, h } from 'vue'

var hoveredTab = ref(null)

const ShieldIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      },
      [
        h('path', {
          d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
        }),
      ],
    ),
})

const LockIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      },
      [
        h('rect', { width: 18, height: 11, x: 3, y: 11, rx: 2, ry: 2 }),
        h('path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' }),
      ],
    ),
})

const EyeIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      },
      [
        h('path', {
          d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0',
        }),
        h('circle', { cx: 12, cy: 12, r: 3 }),
      ],
    ),
})

const FileCheckIcon = defineComponent({
  render: () =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      },
      [
        h('path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' }),
        h('path', { d: 'M14 2v4a2 2 0 0 0 2 2h4' }),
        h('path', { d: 'm9 15 2 2 4-4' }),
      ],
    ),
})

const securityItems = [
  {
    icon: ShieldIcon,
    title: 'Privacy-first data collection',
    description:
      'ZUG analyzes only publicly available conversations and never collects private user data.',
  },
  {
    icon: LockIcon,
    title: 'Secure data infrastructure',
    description:
      'All insight pipelines are protected with modern encryption and secure infrastructure.',
  },
  {
    icon: EyeIcon,
    title: 'Responsible AI analysis',
    description:
      'Our AI models are designed to interpret sentiment and trends while respecting ethical data use.',
  },
  {
    icon: FileCheckIcon,
    title: 'Compliance-ready insights',
    description:
      'Our platform is built to align with global data protection standards and brand safety practices.',
  },
]
</script>
