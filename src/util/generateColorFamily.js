import hexToHSL from './hexToHSL'

export default function generateColorFamily(hexCode) {
  const colorHue = hexToHSL(hexCode)[0]
  const colorSaturation = hexToHSL(hexCode)[1]
  const colorBrightness = hexToHSL(hexCode)[2]

  let colorFamily

  if (
    ((colorHue >= 0 && colorHue <= 5) || colorHue > 340) &&
    colorSaturation > 50 &&
    colorBrightness > 20 &&
    colorBrightness < 60
  ) {
    colorFamily = 'red'
  }
  if (
    colorHue >= 50 &&
    colorHue <= 70 &&
    colorSaturation > 50 &&
    colorBrightness > 20 &&
    colorBrightness < 60
  ) {
    colorFamily = 'yellow'
  }
  if (
    colorHue >= 110 &&
    colorHue <= 130 &&
    colorSaturation > 50 &&
    colorBrightness > 20 &&
    colorBrightness < 60
  ) {
    colorFamily = 'green'
  }
  if (
    colorHue >= 170 &&
    colorHue <= 190 &&
    colorSaturation > 50 &&
    colorBrightness > 20 &&
    colorBrightness < 60
  ) {
    colorFamily = 'cyan'
  }
  if (
    colorHue >= 230 &&
    colorHue <= 250 &&
    colorSaturation > 50 &&
    colorBrightness > 20 &&
    colorBrightness < 60
  ) {
    colorFamily = 'blue'
  }
  if (
    colorHue >= 290 &&
    colorHue <= 310 &&
    colorSaturation > 50 &&
    colorBrightness > 20 &&
    colorBrightness < 60
  ) {
    colorFamily = 'magenta'
  }
  return colorFamily
}
