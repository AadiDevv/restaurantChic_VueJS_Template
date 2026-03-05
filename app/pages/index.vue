<script setup lang="ts">
const { info } = useRestaurant()
const { locale } = useLang()

useSeoMeta({
  title: computed(() => `BRAISE — ${info.value.tagline}`),
  description: computed(() => info.value.description)
})
</script>

<template>
  <div>
    <SectionHero />
    <SectionSignature />
    <SectionMenuPreview />
    <SectionChef />
    <SectionReservationCta />
  </div>
</template>
