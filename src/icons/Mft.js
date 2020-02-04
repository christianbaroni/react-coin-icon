import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgMft(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none">
        <Circle fill="#DA1157" cx={16} cy={16} r={16} />
        <Path
          d="M20.985 19.168a3.026 3.026 0 100-6.052 3.026 3.026 0 000 6.052zm0-10.005a6.98 6.98 0 11-5.003 11.843 6.955 6.955 0 001.977-4.864 6.954 6.954 0 00-1.977-4.864 6.957 6.957 0 015.003-2.115zM10.98 19.168a3.026 3.026 0 100-6.052 3.026 3.026 0 000 6.052zm5.003-7.89a6.955 6.955 0 00-1.976 4.864c0 1.892.754 3.607 1.976 4.864a6.98 6.98 0 110-9.728zm-1.977 4.865c0 1.892.754 3.607 1.977 4.864a6.954 6.954 0 001.976-4.864 6.954 6.954 0 00-1.976-4.864 6.954 6.954 0 00-1.977 4.864z"
          fill="#FFF"
        />
      </G>
    </Svg>
  );
}

const MemoSvgMft = React.memo(SvgMft);
export default MemoSvgMft;
