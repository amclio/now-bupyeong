import { createCss } from '@stitches/react'
import colors from './colors'

export const {
  styled,
  css,
  global: cssGlobal,
  keyframes,
  theme,
  getCssString,
  config,
} = createCss({
  theme: {
    colors,
  },
})

export const globalStyles = cssGlobal({
  '@font-face': [
    {
      fontFamily: 'Pretendard',
      fontWeight: 700,
      fontDisplay: 'swap',
      src: 'local("Pretendard Bold"), url("./fonts/pretendard/woff2/Pretendard-Bold.woff2") format("woff2"), url("./fonts/pretendard/woff/Pretendard-Bold.woff") format("woff")',
    },
    {
      fontFamily: 'Pretendard',
      fontWeight: 400,
      fontDisplay: 'swap',
      src: 'local("Pretendard Regular"), url("./fonts/pretendard/woff2/Pretendard-Regular.woff2") format("woff2"), url("./fonts/pretendard/woff/Pretendard-Regular.woff") format("woff")',
    },
  ],
  'html, body': {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Noto Sans JP', 'Segoe UI', 'Malgun Gothic', sans-serif;",
    cursor: 'initial',
  },
})
