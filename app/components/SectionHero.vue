<script setup lang="ts">
const { locale } = useLang()
const { info } = useRestaurant()
</script>

<template>
  <section
    class="relative min-h-screen flex items-end overflow-hidden hero-gradient"
  >
    <!-- Grain texture overlay -->
    <div
      class="absolute inset-0 opacity-20 pointer-events-none"
      style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%221%22/%3E%3C/svg%3E'); background-size: 200px;"
    />

    <!-- Glow décoratif -->
    <div
      class="absolute top-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgb(201 147 58 / 0.08) 0%, transparent 70%); filter: blur(40px);"
    />

    <!-- Contenu hero -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
      <div class="max-w-3xl">

        <!-- Label éditorial -->
        <div class="flex items-center gap-4 mb-8 enter-fade">
          <span class="gold-line" />
          <span class="text-label text-primary-500">
            {{ locale === 'fr' ? 'Restaurant · Paris 11e' : 'Restaurant · Paris 11th' }}
          </span>
        </div>

        <!-- Titre principal -->
        <h1
          class="text-display-xl text-white mb-6 enter-fade-delay"
          style="font-family: var(--font-display);"
        >
          {{ info.name }}<br>
          <em class="text-shimmer not-italic">{{ info.tagline }}</em>
        </h1>

        <!-- Sous-titre -->
        <p class="text-lg text-white/70 max-w-lg leading-relaxed mb-10 enter-fade-slow">
          {{ info.description }}
        </p>

        <!-- Actions -->
        <div class="flex flex-wrap items-center gap-4 enter-fade-slow">
          <UButton
            to="/reservation"
            size="lg"
            class="shadow-glow-gold"
          >
            {{ locale === 'fr' ? 'Réserver une table' : 'Book a table' }}
          </UButton>
          <UButton
            to="/menu"
            size="lg"
            variant="outline"
            color="neutral"
          >
            {{ locale === 'fr' ? 'Découvrir la carte' : 'Explore the menu' }}
          </UButton>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
      <span class="text-label text-white/40" style="font-size: 0.6rem;">
        {{ locale === 'fr' ? 'Défiler' : 'Scroll' }}
      </span>
      <div class="w-px h-8 bg-gradient-to-b from-primary-500/50 to-transparent" />
    </div>
  </section>
</template>
