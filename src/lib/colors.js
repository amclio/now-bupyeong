/*
  Create color set with Open-Color
*/

import openColor from 'open-color'

const colorSet = {}

Object.keys(openColor).forEach((key) => {
  if (typeof openColor[key] !== 'string') {
    openColor[key].forEach((colorHex, idx) => {
      colorSet[key + idx] = colorHex
    })
    return
  }

  if (typeof openColor[key] === 'string') {
    colorSet[key] = openColor[key]
    return
  }
})

export default colorSet
