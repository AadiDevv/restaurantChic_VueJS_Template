import { restaurant } from '~/data/restaurant'

export function useRestaurant() {
  const { t } = useLang()

  const info = computed(() => ({
    name: restaurant.name,
    tagline: t(restaurant.tagline),
    description: t(restaurant.description),
    philosophy: t(restaurant.philosophy),
    address: restaurant.address,
    city: restaurant.city,
    phone: restaurant.phone,
    email: restaurant.email,
    social: restaurant.social,
    hours: restaurant.hours.map(h => ({
      days: t(h.days),
      hours: h.hours
    })),
    chef: {
      name: restaurant.chef.name,
      title: t(restaurant.chef.title),
      bio: t(restaurant.chef.bio)
    }
  }))

  return { info }
}
