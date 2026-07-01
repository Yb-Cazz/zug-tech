<!-- <script setup>
import Header from './components/Header.vue'
</script>

<template>
  <Header />
</template>

<style scoped></style> -->

<template>
  <RouterView />
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>
