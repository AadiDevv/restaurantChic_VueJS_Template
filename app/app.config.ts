export default defineAppConfig({
  ui: {

    /* ══════════════════════════════════════════════════════
       COULEURS — Mapping sémantique → palette
       Règle : les composants n'utilisent JAMAIS les couleurs
       de palette directement (gold, stone…), toujours les
       tokens sémantiques (primary, neutral, success…).

       primary  = 'gold'    → --color-gold-*   (main.css custom)
       neutral  = 'stone'   → Tailwind built-in (ton chaud, pas zinc)
       accent   = terracotta → @theme static uniquement (décoratif)
       ══════════════════════════════════════════════════════ */
    colors: {
      primary:  'gold',       /* Brand principal — CTA, prix, labels, accents   */
      accent:   'accent',     /* Terracotta — braise, terre cuite (main.css)     */
      success:  'emerald',    /* Confirmation réservation, badges disponible     */
      warning:  'amber',      /* Badges "complet", allergènes                   */
      error:    'red',        /* Validation Zod (FormReservation)               */
      info:     'sky',        /* Messages informatifs                            */
      neutral:  'stone'       /* Structure : fond, texte, borders → --ui-*      */
    },
    /* NOTE : 'accent' enregistré dans nuxt.config.ts ui.theme.colors
              → génère --ui-color-accent-* et active color="accent" sur UButton */

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
