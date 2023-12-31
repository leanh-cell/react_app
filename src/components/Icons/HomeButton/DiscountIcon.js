import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function DiscountIcon({size = 25, color = 'black'}) {
  return (
    <Svg
      height={size}
      viewBox="0 0 508.633 508.633"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path fill={color} d="M508.633 254.316l-49.534-54.871 15.463-72.287-70.334-22.753-22.754-70.333-72.286 15.462L254.316 0l-54.871 49.534-72.287-15.462-22.752 70.333-70.333 22.752 15.462 72.287L0 254.316l49.534 54.871-15.462 72.286 70.333 22.754 22.753 70.334 72.287-15.463 54.871 49.534 54.871-49.534 72.286 15.463 22.754-70.334 70.334-22.754-15.463-72.286zm-319.317-110c24.813 0 45 20.187 45 45s-20.187 45-45 45-45-20.187-45-45 20.187-45 45-45zm-14.393 210.607L153.71 333.71l180-180 21.213 21.213zm144.393 9.393c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z" />
      <Circle fill={color} cx={319.316} cy={319.316} r={15} />
      <Circle fill={color} cx={189.316} cy={189.316} r={15} />
    </Svg>
  )
}

export default DiscountIcon
