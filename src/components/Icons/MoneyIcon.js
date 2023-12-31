import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MoneyIcon({size = 25, color}) {
  return (
    <Svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill={color}
        d="M271 328.946c17.245-4.235 30-15.335 30-28.092s-12.755-23.857-30-28.092z"
      />
      <Path
        fill={color}
        d="M256 91c-90.981 0-165 74.019-165 165s74.019 165 165 165 165-74.019 165-165S346.981 91 256 91zm75 209.854c0 28.98-25.809 53.212-60 58.786V376c0 8.291-6.709 15-15 15s-15-6.709-15-15v-16.36c-34.191-5.574-60-29.806-60-58.786 0-8.291 6.709-15 15-15s15 6.709 15 15c0 12.757 12.755 23.857 30 28.092V269.64c-34.191-5.574-60-29.806-60-58.786s25.809-53.212 60-58.786v-16.214c0-8.291 6.709-15 15-15s15 6.709 15 15v16.214c34.191 5.574 60 29.806 60 58.786 0 8.291-6.709 15-15 15s-15-6.709-15-15c0-12.757-12.755-23.857-30-28.092v59.306c34.191 5.573 60 29.805 60 58.786z"
      />
      <Path
        fill={color}
        d="M241 182.761c-17.245 4.235-30 15.335-30 28.092s12.755 23.857 30 28.092z"
      />
      <Path
        fill={color}
        d="M256 0C115.39 0 0 115.39 0 256s115.39 256 256 256 256-115.39 256-256S396.61 0 256 0zm0 451c-107.52 0-195-87.48-195-195S148.48 61 256 61s195 87.48 195 195-87.48 195-195 195z"
      />
    </Svg>
  );
}

export default MoneyIcon;
