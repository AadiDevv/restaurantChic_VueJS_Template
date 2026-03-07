<script setup lang="ts">
const { locale } = useLang()
const { featuredItems } = useMenu()

const preview = computed(() => featuredItems.value.slice(0, 3))
</script>

<template>
  <section class="py-28 bg-muted">
    <div class="max-w-7xl mx-auto px-6">

      <!-- En-tête section -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div class="space-y-4">
          <div class="flex items-center gap-4 reveal">
            <span class="gold-line" />
            <span class="text-label text-primary-500">
              {{ locale === 'fr' ? 'Nos signatures' : 'Our signatures' }}
            </span>
          </div>
          <h2 class="text-display-lg reveal" style="font-family: var(--font-display);">
            {{ locale === 'fr' ? 'La carte' : 'The menu' }}
          </h2>
        </div>
        <UButton
          to="/menu"
          variant="outline"
          color="neutral"
          class="reveal self-start sm:self-auto"
        >
          {{ locale === 'fr' ? 'Voir toute la carte' : 'View full menu' }}
          <UIcon name="i-lucide-arrow-right" class="size-4 ml-1" />
        </UButton>
      </div>

      <!-- Cards plats signature -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger">
        <CardMenuItem
          v-for="item in preview"
          :key="item.id"
          :item="item"
          :featured="true"
          class="rounded-loose border border-default bg-default"
        />
      </div>

    </div>
  </section>
</template>
