import { menuItems, categories } from '~/data/menu'
import type { MenuItem, MenuCategory } from '~/types'

export function useMenu() {
  const { lang } = useLang()

  const allItems = computed<MenuItem[]>(() => menuItems)
  const allCategories = computed<MenuCategory[]>(() =>
    [...categories].sort((a, b) => a.order - b.order)
  )

  const featuredItems = computed<MenuItem[]>(() =>
    menuItems.filter(item => item.featured)
  )

  function itemsByCategory(categoryId: string): MenuItem[] {
    return menuItems.filter(item => item.category === categoryId)
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(lang.value === 'fr' ? 'fr-FR' : 'en-GB', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(price)
  }

  return { allItems, allCategories, featuredItems, itemsByCategory, formatPrice }
}
