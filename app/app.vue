<script setup lang="ts">
const { locale, toggle } = useLang()
const { info } = useRestaurant()
const colorMode = useColorMode()
const route = useRoute()

// View Transitions API
const router = useRouter()
router.beforeEach((to, from, next) => {
  if (!document.startViewTransition) { next(); return }
  document.startViewTransition(() => { next() })
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0E0C09' }
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: computed(() => locale.value) }
})

useSeoMeta({
  title: 'BRAISE — Fusion & Fire',
  description: computed(() => info.value.description),
  ogTitle: 'BRAISE — Fusion & Fire',
  ogDescription: computed(() => info.value.description)
})

const isDark = computed(() => colorMode.value === 'dark')

const navLinks = computed(() => [
  { to: '/', label: locale.value === 'fr' ? 'Accueil' : 'Home' },
  { to: '/menu', label: locale.value === 'fr' ? 'La Carte' : 'Menu' },
  { to: '/reservation', label: locale.value === 'fr' ? 'Réserver' : 'Book' },
  { to: '/about', label: locale.value === 'fr' ? 'Le Restaurant' : 'About' }
])
</script>

<template>
  <UApp>
    <!-- ── Header ──────────────────────────────────────── -->
    <header
      class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300"
      :class="isDark
        ? 'bg-carbon-950/80 border-carbon-800/50'
        : 'bg-white/80 border-stone-200/60'"
    >
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        <NuxtLink to="/" class="shrink-0">
          <BraiseLogo />
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-label px-4 py-2 rounded-pill transition-colors duration-200"
            :class="route.path === link.to
              ? 'text-gold-500'
              : isDark
                ? 'text-stone-400 hover:text-stone-100'
                : 'text-stone-600 hover:text-stone-900'"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <LangToggle />
          <UColorModeButton variant="ghost" color="neutral" size="sm" />
          <UButton to="/reservation" size="sm" class="hidden md:flex">
            {{ locale === 'fr' ? 'Réserver' : 'Book a table' }}
          </UButton>
          <UButton variant="ghost" color="neutral" size="sm" icon="i-lucide-menu" class="md:hidden" aria-label="Menu" />
        </div>

      </div>
    </header>

    <!-- ── Content ─────────────────────────────────────── -->
    <UMain class="pt-16">
      <NuxtPage />
    </UMain>

    <!-- ── Footer ─────────────────────────────────────── -->
    <footer
      class="border-t mt-24 transition-colors duration-300"
      :class="isDark ? 'bg-carbon-950 border-carbon-800/50' : 'bg-stone-50 border-stone-200'"
    >
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div class="space-y-4">
            <BraiseLogo size="sm" />
            <p class="text-sm leading-relaxed max-w-xs text-stone-500">
              {{ info.description }}
            </p>
          </div>

          <div class="space-y-4">
            <p class="text-label text-gold-500">Navigation</p>
            <nav class="flex flex-col gap-2">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="text-sm transition-colors duration-200"
                :class="isDark ? 'text-stone-500 hover:text-stone-200' : 'text-stone-500 hover:text-stone-900'"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>
          </div>

          <div class="space-y-4">
            <p class="text-label text-gold-500">Contact</p>
            <div class="space-y-2 text-sm text-stone-500">
              <p>{{ info.address }}, {{ info.city }}</p>
              <a :href="`tel:${info.phone}`" class="block transition-colors hover:text-gold-500">{{ info.phone }}</a>
              <a :href="`mailto:${info.email}`" class="block transition-colors hover:text-gold-500">{{ info.email }}</a>
            </div>
          </div>

        </div>

        <div
          class="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          :class="isDark ? 'border-carbon-800/50' : 'border-stone-200'"
        >
          <p class="text-xs" :class="isDark ? 'text-stone-600' : 'text-stone-400'">
            © {{ new Date().getFullYear() }} BRAISE · {{ info.address }}, {{ info.city }}
          </p>
          <div class="flex items-center gap-4">
            <a
              v-if="info.social.instagram"
              :href="info.social.instagram"
              target="_blank"
              rel="noopener"
              class="transition-colors"
              :class="isDark ? 'text-stone-600 hover:text-stone-300' : 'text-stone-400 hover:text-stone-700'"
              aria-label="Instagram"
            >
              <UIcon name="i-simple-icons-instagram" class="size-4" />
            </a>
            <a
              v-if="info.social.facebook"
              :href="info.social.facebook"
              target="_blank"
              rel="noopener"
              class="transition-colors"
              :class="isDark ? 'text-stone-600 hover:text-stone-300' : 'text-stone-400 hover:text-stone-700'"
              aria-label="Facebook"
            >
              <UIcon name="i-simple-icons-facebook" class="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </UApp>
</template>
