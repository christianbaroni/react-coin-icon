import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgEmc(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle cx={16} cy={16} r={16} fill="#B49FFC" />
        <Path
          fill="#FFF"
          d="M8 8v3.2h6.4v3.2H8v3.2h9.6v-6.4h3.2v9.6H8V24h16V8z"
        />
      </G>
    </Svg>
  );
}

const MemoSvgEmc = React.memo(SvgEmc);
export default MemoSvgEmc;
