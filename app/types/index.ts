export type Locale = 'fr' | 'en'

export interface LocalizedString {
  fr: string
  en: string
}

export interface MenuItem {
  id: string
  category: string
  name: LocalizedString
  description: LocalizedString
  price: number
  tags: string[]
  featured: boolean
  image?: string
}

export interface MenuCategory {
  id: string
  label: LocalizedString
  order: number
}

export interface OpeningHours {
  days: LocalizedString
  hours: string
}

export interface RestaurantInfo {
  name: string
  tagline: LocalizedString
  description: LocalizedString
  philosophy: LocalizedString
  address: string
  city: string
  phone: string
  email: string
  hours: OpeningHours[]
  social: {
    instagram?: string
    facebook?: string
  }
  chef: {
    name: string
    title: LocalizedString
    bio: LocalizedString
  }
}
