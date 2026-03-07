<script setup lang="ts">
const { locale, t } = useLang()
const { allCategories, itemsByCategory, formatPrice } = useMenu()
const { info } = useRestaurant()

const activeCategory = ref<string>('all')

const filteredCategories = computed(() =>
  allCategories.value.filter(cat =>
    activeCategory.value === 'all' || cat.id === activeCategory.value
  )
)

useSeoMeta({
  title: computed(() => locale.value === 'fr' ? 'La Carte — BRAISE' : 'Menu — BRAISE'),
  description: computed(() => info.value.description)
})
</script>

<template>
  <div class="min-h-screen">

    <!-- Hero page menu -->
    <div class="py-32 relative overflow-hidden bg-muted">
      <div
        class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse 50% 60% at 50% 0%, rgb(201 147 58 / 0.07) 0%, transparent 70%);"
      />
      <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div class="flex items-center justify-center gap-4 mb-6 enter-fade">
          <span class="gold-line" />
          <span class="text-label text-primary-500">
            {{ locale === 'fr' ? 'Cuisine fusion' : 'Fusion cuisine' }}
          </span>
          <span class="gold-line" />
        </div>
        <h1
          class="text-display-xl mb-6 enter-fade-delay"
          style="font-family: var(--font-display);"
        >
          {{ locale === 'fr' ? 'La Carte' : 'The Menu' }}
        </h1>
        <p class="text-base text-muted max-w-lg mx-auto leading-relaxed enter-fade-slow">
          {{ locale === 'fr'
            ? 'Produits de saison, cuissons à la braise, influences des quatre coins du monde.'
            : 'Seasonal produce, ember cooking, influences from the four corners of the world.' }}
        </p>
      </div>
    </div>

    <!-- Filtres catégories -->
    <div class="sticky top-16 z-30 border-b border-default bg-default/90 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
          <button
            class="text-label px-5 py-2 rounded-pill border transition-all duration-200 shrink-0 cursor-pointer"
            :class="activeCategory === 'all'
              ? 'bg-primary-500 border-primary-500 text-primary-950'
              : 'border-default text-muted hover:border-primary-500/50 hover:text-primary-500'"
            @click="activeCategory = 'all'"
          >
            {{ locale === 'fr' ? 'Tout' : 'All' }}
          </button>
          <button
            v-for="cat in allCategories"
            :key="cat.id"
            class="text-label px-5 py-2 rounded-pill border transition-all duration-200 shrink-0 cursor-pointer"
            :class="activeCategory === cat.id
              ? 'bg-primary-500 border-primary-500 text-primary-950'
              : 'border-default text-muted hover:border-primary-500/50 hover:text-primary-500'"
            @click="activeCategory = cat.id"
          >
            {{ t(cat.label) }}
          </button>
        </div>
      </div>
    </div>

    <!-- Sections par catégorie -->
    <div class="max-w-7xl mx-auto px-6 py-16 space-y-20">
      <section
        v-for="cat in filteredCategories"
        :key="cat.id"
        class="reveal"
      >
        <!-- En-tête catégorie -->
        <div class="flex items-center gap-6 mb-10">
          <h2
            class="text-display-md shrink-0"
            style="font-family: var(--font-display);"
          >
            {{ t(cat.label) }}
          </h2>
          <div class="flex-1 h-px bg-accented" />
        </div>

        <!-- Grille plats -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 reveal-stagger">
          <CardMenuItem
            v-for="item in itemsByCategory(cat.id)"
            :key="item.id"
            :item="item"
            class="bg-muted"
          />
        </div>
      </section>
    </div>

    <!-- Informations pratiques -->
    <div class="border-t border-default bg-muted py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="editorial-divider mb-10">
          <span class="text-label text-primary-500 px-4">
            {{ locale === 'fr' ? 'Informations' : 'Information' }}
          </span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <UIcon
              name="i-lucide-leaf"
              class="size-5 text-primary-500 mx-auto mb-3"
            />
            <p class="text-sm font-medium mb-1">
              {{ locale === 'fr' ? 'Produits de saison' : 'Seasonal produce' }}
            </p>
            <p class="text-xs text-dimmed">
              {{ locale === 'fr'
                ? 'La carte évolue chaque semaine'
                : 'The menu changes weekly' }}
            </p>
          </div>
          <div>
            <UIcon
              name="i-lucide-wheat-off"
              class="size-5 text-primary-500 mx-auto mb-3"
            />
            <p class="text-sm font-medium mb-1">
              {{ locale === 'fr' ? 'Allergènes' : 'Allergens' }}
            </p>
            <p class="text-xs text-dimmed">
              {{ locale === 'fr'
                ? 'Mentionnez vos allergies à la réservation'
                : 'Please mention allergies when booking' }}
            </p>
          </div>
          <div>
            <UIcon
              name="i-lucide-wine"
              class="size-5 text-primary-500 mx-auto mb-3"
            />
            <p class="text-sm font-medium mb-1">
              {{ locale === 'fr' ? 'Accords vins' : 'Wine pairings' }}
            </p>
            <p class="text-xs text-dimmed">
              {{ locale === 'fr'
                ? 'Notre sommelier vous guide'
                : 'Our sommelier will guide you' }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
