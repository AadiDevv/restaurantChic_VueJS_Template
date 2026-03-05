import type { RestaurantInfo } from '~/types'

export const restaurant: RestaurantInfo = {
  name: 'BRAISE',
  tagline: {
    fr: 'Fusion & Feu',
    en: 'Fusion & Fire'
  },
  description: {
    fr: 'Une table où les continents se rencontrent autour de la braise.',
    en: 'A table where continents meet around the embers.'
  },
  philosophy: {
    fr: 'Chez BRAISE, chaque assiette naît d\'une conviction : la chaleur révèle l\'essentiel. Nous puisons dans les traditions culinaires d\'Asie, du Bassin méditerranéen et des Amériques pour créer une cuisine de partage, intense et sincère. Pas de frontières — seulement le feu, les produits de saison, et l\'instant.',
    en: 'At BRAISE, every dish is born from a conviction: heat reveals what matters. We draw from culinary traditions across Asia, the Mediterranean, and the Americas to create a cuisine of sharing — intense, sincere. No borders — only fire, seasonal produce, and the present moment.'
  },
  address: '14 rue des Ateliers',
  city: '75011 Paris',
  phone: '+33 1 42 00 00 00',
  email: 'contact@braise.paris',
  hours: [
    {
      days: { fr: 'Mardi — Vendredi', en: 'Tuesday — Friday' },
      hours: '12h – 14h30 / 19h – 22h30'
    },
    {
      days: { fr: 'Samedi', en: 'Saturday' },
      hours: '19h – 23h00'
    },
    {
      days: { fr: 'Dimanche & Lundi', en: 'Sunday & Monday' },
      hours: '—'
    }
  ],
  social: {
    instagram: 'https://instagram.com/braise.paris',
    facebook: 'https://facebook.com/braise.paris'
  },
  chef: {
    name: 'Léa Vernet',
    title: {
      fr: 'Chef & Co-fondatrice',
      en: 'Head Chef & Co-founder'
    },
    bio: {
      fr: 'Formée à Lyon puis à Tokyo, Léa a traversé trois continents avant de poser ses couteaux à Paris. Sa cuisine est un carnet de voyage : précise, généreuse, toujours en mouvement. Elle croit que la braise est le plus honnête des modes de cuisson — elle ne ment pas sur le produit.',
      en: 'Trained in Lyon and then Tokyo, Léa crossed three continents before setting her knives down in Paris. Her cooking is a travel journal: precise, generous, always moving. She believes the ember is the most honest cooking method — it never lies about the ingredient.'
    }
  }
}
