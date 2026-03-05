<script setup lang="ts">
const { locale } = useLang()
const { info } = useRestaurant()
const colorMode = useColorMode()
</script>

<template>
  <section class="py-28 max-w-7xl mx-auto px-6">
    <div
      class="rounded-loose p-12 lg:p-20 relative overflow-hidden reveal-scale"
      style="background: linear-gradient(135deg, var(--color-carbon-950) 0%, var(--color-carbon-900) 50%, #1c1005 100%);"
    >
      <!-- Glow décoratif -->
      <div
        class="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style="background: radial-gradient(circle at 80% 20%, rgb(201 147 58 / 0.12) 0%, transparent 60%);"
      />

      <div class="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

        <div class="space-y-6 max-w-xl">
          <div class="flex items-center gap-4">
            <span class="gold-line" />
            <span class="text-label text-gold-500">
              {{ locale === 'fr' ? 'Réservation' : 'Reservations' }}
            </span>
          </div>

          <h2
            class="text-display-lg text-white"
            style="font-family: var(--font-display);"
          >
            {{ locale === 'fr'
              ? 'Réservez votre\nexpérience.'
              : 'Reserve your\nexperience.' }}
          </h2>

          <p class="text-stone-400 leading-relaxed">
            {{ locale === 'fr'
              ? 'Du mardi au samedi. Midi & soir. Privatisation disponible sur demande.'
              : 'Tuesday to Saturday. Lunch & dinner. Private dining available on request.' }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
          <UButton
            to="/reservation"
            size="lg"
            class="shadow-glow-gold"
          >
            {{ locale === 'fr' ? 'Réserver en ligne' : 'Book online' }}
          </UButton>
          <UButton
            :to="`tel:${info.phone}`"
            size="lg"
            variant="outline"
            color="neutral"
            class="border-stone-600 text-stone-300 hover:border-gold-500 hover:text-gold-400"
          >
            <UIcon name="i-lucide-phone" class="size-4 mr-2" />
            {{ info.phone }}
          </UButton>
        </div>

      </div>
    </div>
  </section>
</template>
