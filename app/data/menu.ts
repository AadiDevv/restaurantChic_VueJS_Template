import type { MenuCategory, MenuItem } from '~/types'

export const categories: MenuCategory[] = [
  { id: 'entrees', label: { fr: 'Entrées', en: 'Starters' }, order: 1 },
  { id: 'plats', label: { fr: 'Plats', en: 'Mains' }, order: 2 },
  { id: 'desserts', label: { fr: 'Desserts', en: 'Desserts' }, order: 3 }
]

export const menuItems: MenuItem[] = [
  // ── Entrées ───────────────────────────────────────────────
  {
    id: 'e1',
    category: 'entrees',
    name: { fr: 'Tartare de thon / ponzu', en: 'Tuna tartare / ponzu' },
    description: {
      fr: 'Thon rouge, ponzu maison, huile de sésame toasté, shiso, pickles de radis.',
      en: 'Bluefin tuna, house-made ponzu, toasted sesame oil, shiso, pickled radish.'
    },
    price: 22,
    tags: ['signature', 'gluten-free'],
    featured: true
  },
  {
    id: 'e2',
    category: 'entrees',
    name: { fr: 'Aubergine braisée / tahini fumé', en: 'Braised eggplant / smoked tahini' },
    description: {
      fr: 'Aubergine cuite à la braise, crème de tahini fumée, grenade, herbes fraîches.',
      en: 'Ember-cooked eggplant, smoked tahini cream, pomegranate, fresh herbs.'
    },
    price: 18,
    tags: ['vegan', 'gluten-free'],
    featured: false
  },
  {
    id: 'e3',
    category: 'entrees',
    name: { fr: 'Gyoza de canard confit', en: 'Confit duck gyoza' },
    description: {
      fr: 'Gyoza croustillants, canard confit maison, bouillon dashi léger, huile pimentée.',
      en: 'Crispy gyoza, house-made confit duck, light dashi broth, chili oil.'
    },
    price: 20,
    tags: ['signature'],
    featured: true
  },
  {
    id: 'e4',
    category: 'entrees',
    name: { fr: 'Burrata / tomates rôties', en: 'Burrata / roasted tomatoes' },
    description: {
      fr: 'Burrata crémeuse, tomates anciennes rôties au four de braise, basilic, huile d\'olive.',
      en: 'Creamy burrata, ancient variety tomatoes roasted in the ember oven, basil, olive oil.'
    },
    price: 19,
    tags: ['vegetarian', 'gluten-free'],
    featured: false
  },

  // ── Plats ─────────────────────────────────────────────────
  {
    id: 'p1',
    category: 'plats',
    name: { fr: 'Black cod / miso blanc', en: 'Black cod / white miso' },
    description: {
      fr: 'Morue noire marinée 48h au miso blanc, légumes de saison, nage de coquillages.',
      en: 'Black cod marinated 48h in white miso, seasonal vegetables, shellfish broth.'
    },
    price: 38,
    tags: ['signature', 'gluten-free'],
    featured: true
  },
  {
    id: 'p2',
    category: 'plats',
    name: { fr: 'Côte de bœuf / chimichurri', en: 'Rib of beef / chimichurri' },
    description: {
      fr: 'Côte de bœuf Wagyu F1 à la braise, chimichurri persillé, frites de patate douce.',
      en: 'F1 Wagyu beef rib over embers, parsley chimichurri, sweet potato fries.'
    },
    price: 52,
    tags: ['gluten-free'],
    featured: true
  },
  {
    id: 'p3',
    category: 'plats',
    name: { fr: 'Risotto / truffe noire', en: 'Risotto / black truffle' },
    description: {
      fr: 'Risotto carnaroli, truffe noire râpée, parmesan 36 mois, beurre noisette.',
      en: 'Carnaroli risotto, grated black truffle, 36-month parmesan, brown butter.'
    },
    price: 44,
    tags: ['vegetarian'],
    featured: false
  },
  {
    id: 'p4',
    category: 'plats',
    name: { fr: 'Poulet fermier / mole negro', en: 'Free-range chicken / negro mole' },
    description: {
      fr: 'Demi-poulet fermier rôti à la braise, mole negro aux 23 épices, riz de Camargue.',
      en: 'Half free-range chicken roasted over embers, 23-spice negro mole, Camargue rice.'
    },
    price: 34,
    tags: ['gluten-free'],
    featured: false
  },
  {
    id: 'p5',
    category: 'plats',
    name: { fr: 'Tofu fumé / shiitake / dashi', en: 'Smoked tofu / shiitake / dashi' },
    description: {
      fr: 'Tofu maison fumé à froid, shiitake grillés, bouillon dashi végétal, huile de truffe.',
      en: 'House-made cold-smoked tofu, grilled shiitake, vegetable dashi, truffle oil.'
    },
    price: 28,
    tags: ['vegan', 'gluten-free'],
    featured: false
  },

  // ── Desserts ──────────────────────────────────────────────
  {
    id: 'd1',
    category: 'desserts',
    name: { fr: 'Panna cotta / yuzu / gingembre', en: 'Panna cotta / yuzu / ginger' },
    description: {
      fr: 'Panna cotta vanille, gelée de yuzu, tuile au gingembre confit.',
      en: 'Vanilla panna cotta, yuzu jelly, crystallized ginger tuile.'
    },
    price: 14,
    tags: ['vegetarian', 'gluten-free'],
    featured: true
  },
  {
    id: 'd2',
    category: 'desserts',
    name: { fr: 'Fondant chocolat / piment d\'Espelette', en: 'Chocolate fondant / Espelette pepper' },
    description: {
      fr: 'Fondant grand cru 70%, piment d\'Espelette, glace vanille de Madagascar.',
      en: 'Grand cru 70% fondant, Espelette pepper, Madagascar vanilla ice cream.'
    },
    price: 15,
    tags: ['signature', 'vegetarian'],
    featured: true
  },
  {
    id: 'd3',
    category: 'desserts',
    name: { fr: 'Sorbet litchi / rose / framboise', en: 'Lychee / rose / raspberry sorbet' },
    description: {
      fr: 'Sorbet litchi maison, eau de rose, coulis de framboise, tuile dentelle.',
      en: 'House-made lychee sorbet, rose water, raspberry coulis, lace tuile.'
    },
    price: 12,
    tags: ['vegan', 'gluten-free'],
    featured: false
  }
]
