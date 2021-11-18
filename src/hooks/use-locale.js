import { useRouter } from 'next/router'

export const localeMap = {
  ko: 'korean',
  en: 'english',
  ja: 'japanese',
}

const useLocale = () => {
  const { locale } = useRouter()

  return localeMap[locale]
}

export default useLocale
