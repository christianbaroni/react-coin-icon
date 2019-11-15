import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgTomo = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#1A1F36" />
      <Path
        d="M18.525 14.464a.548.548 0 00.048-1.094h-3.84v-.96a.634.634 0 00-1.22 0v.96h-1.027a.547.547 0 100 1.094h1.028v3.34a3.187 3.187 0 003.177 3.169 3.11 3.11 0 001.92-.701l.23-.192a.643.643 0 10-.844-.96l-.173.144a1.843 1.843 0 01-1.997.23 1.92 1.92 0 01-1.094-1.728v-3.302h3.792zm6.24 3.725a.48.48 0 00-.375-.567h-.24a.47.47 0 00-.46.365 7.488 7.488 0 11-14.132-4.733 6.845 6.845 0 013.706-3.705 7.546 7.546 0 019.331 2.669.48.48 0 00.653.134l.086-.058a.518.518 0 00.164-.71A8.64 8.64 0 0013.37 8.33a8.102 8.102 0 00-4.992 4.924 8.582 8.582 0 1016.387 4.935zM16.874 4.95h-.96A11.443 11.443 0 005.41 19.59a.547.547 0 00.682.365h.077a.547.547 0 00.288-.643 10.349 10.349 0 117.68 7.2.518.518 0 00-.519.192.557.557 0 00.317.893A11.434 11.434 0 1016.874 4.95z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgTomo;