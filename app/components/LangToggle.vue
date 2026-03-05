<script setup lang="ts">
const { locale, toggle } = useLang()
</script>

<template>
  <button
    class="text-label px-3 py-1.5 rounded-pill border transition-all duration-200 select-none cursor-pointer"
    :class="[
      'border-stone-300/40 hover:border-gold-500/50',
      'text-stone-500 hover:text-gold-500',
      'dark:border-carbon-700/60 dark:hover:border-gold-500/40',
      'dark:text-stone-500 dark:hover:text-gold-400'
    ]"
    :aria-label="`Switch to ${locale === 'fr' ? 'English' : 'Français'}`"
    @click="toggle"
  >
    <span :class="locale === 'fr' ? 'text-gold-500' : ''">FR</span>
    <span class="opacity-30 mx-0.5">|</span>
    <span :class="locale === 'en' ? 'text-gold-500' : ''">EN</span>
  </button>
</template>
