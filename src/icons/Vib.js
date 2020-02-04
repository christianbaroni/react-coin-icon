import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgVib(props) {
  return (
    <Svg height={40} width={40} viewBox="0 0 32 32" {...props}>
      <G fill="none">
        <Circle cx={16} cy={16} fill="#ff1f43" r={16} />
        <Path d="M7 7h4.2l7.2 12.775V7H22v18h-4.8z" fill="#fff" />
      </G>
    </Svg>
  );
}

const MemoSvgVib = React.memo(SvgVib);
export default MemoSvgVib;
