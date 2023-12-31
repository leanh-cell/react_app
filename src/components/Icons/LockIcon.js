import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LockIcon({size = 25, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      enableBackground="new 0 0 512 512">
      <Path
        fill={color ?? 'black'}
        d="M400 188h-36.037v-82.23c0-58.322-48.449-105.77-108-105.77s-108 47.448-108 105.77V188H112c-33.084 0-60 26.916-60 60v204c0 33.084 26.916 60 60 60h288c33.084 0 60-26.916 60-60V248c0-33.084-26.916-60-60-60zm-212.037-82.23c0-36.266 30.505-65.77 68-65.77s68 29.504 68 65.77V188h-136v-82.23zM420 452c0 11.028-8.972 20-20 20H112c-11.028 0-20-8.972-20-20V248c0-11.028 8.972-20 20-20h288c11.028 0 20 8.972 20 20v204z"
      />
      <Path
        fill={color ?? 'black'}
        d="M256 286c-20.435 0-37 16.565-37 37 0 13.048 6.76 24.51 16.963 31.098V398c0 11.045 8.954 20 20 20 11.045 0 20-8.955 20-20v-43.855C286.207 347.565 293 336.08 293 323c0-20.435-16.565-37-37-37z"
      />
    </Svg>
  );
}

export default LockIcon;
