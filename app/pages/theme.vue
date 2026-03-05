<script setup lang="ts">
useSeoMeta({ title: 'Theme Playground' })
</script>

<template>
  <UContainer class="py-12 space-y-16">

    <div class="text-center space-y-2">
      <h1 class="text-3xl font-bold">Theme Playground</h1>
      <p class="text-neutral-500 dark:text-neutral-400">
        Modifie <code class="font-mono text-sm">main.css</code> et <code class="font-mono text-sm">app.config.ts</code> — les effets apparaissent ici en direct.
      </p>
    </div>

    <USeparator />

    <!-- ─────────────────────────────────────────────────────
         COULEURS SÉMANTIQUES
         Source : app.config.ts → colors.*
         Ces classes (bg-primary-*, bg-secondary-*…) sont
         générées par Nuxt UI à partir de ton app.config.ts.
         Change primary: 'green' → 'blue' et recharge.
    ───────────────────────────────────────────────────────── -->
    <section class="space-y-6">
      <h2 class="text-xl font-semibold">
        Couleurs — <code class="font-mono text-sm font-normal text-neutral-400">app.config.ts → colors.*</code>
      </h2>

      <div class="space-y-1">
        <p class="font-mono text-xs text-neutral-400">primary</p>
        <div class="flex gap-1 h-10">
          <div class="flex-1 rounded bg-primary-100" />
          <div class="flex-1 rounded bg-primary-200" />
          <div class="flex-1 rounded bg-primary-300" />
          <div class="flex-1 rounded bg-primary-400" />
          <div class="flex-1 rounded bg-primary-500" />
          <div class="flex-1 rounded bg-primary-600" />
          <div class="flex-1 rounded bg-primary-700" />
          <div class="flex-1 rounded bg-primary-800" />
          <div class="flex-1 rounded bg-primary-900" />
        </div>
      </div>

      <div class="space-y-1">
        <p class="font-mono text-xs text-neutral-400">secondary</p>
        <div class="flex gap-1 h-10">
          <div class="flex-1 rounded bg-secondary-100" />
          <div class="flex-1 rounded bg-secondary-200" />
          <div class="flex-1 rounded bg-secondary-300" />
          <div class="flex-1 rounded bg-secondary-400" />
          <div class="flex-1 rounded bg-secondary-500" />
          <div class="flex-1 rounded bg-secondary-600" />
          <div class="flex-1 rounded bg-secondary-700" />
          <div class="flex-1 rounded bg-secondary-800" />
          <div class="flex-1 rounded bg-secondary-900" />
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="space-y-1">
          <p class="font-mono text-xs text-neutral-400">success</p>
          <div class="flex gap-0.5 h-8">
            <div class="flex-1 rounded bg-success-300" />
            <div class="flex-1 rounded bg-success-500" />
            <div class="flex-1 rounded bg-success-700" />
          </div>
        </div>
        <div class="space-y-1">
          <p class="font-mono text-xs text-neutral-400">warning</p>
          <div class="flex gap-0.5 h-8">
            <div class="flex-1 rounded bg-warning-300" />
            <div class="flex-1 rounded bg-warning-500" />
            <div class="flex-1 rounded bg-warning-700" />
          </div>
        </div>
        <div class="space-y-1">
          <p class="font-mono text-xs text-neutral-400">error</p>
          <div class="flex gap-0.5 h-8">
            <div class="flex-1 rounded bg-error-300" />
            <div class="flex-1 rounded bg-error-500" />
            <div class="flex-1 rounded bg-error-700" />
          </div>
        </div>
        <div class="space-y-1">
          <p class="font-mono text-xs text-neutral-400">neutral</p>
          <div class="flex gap-0.5 h-8">
            <div class="flex-1 rounded bg-neutral-300" />
            <div class="flex-1 rounded bg-neutral-500" />
            <div class="flex-1 rounded bg-neutral-700" />
          </div>
        </div>
      </div>
    </section>

    <USeparator />

    <!-- ─────────────────────────────────────────────────────
         BOUTONS
         Source : app.config.ts → ui.button.defaultVariants
         Change variant: 'outline' → tous les boutons du site
         basculent en outline sans toucher au template.
    ───────────────────────────────────────────────────────── -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">
        Boutons — <code class="font-mono text-sm font-normal text-neutral-400">app.config.ts → ui.button</code>
      </h2>

      <div class="flex flex-wrap gap-2">
        <UButton color="primary" variant="solid" label="primary solid" />
        <UButton color="primary" variant="outline" label="primary outline" />
        <UButton color="primary" variant="soft" label="primary soft" />
        <UButton color="primary" variant="ghost" label="primary ghost" />
      </div>

      <div class="flex flex-wrap gap-2">
        <UButton color="secondary" variant="solid" label="secondary solid" />
        <UButton color="secondary" variant="outline" label="secondary outline" />
        <UButton color="secondary" variant="soft" label="secondary soft" />
        <UButton color="secondary" variant="ghost" label="secondary ghost" />
      </div>

      <div class="flex flex-wrap gap-2">
        <UButton color="success" variant="solid" label="success" />
        <UButton color="warning" variant="solid" label="warning" />
        <UButton color="error" variant="solid" label="error" />
        <UButton color="neutral" variant="solid" label="neutral" />
      </div>
    </section>

    <USeparator />

    <!-- ─────────────────────────────────────────────────────
         BADGES
         Source : app.config.ts → ui.badge.defaultVariants
    ───────────────────────────────────────────────────────── -->
    <section class="space-y-3">
      <h2 class="text-xl font-semibold">
        Badges — <code class="font-mono text-sm font-normal text-neutral-400">app.config.ts → ui.badge</code>
      </h2>

      <div class="flex flex-wrap gap-2">
        <UBadge color="primary" variant="solid" label="primary solid" />
        <UBadge color="primary" variant="subtle" label="primary subtle" />
        <UBadge color="primary" variant="outline" label="primary outline" />
        <UBadge color="secondary" variant="solid" label="secondary solid" />
        <UBadge color="secondary" variant="subtle" label="secondary subtle" />
        <UBadge color="success" variant="subtle" label="success" />
        <UBadge color="warning" variant="subtle" label="warning" />
        <UBadge color="error" variant="subtle" label="error" />
      </div>
    </section>

    <USeparator />

    <!-- ─────────────────────────────────────────────────────
         TOKENS @THEME
         Source : main.css → @theme static { ... }
         Chaque variable --xxx génère une classe Tailwind.
         Ex: --radius-card → rounded-card
             --shadow-glow-primary → shadow-glow-primary
             --spacing-18 → w-18 / p-18 / m-18 ...
    ───────────────────────────────────────────────────────── -->
    <section class="space-y-8">
      <h2 class="text-xl font-semibold">
        Tokens @theme — <code class="font-mono text-sm font-normal text-neutral-400">main.css</code>
      </h2>

      <!-- --radius-card / --radius-pill -->
      <div class="space-y-2">
        <p class="font-mono text-xs text-neutral-400">--radius-card → rounded-card &nbsp;|&nbsp; --radius-pill → rounded-pill</p>
        <div class="flex gap-4 items-end">
          <div class="flex flex-col items-center gap-1">
            <div class="size-16 bg-primary-200 dark:bg-primary-900 rounded-none" />
            <code class="font-mono text-xs text-neutral-400">none</code>
          </div>
          <div class="flex flex-col items-center gap-1">
            <div class="size-16 bg-primary-200 dark:bg-primary-900 rounded-card" />
            <code class="font-mono text-xs text-neutral-400">card</code>
          </div>
          <div class="flex flex-col items-center gap-1">
            <div class="size-16 bg-primary-200 dark:bg-primary-900 rounded-pill" />
            <code class="font-mono text-xs text-neutral-400">pill</code>
          </div>
          <div class="flex flex-col items-center gap-1">
            <div class="size-16 bg-primary-200 dark:bg-primary-900 rounded-full" />
            <code class="font-mono text-xs text-neutral-400">full (TW)</code>
          </div>
        </div>
      </div>

      <!-- --shadow-* -->
      <div class="space-y-2">
        <p class="font-mono text-xs text-neutral-400">--shadow-glow-primary / --shadow-glow-secondary / --shadow-card / --shadow-card-hover</p>
        <div class="flex flex-wrap gap-6">
          <div class="flex flex-col items-center gap-2">
            <div class="size-20 rounded-card bg-white dark:bg-neutral-900 shadow-glow-primary" />
            <code class="font-mono text-xs text-neutral-400">glow-primary</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="size-20 rounded-card bg-white dark:bg-neutral-900 shadow-glow-secondary" />
            <code class="font-mono text-xs text-neutral-400">glow-secondary</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="size-20 rounded-card bg-white dark:bg-neutral-900 shadow-card" />
            <code class="font-mono text-xs text-neutral-400">card</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="size-20 rounded-card bg-white dark:bg-neutral-900 shadow-card-hover" />
            <code class="font-mono text-xs text-neutral-400">card-hover</code>
          </div>
        </div>
      </div>

      <!-- --font-sans / --font-mono -->
      <div class="space-y-1">
        <p class="font-mono text-xs text-neutral-400">--font-sans / --font-mono</p>
        <p class="font-sans text-lg">font-sans — The quick brown fox 0123456789</p>
        <p class="font-mono text-lg">font-mono — const x = &#123; primary: 'green' &#125;</p>
      </div>

      <!-- --spacing-18 / --spacing-22 -->
      <div class="space-y-2">
        <p class="font-mono text-xs text-neutral-400">--spacing-18 → w-18 &nbsp;|&nbsp; --spacing-22 → w-22</p>
        <div class="space-y-1.5">
          <div class="flex items-center gap-3">
            <div class="h-4 rounded bg-primary-400 w-18" />
            <code class="font-mono text-xs text-neutral-400">w-18 → 4.5rem (custom)</code>
          </div>
          <div class="flex items-center gap-3">
            <div class="h-4 rounded bg-secondary-400 w-22" />
            <code class="font-mono text-xs text-neutral-400">w-22 → 5.5rem (custom)</code>
          </div>
          <div class="flex items-center gap-3">
            <div class="h-4 rounded bg-neutral-300 dark:bg-neutral-600 w-24" />
            <code class="font-mono text-xs text-neutral-400">w-24 → 6rem (Tailwind built-in)</code>
          </div>
        </div>
      </div>

      <!-- .animate-float -->
      <div class="space-y-2">
        <p class="font-mono text-xs text-neutral-400">.animate-float (keyframe défini dans main.css)</p>
        <div class="flex gap-6 items-center p-8 rounded-card bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <div class="animate-float size-12 rounded-card bg-primary-400 shadow-glow-primary" />
          <div class="animate-float size-12 rounded-card bg-secondary-400 shadow-glow-secondary" style="animation-delay: -2s" />
        </div>
      </div>
    </section>

    <USeparator />

    <!-- ─────────────────────────────────────────────────────
         CARDS
         Source : app.config.ts → ui.card.slots.root
         shadow-card et shadow-card-hover viennent du @theme
         et sont injectées globalement dans toutes les UCard.
         Survole pour voir shadow-card-hover.
    ───────────────────────────────────────────────────────── -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">
        Cards — <code class="font-mono text-sm font-normal text-neutral-400">app.config.ts → ui.card.slots.root</code>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UCard>
          <template #header>
            <span class="font-semibold">main.css</span>
          </template>
          Définit les tokens @theme : couleurs, ombres, radius, spacing.
          <template #footer>
            <UBadge label="@theme static" color="primary" variant="soft" size="sm" />
          </template>
        </UCard>

        <UCard>
          <template #header>
            <span class="font-semibold">app.config.ts</span>
          </template>
          Configure les composants Nuxt UI et mappe les couleurs sémantiques.
          <template #footer>
            <UBadge label="ui.colors / ui.card" color="secondary" variant="soft" size="sm" />
          </template>
        </UCard>

        <UCard>
          <template #header>
            <span class="font-semibold">Connexion</span>
          </template>
          @theme fournit les valeurs. app.config.ts les consomme via Nuxt UI.
          <template #footer>
            <UBadge label="@theme + app.config.ts" color="success" variant="soft" size="sm" />
          </template>
        </UCard>
      </div>
    </section>

  </UContainer>
</template>
