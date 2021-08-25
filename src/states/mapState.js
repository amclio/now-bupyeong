import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export const mapState = atom({ key: 'kakaoMapState', default: null })

export const useMapState = () => {
  return useRecoilState(mapState)
}

export const useMapValue = () => {
  return useRecoilValue(mapState)
}

export const useSetMapState = () => {
  return useSetRecoilState(mapState)
}
