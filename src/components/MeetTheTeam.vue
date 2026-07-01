<template>
  <section id="meet-team" class="relative py-24 lg:py-32 overflow-hidden">
    <div class="max-w-8xl mx-auto px-6 lg:px-12 text-center">
      <div>
        <span
          class="flex items-center gap-3 text-sm font-mono mb-6 justify-center text-muted-foreground"
        >
          <span class="w-8 h-px bg-foreground opacity-30"></span>
          Leadership
          <span class="w-8 h-px bg-foreground opacity-30"></span>
        </span>
        <h2 class="text-4xl lg:text-6xl font-display tracking-tight mb-16">
          Meet the <span class="text-muted-foreground">team.</span>
        </h2>

        <div class="flex flex-col items-center">
          <div class="group relative flex flex-col items-center max-w-md">
            <!-- Photo -->
            <div
              class="relative w-48 h-48 mb-8 overflow-hidden rounded-full transition-all duration-500"
            >
              <img
                alt="Samuel Okon"
                class="object-cover w-full h-full grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
                src="../assets/images/sammie.jpeg"
              />
            </div>

            <!-- Info -->
            <div>
              <h3 class="text-2xl font-medium mb-2">Samuel Okon</h3>
              <p class="font-mono text-sm mb-6 tracking-wide uppercase text-muted-foreground">
                Chief Executive Officer
              </p>
              <p class="leading-relaxed text-muted-foreground">
                Samuel leads ZUG Technologies with a focus on building the next generation of
                consumer intelligence tools for African markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
