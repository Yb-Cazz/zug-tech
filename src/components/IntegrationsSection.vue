<template>
  <section id="integrations" class="relative py-24 overflow-hidden">
    <div class="max-w-8xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <span class="inline-flex gap-3 items-center text-sm mb-6 text-muted-foreground font-mono">
          <span class="w-8 h-px bg-muted-foreground"></span>
          Integrations
          <span class="w-8 h-px bg-muted-foreground"></span>
        </span>

        <h2 class="text-5xl font-display tracking-tight mb-6">
          Listening across<br />the digital world.
        </h2>
        <p class="text-xl text-muted-foreground">
          ZUG monitors conversations across the platforms where African consumers speak the most —
          from social media to forums and digital communities.
        </p>
      </div>
    </div>

    <!-- Marquee -->
    <!-- Right to left -->
    <div class="w-full mb-6 overflow-hidden">
      <div class="flex gap-6 animate-marquee">
        <div class="flex gap-6 shrink-0">
          <IntegrationCard v-for="item in integrations" :key="item.name" :item="item" />
        </div>
        <div class="flex gap-6 shrink-0">
          <IntegrationCard v-for="item in integrations" :key="'copy-' + item.name" :item="item" />
        </div>
        <div></div>
      </div>
    </div>

    <!-- Left to right -->
    <div class="w-full overflow-hidden">
      <div class="flex gap-6 animate-marquee-reverse">
        <div class="flex gap-6 shrink-0">
          <IntegrationCard
            v-for="item in integrationsReversed"
            :key="'rev-' + item.name"
            :item="item"
          />
        </div>
        <div class="flex gap-6 shrink-0">
          <IntegrationCard
            v-for="item in integrationsReversed"
            :key="'rev-copy-' + item.name"
            :item="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IntegrationCard from './IntegrationCard.vue'

const integrations = [
  {
    name: 'X',
    category: 'Social Media',
  },
  {
    name: 'Facebook',
    category: 'Social Media',
  },
  {
    name: 'Instagram',
    category: 'Social Media',
  },
  {
    name: 'TikTok',
    category: 'Social Media',
  },
  {
    name: 'YouTube',
    category: 'Video Platform',
  },
  {
    name: 'Reddit',
    category: 'Community Discussions',
  },
  {
    name: 'LinkedIn',
    category: 'Professional Network',
  },
  {
    name: 'Telegram',
    category: 'Messaging Communities',
  },
  {
    name: 'WhatsApp Channels',
    category: 'Messaging',
  },
  {
    name: 'Blogs',
    category: 'Online Publications',
  },
  {
    name: 'Forums',
    category: 'Community Discussions',
  },
  {
    name: 'News Sites',
    category: 'Media Coverage',
  },
]

const integrationsReversed = [...integrations].reverse()
</script>
