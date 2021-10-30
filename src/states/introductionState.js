import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const introductionState = atom({
  key: 'introductionState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

export const useIntroductionState = () => {
  return useRecoilState(introductionState)
}

export const useIntroductionValue = () => {
  return useRecoilValue(introductionState)
}

export const useSetIntroductionState = () => {
  return useSetRecoilState(introductionState)
}
