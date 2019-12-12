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
  const colorsArray = []
  const numberOfColors = 100
  while (colorsArray.length < numberOfColors) {
    let hexCode = '#'
    while (hexCode.length < 7) {
      hexCode +=
        possibleHexValues[Math.floor(Math.random() * possibleHexValues.length)]
    }
    if (!colorsArray.includes(hexCode)) {
      colorsArray.push(hexCode)
    }
  }
  return colorsArray
}
