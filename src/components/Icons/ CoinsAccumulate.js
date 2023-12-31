import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"

function CoinAccumulate() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_1270_6577)">
                <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M14.8 8.99991C14.6188 8.68567 14.3557 8.42661 14.0386 8.25047C13.7215 8.07432 13.3625 7.98771 13 7.99991H11C10.4696 7.99991 9.96086 8.21063 9.58579 8.5857C9.21071 8.96077 9 9.46948 9 9.99991C9 10.5303 9.21071 11.0391 9.58579 11.4141C9.96086 11.7892 10.4696 11.9999 11 11.9999H13C13.5304 11.9999 14.0391 12.2106 14.4142 12.5857C14.7893 12.9608 15 13.4695 15 13.9999C15 14.5303 14.7893 15.0391 14.4142 15.4141C14.0391 15.7892 13.5304 15.9999 13 15.9999H11C10.6375 16.0121 10.2785 15.9255 9.96142 15.7494C9.64435 15.5732 9.38115 15.3142 9.2 14.9999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M12 16V18M12 6V8V6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </G>
            <Defs>
                <ClipPath id="clip0_1270_6577">
                    <Rect width="24" height="24" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}
export default CoinAccumulate;