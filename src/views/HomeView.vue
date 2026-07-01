<template>
  <main>
    <NavigationBar />
    <HeroSection />
    <FeaturesSection />
    <ProcessSection />
    <MarketSection />
    <IntegrationsSection />
    <SecuritySection />
    <MeetTheTeam />
    <GrowYourBrandSection />
  </main>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import MarketSection from '@/components/MarketSection.vue'
import IntegrationsSection from '@/components/IntegrationsSection.vue'
import SecuritySection from '@/components/SecuritySection.vue'
import MeetTheTeam from '@/components/MeetTheTeam.vue'
import GrowYourBrandSection from '@/components/GrowYourBrandSection.vue'
</script>

<style scoped>
main {
  position: relative;
  overflow-x: hidden;
  min-height: auto;
}
</style>
