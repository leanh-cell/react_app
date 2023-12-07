import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function IconClose({size = 25, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      width={size}
      height={size}>
      <Path
        fill={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12" 
      />
    </Svg>
  );
}
