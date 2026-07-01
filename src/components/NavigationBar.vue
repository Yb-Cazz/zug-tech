<template>
  <header class="fixed z-30 top-0 left-0 right-0">
    <nav
      class="transition-all duration-500 ease-out mx-auto"
      :class="
        isScrolled
          ? 'max-w-6xl mt-4 rounded-full bg-white shadow-lg border border-gray-200 px-4'
          : 'max-w-full bg-transparent'
      "
    >
      <div class="flex items-center justify-between px-6 h-14">
        <!-- Logo -->
        <a href="#" class="flex justify-center items-center gap-2 no-underline">
          <div class="relative w-10 h-10">
            <img
              alt="logo"
              class="object-contain w-full h-full"
              src="../assets/images/zug-logo.jpeg"
              @error="handleLogoError"
              ref="logoImg"
            />
            <span v-if="logoError" class="font-display font-bold text-2xl">ZUG</span>
          </div>
        </a>

        <!-- Nav links -->
        <div class="hidden items-center md:flex gap-10">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm text-foreground relative group"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </div>

        <!-- Call Us -->
        <div class="hidden items-center gap-4 md:flex">
          <button
            class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-8 gap-1.5 px-6 rounded-full transition-all duration-500 bg-foreground text-background hover:opacity-80"
          >
            call us
          </button>
        </div>

        <!-- Mobile menu Open -->
        <button
          v-if="!mobileOpen"
          class="md:hidden p-2"
          aria-label="Toggle menu"
          @click="toggleMobileMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu overlay -->
    <div
      class="md:hidden fixed inset-0 z-40 transition-all duration-500 bg-background"
      :class="mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    >
      <div class="flex flex-col h-full px-8 pt-16 pb-8">
        <button
          class="md:hidden p-6 flex justify-end"
          aria-label="Toggle menu"
          @click="toggleMobileMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="flex-1 flex flex-col justify-center gap-8">
          <a
            v-for="(link, i) in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-5xl font-display transition-all duration-500"
            :class="mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            :style="{ transitionDelay: mobileOpen ? `${i * 75}ms` : '0ms' }"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
        </div>
        <!-- Mobile call us button -->
        <div
          class="flex gap-4 pt-8 transition-all duration-500 delay-300"
          :class="mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <button
            class="flex-1 h-14 text-base font-medium rounded-full transition-all bg-foreground text-background"
          >
            call us
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileOpen = ref(false)
const logoError = ref(false)

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

const navLinks = [
  { href: '#features', label: 'About' },
  { href: '#process-section', label: 'How it works' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#cta', label: 'Contact' },
]

function toggleMobileMenu() {
  mobileOpen.value = !mobileOpen.value
}

function closeMobileMenu() {
  mobileOpen.value = false
}

function handleLogoError() {
  logoError.value = true
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
