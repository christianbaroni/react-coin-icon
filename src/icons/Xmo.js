import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgXmo(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none">
        <Circle cx={16} cy={16} r={16} fill="#F60" />
        <G fill="#FFF">
          <Path d="M28 16c0 6.628-5.372 12-12 12S4 22.628 4 16c0-2.681.881-5.156 2.362-7.153l1.96 1.96A9.222 9.222 0 006.728 16c0 5.11 4.153 9.262 9.263 9.262 5.109 0 9.262-4.153 9.262-9.262a9.272 9.272 0 00-1.594-5.194l1.96-1.96A11.86 11.86 0 0128 16" />
          <Path d="M22.637 16A6.644 6.644 0 0116 22.637 6.644 6.644 0 019.362 16c0-1.153.3-2.287.872-3.29L16 18.474l5.766-5.766A6.644 6.644 0 0122.638 16" />
          <Path d="M23.847 6.925L16 14.762l-5.981-5.971-1.866-1.866A11.907 11.907 0 0116 4c3 0 5.738 1.097 7.847 2.925" />
        </G>
      </G>
    </Svg>
  );
}

const MemoSvgXmo = React.memo(SvgXmo);
export default MemoSvgXmo;
