<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <span
    class="font-display tracking-widest select-none"
    :class="{
      'text-sm': size === 'sm',
      'text-xl': !size || size === 'md',
      'text-3xl': size === 'lg'
    }"
    style="font-family: var(--font-display); letter-spacing: 0.25em; font-weight: 300;"
  >
    <span class="text-gold-500">B</span><span>RAISE</span>
  </span>
</template>
