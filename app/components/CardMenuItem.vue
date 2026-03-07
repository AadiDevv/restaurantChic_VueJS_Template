<script setup lang="ts">
import type { MenuItem } from '~/types'

const props = defineProps<{
  item: MenuItem
  featured?: boolean
}>()

const { t } = useLang()
const { formatPrice } = useMenu()

const tagLabels: Record<string, { fr: string; en: string }> = {
  signature:     { fr: 'Signature', en: 'Signature' },
  vegan:         { fr: 'Végétalien', en: 'Vegan' },
  vegetarian:    { fr: 'Végétarien', en: 'Vegetarian' },
  'gluten-free': { fr: 'Sans gluten', en: 'Gluten-free' }
}

type BadgeColor = 'accent' | 'success' | 'neutral' | 'primary' | 'warning' | 'error' | 'info'

const tagColors: Record<string, BadgeColor> = {
  signature:     'accent',
  vegan:         'success',
  vegetarian:    'success',
  'gluten-free': 'neutral'
}
</script>

<template>
  <article class="menu-card group p-5 reveal">
    <!-- Header -->
    <div class="flex items-start justify-between gap-4 mb-3">
      <h3
        class="text-display-md leading-tight group-hover:text-primary-500 transition-colors duration-300"
        style="font-size: clamp(1.1rem, 1.5vw, 1.4rem);"
      >
        {{ t(item.name) }}
      </h3>
      <span class="font-mono text-primary-500 font-medium shrink-0 text-base">
        {{ formatPrice(item.price) }}
      </span>
    </div>

    <!-- Description -->
    <p class="text-sm leading-relaxed text-muted mb-4">
      {{ t(item.description) }}
    </p>

    <!-- Tags -->
    <div v-if="item.tags.length" class="flex flex-wrap gap-2">
      <UBadge
        v-for="tag in item.tags"
        :key="tag"
        :color="(tagColors[tag] ?? 'neutral') as BadgeColor"
        variant="subtle"
        size="sm"
      >
        {{ tagLabels[tag] ? t(tagLabels[tag]) : tag }}
      </UBadge>
    </div>
  </article>
</template>
