import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export const sectionOpenState = atom({
  key: 'sectionOpenState',
  default: false,
})

export const useSectionOpenState = () => {
  return useRecoilState(sectionOpenState)
}

export const useSectionOpenValue = () => {
  return useRecoilValue(sectionOpenState)
}

export const useSetSectionOpenState = () => {
  return useSetRecoilState(sectionOpenState)
}
