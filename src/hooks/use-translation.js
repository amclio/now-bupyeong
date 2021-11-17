import { useRouter } from 'next/router'
import * as translations from '../configs/translations'

const useTranslation = () => {
  const { locale } = useRouter()

  return translations[locale]
}

export default useTranslation
