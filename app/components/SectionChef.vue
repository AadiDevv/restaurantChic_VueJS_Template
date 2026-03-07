<script setup lang="ts">
const { locale } = useLang()
const { info } = useRestaurant()
</script>

<template>
  <section class="py-28 max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

      <!-- Visuel chef placeholder -->
      <div class="reveal-left order-2 lg:order-1 relative">
        <div
          class="rounded-loose aspect-[3/4] relative overflow-hidden"
          style="background: linear-gradient(155deg, var(--color-carbon-800) 0%, var(--color-carbon-900) 60%, #1a0e04 100%);"
        >
          <!-- Placeholder portrait -->
          <div class="absolute inset-0 flex flex-col items-center justify-end p-8">
            <div
              class="w-24 h-24 rounded-full mb-6 flex items-center justify-center border border-primary-500/20"
              style="background: radial-gradient(circle, var(--color-carbon-700), var(--color-carbon-800));"
            >
              <UIcon name="i-lucide-user" class="size-10 text-muted" />
            </div>
          </div>

          <!-- Badge nom -->
          <div class="absolute bottom-8 left-8 right-8">
            <div class="rounded-card p-4 border border-default/60 bg-default/80 backdrop-blur-sm">
              <p
                class="font-display text-lg"
                style="font-family: var(--font-display);"
              >
                {{ info.chef.name }}
              </p>
              <p class="text-label text-primary-500 mt-1">
                {{ info.chef.title }}
              </p>
            </div>
          </div>
        </div>

        <!-- Accent décoratif -->
        <div
          class="absolute -bottom-3 -right-3 w-2/3 h-2/3 rounded-loose -z-10 opacity-40"
          style="background: linear-gradient(135deg, var(--color-gold-950), transparent);"
        />
      </div>

      <!-- Texte -->
      <div class="space-y-8 order-1 lg:order-2">
        <div class="flex items-center gap-4 reveal">
          <span class="gold-line" />
          <span class="text-label text-primary-500">
            {{ locale === 'fr' ? 'En cuisine' : 'In the kitchen' }}
          </span>
        </div>

        <h2 class="text-display-lg reveal" style="font-family: var(--font-display);">
          {{ info.chef.name }}
        </h2>

        <p class="text-base leading-8 text-muted reveal">
          {{ info.chef.bio }}
        </p>

        <!-- Indicateurs -->
        <div class="grid grid-cols-2 gap-6 reveal">
          <div>
            <p
              class="text-display-md text-primary-500 mb-1"
              style="font-family: var(--font-display); font-size: 2rem;"
            >3</p>
            <p class="text-label text-dimmed">
              {{ locale === 'fr' ? 'continents explorés' : 'continents explored' }}
            </p>
          </div>
          <div>
            <p
              class="text-display-md text-primary-500 mb-1"
              style="font-family: var(--font-display); font-size: 2rem;"
            >12</p>
            <p class="text-label text-dimmed">
              {{ locale === 'fr' ? 'ans d\'expérience' : 'years of experience' }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
