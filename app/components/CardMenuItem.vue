<script setup lang="ts">
import type { MenuItem } from '~/types'

const props = defineProps<{
  item: MenuItem
  featured?: boolean
}>()

const { locale, t } = useLang()
const { formatPrice } = useMenu()

const tagLabels: Record<string, { fr: string; en: string }> = {
  signature:    { fr: 'Signature', en: 'Signature' },
  vegan:        { fr: 'Végétalien', en: 'Vegan' },
  vegetarian:   { fr: 'Végétarien', en: 'Vegetarian' },
  'gluten-free': { fr: 'Sans gluten', en: 'Gluten-free' }
}
</script>

<template>
  <article class="menu-card group p-5 reveal">
    <!-- Header -->
    <div class="flex items-start justify-between gap-4 mb-3">
      <h3
        class="text-display-md leading-tight group-hover:text-gold-500 transition-colors duration-300"
        style="font-size: clamp(1.1rem, 1.5vw, 1.4rem);"
      >
        {{ t(item.name) }}
      </h3>
      <span class="font-mono text-gold-500 font-medium shrink-0 text-base">
        {{ formatPrice(item.price) }}
      </span>
    </div>

    <!-- Description -->
    <p class="text-sm leading-relaxed text-stone-500 dark:text-stone-400 mb-4">
      {{ t(item.description) }}
    </p>

    <!-- Tags -->
    <div v-if="item.tags.length" class="flex flex-wrap gap-2">
      <span
        v-for="tag in item.tags"
        :key="tag"
        class="cuisine-tag"
      >
        {{ tagLabels[tag] ? t(tagLabels[tag]) : tag }}
      </span>
    </div>
  </article>
</template>
