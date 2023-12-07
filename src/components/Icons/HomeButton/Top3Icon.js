import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Top3Icon({size = 25, color = 'black'}) {
  return (
    <Svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill={color}
        d="M499.513 462.037h-44.098v-281.48c0-6.885-5.602-12.487-12.487-12.487h-28.491c-4.138 0-7.492 3.354-7.492 7.492s3.354 7.492 7.492 7.492h25.994v278.983h-71.167V183.054h9.943c4.138 0 7.492-3.354 7.492-7.492s-3.354-7.492-7.492-7.492h-12.44c-6.885 0-12.487 5.602-12.487 12.487v281.481h-47.711V275.411c0-6.885-5.602-12.487-12.487-12.487H217.92c-6.885 0-12.487 5.602-12.487 12.487v186.626h-47.712V357.354c0-6.885-5.602-12.487-12.487-12.487H69.073c-6.885 0-12.487 5.602-12.487 12.487v33.505c0 4.138 3.354 7.492 7.492 7.492s7.492-3.354 7.492-7.492v-31.007h71.166v102.186H71.57V425.7c0-4.138-3.354-7.492-7.492-7.492s-7.492 3.354-7.492 7.492v36.338H12.487C5.602 462.037 0 467.639 0 474.525v23.891c0 6.885 5.602 12.487 12.487 12.487h487.026c6.885 0 12.487-5.602 12.487-12.487v-23.891c0-6.886-5.602-12.488-12.487-12.488zM220.417 277.909h71.167v184.129h-71.167zm276.598 218.01H14.985v-18.896h482.031v18.896z"
      />
      <Path
        fill={color}
        d="M62.246 275.452l-4.286 24.989c-1.195 6.968 1.616 13.877 7.335 18.032 3.232 2.348 7.013 3.542 10.819 3.542 2.93 0 5.875-.708 8.597-2.138l22.441-11.798 22.441 11.798c6.256 3.289 13.695 2.751 19.416-1.403 5.719-4.156 8.53-11.066 7.335-18.033l-4.286-24.989 18.155-17.697c5.062-4.934 6.85-12.176 4.666-18.899-2.185-6.724-7.887-11.532-14.883-12.549l-25.09-3.646-11.22-22.735c-3.129-6.34-9.464-10.277-16.534-10.277-7.069 0-13.404 3.938-16.532 10.277L79.4 222.661l-25.091 3.646c-6.996 1.017-12.698 5.824-14.883 12.549-2.184 6.724-.397 13.965 4.665 18.898zm-8.569-31.966c.2-.614.87-2.071 2.787-2.35l26.236-3.813a12.774 12.774 0 009.623-6.99l11.734-23.775c.857-1.737 2.45-1.925 3.095-1.925s2.238.187 3.096 1.925l11.734 23.774a12.774 12.774 0 009.621 6.991l26.238 3.813c1.917.279 2.587 1.736 2.787 2.35s.514 2.187-.874 3.538L140.77 265.53a12.77 12.77 0 00-3.676 11.311l4.482 26.132c.327 1.909-.852 2.998-1.374 3.377-.523.379-1.923 1.165-3.635.262l-23.468-12.338a12.773 12.773 0 00-11.894 0l-23.468 12.338c-1.715.902-3.113.117-3.635-.262-.522-.38-1.701-1.468-1.374-3.377l4.482-26.131a12.775 12.775 0 00-3.674-11.311L54.55 247.025c-1.387-1.352-1.073-2.925-.873-3.539zM211.093 184.295l-4.286 24.99c-1.195 6.967 1.615 13.876 7.334 18.031 3.232 2.348 7.013 3.541 10.82 3.541 2.93 0 5.875-.707 8.597-2.137l22.441-11.798 22.441 11.798c6.257 3.291 13.697 2.752 19.418-1.404 5.719-4.155 8.529-11.065 7.334-18.031l-4.287-24.99 18.156-17.697c5.062-4.934 6.849-12.176 4.665-18.899-2.184-6.724-7.887-11.531-14.884-12.548l-25.089-3.646-11.221-22.736c-3.129-6.339-9.464-10.277-16.533-10.277s-13.404 3.938-16.533 10.277l-11.22 22.736-25.091 3.646c-6.995 1.017-12.698 5.824-14.883 12.548-2.185 6.722-.398 13.965 4.665 18.9zm-8.57-31.966c.2-.614.87-2.07 2.787-2.349l26.24-3.813a12.777 12.777 0 009.619-6.99l11.734-23.776c.857-1.737 2.45-1.924 3.095-1.924s2.238.187 3.095 1.924l11.736 23.779a12.776 12.776 0 009.62 6.987l26.238 3.813c1.917.279 2.587 1.737 2.787 2.35.199.614.513 2.186-.874 3.538l-18.986 18.507a12.78 12.78 0 00-3.674 11.31l4.482 26.132c.327 1.909-.852 2.997-1.374 3.376-.522.378-1.922 1.166-3.636.262l-23.467-12.337a12.769 12.769 0 00-11.894-.001l-23.468 12.338c-1.716.903-3.114.116-3.635-.262-.522-.379-1.7-1.467-1.373-3.376l4.482-26.132a12.778 12.778 0 00-3.675-11.311l-18.986-18.505c-1.386-1.353-1.072-2.925-.873-3.54zM359.94 86.899l-4.286 24.989c-1.196 6.967 1.615 13.877 7.334 18.032 5.72 4.155 13.158 4.692 19.417 1.404l22.441-11.798 22.441 11.798a18.46 18.46 0 008.598 2.137c3.807 0 7.588-1.193 10.819-3.541 5.72-4.155 8.53-11.065 7.334-18.032l-4.286-24.989 18.155-17.697c5.063-4.934 6.85-12.176 4.666-18.898-2.184-6.724-7.887-11.532-14.883-12.549l-25.09-3.647-11.221-22.735c-3.129-6.339-9.464-10.277-16.533-10.277s-13.404 3.938-16.533 10.277l-11.221 22.735-25.089 3.647c-6.996 1.016-12.699 5.824-14.884 12.548-2.184 6.722-.397 13.965 4.665 18.899zm-8.569-31.965c.199-.614.869-2.071 2.787-2.35l26.235-3.813a12.768 12.768 0 009.624-6.99l11.734-23.775c.858-1.737 2.451-1.924 3.095-1.924s2.239.187 3.095 1.924l11.735 23.776a12.774 12.774 0 009.62 6.989l26.239 3.813c1.917.279 2.588 1.737 2.787 2.35.199.614.513 2.186-.874 3.538L438.461 76.98a12.783 12.783 0 00-3.674 11.31l4.482 26.131c.327 1.91-.852 2.998-1.374 3.377-.521.38-1.921 1.165-3.636.262l-23.467-12.337a12.774 12.774 0 00-11.893-.001l-23.468 12.338c-1.714.903-3.114.116-3.636-.262-.522-.38-1.7-1.467-1.374-3.377l4.482-26.129a12.778 12.778 0 00-3.674-11.313l-18.986-18.507c-1.387-1.352-1.072-2.925-.872-3.538z"
      />
    </Svg>
  );
}

export default Top3Icon;
