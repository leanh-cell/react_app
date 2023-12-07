import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Coin({ size = 25 }) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G opacity="0.4">
                <Path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M12 7.5V16.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </G>
            <Path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M17 3V7H21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M22 2L17 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    );
}
export default Coin;