<script setup lang="ts">
const { locale } = useLang()
const { info } = useRestaurant()

useSeoMeta({
  title: computed(() => locale.value === 'fr' ? 'Réservation — BRAISE' : 'Reservation — BRAISE'),
  description: computed(() => info.value.description)
})
</script>

<template>
  <div class="min-h-screen">

    <div class="max-w-7xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

        <!-- Colonne gauche — Informations -->
        <div class="lg:col-span-2 space-y-10">
          <div>
            <div class="flex items-center gap-4 mb-6 enter-fade">
              <span class="gold-line" />
              <span class="text-label text-primary-500">
                {{ locale === 'fr' ? 'Réservation' : 'Reservation' }}
              </span>
            </div>
            <h1
              class="text-display-lg mb-4 enter-fade-delay"
              style="font-family: var(--font-display);"
            >
              {{ locale === 'fr' ? 'Votre table\nvous attend.' : 'Your table\nawaits.' }}
            </h1>
            <p class="text-sm text-muted leading-relaxed enter-fade-slow">
              {{ locale === 'fr'
                ? 'Réservez en ligne ou appelez-nous directement. Nous vous confirmerons par email.'
                : 'Book online or call us directly. We will confirm by email.' }}
            </p>
          </div>

          <!-- Horaires -->
          <div class="reveal space-y-4">
            <p class="text-label text-primary-500">
              {{ locale === 'fr' ? 'Horaires' : 'Opening hours' }}
            </p>
            <div class="space-y-3">
              <div
                v-for="(slot, i) in info.hours"
                :key="i"
                class="flex justify-between items-baseline text-sm"
              >
                <span class="text-muted">{{ slot.days }}</span>
                <span
                  class="font-mono text-xs"
                  :class="slot.hours === '—' ? 'text-dimmed' : 'text-primary-500'"
                >
                  {{ slot.hours }}
                </span>
              </div>
            </div>
          </div>

          <!-- Adresse + Contact -->
          <div class="reveal space-y-4">
            <p class="text-label text-primary-500">
              {{ locale === 'fr' ? 'Nous trouver' : 'Find us' }}
            </p>
            <div class="space-y-2 text-sm text-muted">
              <div class="flex items-start gap-3">
                <UIcon name="i-lucide-map-pin" class="size-4 text-primary-500 mt-0.5 shrink-0" />
                <span>{{ info.address }}<br>{{ info.city }}</span>
              </div>
              <a
                :href="`tel:${info.phone}`"
                class="flex items-center gap-3 transition-colors hover:text-primary-500"
              >
                <UIcon name="i-lucide-phone" class="size-4 text-primary-500 shrink-0" />
                {{ info.phone }}
              </a>
              <a
                :href="`mailto:${info.email}`"
                class="flex items-center gap-3 transition-colors hover:text-primary-500"
              >
                <UIcon name="i-lucide-mail" class="size-4 text-primary-500 shrink-0" />
                {{ info.email }}
              </a>
            </div>
          </div>

          <!-- Note privatisation -->
          <div class="rounded-card p-5 border border-default bg-elevated reveal">
            <div class="flex items-start gap-3">
              <UIcon name="i-lucide-info" class="size-4 text-primary-500 mt-0.5 shrink-0" />
              <p class="text-sm text-muted leading-relaxed">
                {{ locale === 'fr'
                  ? 'Pour les groupes de 9 personnes et plus ou une privatisation, contactez-nous directement.'
                  : 'For groups of 9 or more or private events, please contact us directly.' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Colonne droite — Formulaire -->
        <div class="lg:col-span-3 reveal-right">
          <div class="rounded-loose p-8 lg:p-10 border border-default bg-default shadow-card">
            <FormReservation />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
