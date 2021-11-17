import { useRouter } from 'next/router'

export const localeMap = {
  ko: 'korean',
  en: 'english',
}

export const useLocale = () => {
  const { locale } = useRouter()

  return localeMap[locale]
}
