import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LocationIcon({size = 25, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      enableBackground="new 0 0 512 512"
      width={size}
      height={size}>
      <Path
        fill={color ?? 'red'}
        d="M468.329 358.972c-7.263-3.989-16.382-1.336-20.369 5.924-3.989 7.261-1.337 16.381 5.924 20.369C471.752 395.081 482 405.963 482 415.121c0 11.201-15.87 28.561-60.413 43.694C377.582 473.767 318.775 482 256 482s-121.582-8.233-165.587-23.185C45.87 443.683 30 426.322 30 415.121c0-9.158 10.248-20.04 28.116-29.857 7.261-3.988 9.913-13.108 5.924-20.369-3.989-7.26-13.106-9.913-20.369-5.924C23.749 369.916 0 388.542 0 415.121c0 20.374 14.012 49.422 80.762 72.1C127.794 503.2 190.028 512 256 512s128.206-8.8 175.238-24.779c66.75-22.678 80.762-51.726 80.762-72.1 0-26.579-23.749-45.205-43.671-56.149z"
      />
      <Path
        fill={color ?? 'red'}
        d="M142.752 437.13c30.45 8.602 70.669 13.34 113.248 13.34s82.798-4.737 113.248-13.34c37.253-10.523 56.142-25.757 56.142-45.275 0-19.519-18.889-34.751-56.142-45.274-8.27-2.336-17.264-4.385-26.826-6.133a2169.602 2169.602 0 01-16.323 27.708c10.584 1.588 20.521 3.535 29.545 5.834 27.416 6.983 37.432 14.844 39.491 17.866-2.06 3.023-12.074 10.884-39.49 17.866-25.949 6.609-59.335 10.379-94.498 10.716a69.731 69.731 0 01-5.147.197c-1.729 0-3.444-.071-5.148-.197-35.163-.337-68.549-4.106-94.498-10.716-27.416-6.982-37.431-14.844-39.49-17.866 2.059-3.022 12.075-10.883 39.491-17.866 9.024-2.298 18.961-4.246 29.546-5.834-5.689-9.5-11.13-18.737-16.323-27.708-9.562 1.749-18.557 3.797-26.826 6.133-37.253 10.523-56.142 25.756-56.142 45.274s18.889 34.751 56.142 45.275z"
      />
      <Path
        fill={color ?? 'red'}
        d="M256 390.634c13.353 0 25.482-6.804 32.448-18.201 48.81-79.857 106.992-185.103 106.992-232.994C395.44 62.552 332.888 0 256 0S116.56 62.552 116.56 139.439c0 47.891 58.183 153.137 106.992 232.994 6.966 11.397 19.096 18.201 32.448 18.201zm-56.047-260.769c0-30.903 25.143-56.045 56.047-56.045s56.047 25.142 56.047 56.045c0 30.904-25.143 56.046-56.047 56.046s-56.047-25.141-56.047-56.046z"
      />
    </Svg>
  );
}

export default LocationIcon;