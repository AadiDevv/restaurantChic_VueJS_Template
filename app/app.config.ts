export default defineAppConfig({
  ui: {

    /* ══════════════════════════════════════════════════════
       COULEURS — Mapping sémantique → palette
       primary   = 'gold'   → --color-gold-* défini dans main.css
       neutral   = 'stone'  → Tailwind built-in (chaud, non-froid)
       ══════════════════════════════════════════════════════ */
    colors: {
      primary:   'amber',     /* ← palette custom main.css           */
      secondary: 'stone',    /* ← Tailwind built-in, ton chaud      */
      success:   'emerald',
      warning:   'amber',
      error:     'red',
      neutral:   'stone'
    },

    /* ══════════════════════════════════════════════════════
       BUTTON — Défauts globaux
       ══════════════════════════════════════════════════════ */
    button: {
      defaultVariants: {
        size:    'md',
        color:   'primary',
        variant: 'solid'
      }
    },

    /* ══════════════════════════════════════════════════════
       BADGE — Défauts globaux
       ══════════════════════════════════════════════════════ */
    badge: {
      defaultVariants: {
        variant: 'subtle',
        size:    'sm'
      }
    },

    /* ══════════════════════════════════════════════════════
       CARD — Ombres restaurant depuis main.css
       shadow-card       → --shadow-card
       shadow-card-hover → --shadow-card-hover
       ══════════════════════════════════════════════════════ */
    card: {
      slots: {
        root: 'shadow-card hover:shadow-card-hover transition-shadow duration-300'
      }
    },

    /* ══════════════════════════════════════════════════════
       INPUT / FORM — Cohérence visuelle dark
       ══════════════════════════════════════════════════════ */
    input: {
      defaultVariants: {
        size:    'md',
        variant: 'outline',
        color:   'primary'
      }
    },

    select: {
      defaultVariants: {
        size:    'md',
        variant: 'outline',
        color:   'primary'
      }
    },

    textarea: {
      defaultVariants: {
        size:    'md',
        variant: 'outline',
        color:   'primary'
      }
    }

  }
})
