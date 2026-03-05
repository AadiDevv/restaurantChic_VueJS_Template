<script setup lang="ts">
const { locale, t } = useLang()
const { info } = useRestaurant()
const colorMode = useColorMode()
</script>

<template>
  <section class="py-28 max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

      <!-- Texte éditorial -->
      <div class="space-y-8">
        <div class="flex items-center gap-4 reveal">
          <span class="gold-line" />
          <span class="text-label text-gold-500">
            {{ locale === 'fr' ? 'Notre philosophie' : 'Our philosophy' }}
          </span>
        </div>

        <h2 class="text-display-lg reveal" style="font-family: var(--font-display);">
          {{ locale === 'fr'
            ? 'La chaleur révèle\nl\'essentiel.'
            : 'Heat reveals\nwhat matters.' }}
        </h2>

        <p
          class="text-base leading-8 reveal"
          :class="colorMode.value === 'dark' ? 'text-stone-400' : 'text-stone-600'"
        >
          {{ info.philosophy }}
        </p>
      </div>

      <!-- Bloc visuel décoratif -->
      <div class="reveal-scale relative">
        <!-- Carte grande -->
        <div
          class="rounded-loose overflow-hidden aspect-[4/5] relative"
          style="background: linear-gradient(135deg, var(--color-carbon-900) 0%, var(--color-carbon-800) 50%, #2a1a08 100%);"
        >
          <!-- Contenu placeholder -->
          <div class="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
            <div
              class="w-16 h-16 rounded-full border border-gold-500/30 flex items-center justify-center animate-float"
            >
              <UIcon name="i-lucide-flame" class="size-7 text-gold-500" />
            </div>
            <p
              class="text-center text-stone-400 text-sm leading-relaxed max-w-xs"
              style="font-family: var(--font-display); font-style: italic; font-size: 1.1rem;"
            >
              "{{ locale === 'fr'
                ? 'La braise ne ment pas\nsur le produit.'
                : 'The ember never lies\nabout the ingredient.' }}"
            </p>
            <span class="text-label text-gold-600">— Léa Vernet</span>
          </div>

          <!-- Accent décoratif -->
          <div
            class="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-10"
            style="background: radial-gradient(circle, var(--color-gold-400), transparent);"
          />
        </div>

        <!-- Chiffre éditorial -->
        <div class="absolute -bottom-6 -left-6 reveal">
          <div
            class="rounded-card p-6 border shadow-card"
            :class="colorMode.value === 'dark'
              ? 'bg-carbon-900 border-carbon-700/50'
              : 'bg-white border-stone-200'"
          >
            <p class="text-display-md text-gold-500" style="font-size: 2.5rem; line-height: 1;">23</p>
            <p
              class="text-label mt-1"
              :class="colorMode.value === 'dark' ? 'text-stone-500' : 'text-stone-400'"
            >
              {{ locale === 'fr' ? 'épices · mole negro' : 'spices · negro mole' }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
