import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import useResizeAware from 'react-resize-aware'

export const windowSizeState = atom({
  key: 'windowSizeState',
  default: {
    width: 0,
    height: 0,
  },
})

// This hook should be placed in only one component!
export const useSetWindowSize = () => {
  const [resizeListener, sizes] = useResizeAware()
  const setWindowSizeState = useSetRecoilState(windowSizeState)

  useEffect(() => {
    setWindowSizeState((preSize) => ({
      ...preSize,
      ...sizes,
    }))
  }, [sizes.width, sizes.height])

  return resizeListener
}

export const useWindowSizeValue = () => {
  return useRecoilValue(windowSizeState)
}

export const useWindowSizePercent = (
  widthPercent = 100,
  HeightPercent = 100
) => {
  const { width, height } = useWindowSizeValue()

  return {
    width: parseInt((width * widthPercent) / 100),
    height: parseInt((height * HeightPercent) / 100),
  }
}
