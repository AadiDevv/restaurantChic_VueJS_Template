import type { Locale } from '~/types'

export function useLang() {
  const locale = useState<Locale>('app-lang', () => 'fr')

  function toggle() {
    locale.value = locale.value === 'fr' ? 'en' : 'fr'
  }

  function t(obj: { fr: string; en: string }): string {
    return obj[locale.value]
  }

  return { locale, lang: locale, toggle, t }
}
