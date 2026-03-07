<script setup lang="ts">
const { locale } = useLang()
const { info } = useRestaurant()

useSeoMeta({
  title: computed(() => locale.value === 'fr' ? 'Le Restaurant — BRAISE' : 'About — BRAISE'),
  description: computed(() => info.value.description)
})
</script>

<template>
  <div class="min-h-screen">

    <!-- Hero about -->
    <div class="py-32 relative overflow-hidden bg-muted">
      <div
        class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse 60% 50% at 30% 50%, rgb(201 147 58 / 0.06) 0%, transparent 65%);"
      />
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="max-w-2xl">
          <div class="flex items-center gap-4 mb-8 enter-fade">
            <span class="gold-line" />
            <span class="text-label text-primary-500">
              {{ locale === 'fr' ? 'Notre histoire' : 'Our story' }}
            </span>
          </div>
          <h1
            class="text-display-xl mb-6 enter-fade-delay"
            style="font-family: var(--font-display);"
          >
            {{ locale === 'fr' ? 'BRAISE' : 'BRAISE' }}
          </h1>
          <p class="text-lg text-toned leading-relaxed enter-fade-slow">
            {{ info.tagline }}
          </p>
        </div>
      </div>
    </div>

    <!-- Philosophie -->
    <section class="py-24 max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <p class="text-label text-primary-500 reveal">
            {{ locale === 'fr' ? 'Philosophie' : 'Philosophy' }}
          </p>
          <p class="text-lg text-toned leading-9 reveal">
            {{ info.philosophy }}
          </p>
        </div>
        <div
          class="rounded-loose aspect-[4/3] reveal-scale flex items-center justify-center"
          style="background: linear-gradient(135deg, var(--color-carbon-900) 0%, #1c1005 100%);"
        >
          <UIcon name="i-lucide-flame" class="size-16 text-primary-500/30 animate-float" />
        </div>
      </div>
    </section>

    <!-- Chef -->
    <section class="py-24 border-t border-default bg-muted">
      <div class="max-w-7xl mx-auto px-6">
        <SectionChef />
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 max-w-7xl mx-auto px-6">
      <SectionReservationCta />
    </section>

  </div>
</template>
