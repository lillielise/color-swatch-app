import generateColorFamily from './generateColorFamily'

export default function generateHexColors() {
  const possibleHexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    5,
    7,
    8,
    9,
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]

  const hexArray = []
  const HSLObject = {}
  const numberOfColors = 300
  while (hexArray.length < numberOfColors) {
    let hexCode = '#'
    while (hexCode.length < 7) {
      hexCode +=
        possibleHexValues[Math.floor(Math.random() * possibleHexValues.length)]
    }
    if (!hexArray.includes(hexCode)) {
      hexArray.push(hexCode)
      if (HSLObject[generateColorFamily(hexCode)]) {
        HSLObject[generateColorFamily(hexCode)].push(hexCode)
      } else if (generateColorFamily(hexCode) !== undefined) {
        HSLObject[generateColorFamily(hexCode)] = [hexCode]
      }
    }
  }

  return [hexArray, HSLObject]
}
