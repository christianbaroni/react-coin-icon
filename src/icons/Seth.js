import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSeth(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#53B267"
      />
      <Path
        d="M11.379 27.634l-1.706-1.208 10.73-14.792 1.706 1.207-10.73 14.793z"
        fill="#fff"
        fillOpacity={0.5}
      />
      <Path
        d="M14.277 20.688c-2.638 0-4.777-2.113-4.777-4.72 0-2.605 2.139-4.718 4.777-4.718h7.025c.58 0 1.05.464 1.05 1.037 0 .572-.47 1.036-1.05 1.036h-7.025c-1.479 0-2.678 1.185-2.678 2.646 0 1.46 1.199 2.645 2.678 2.645h3.298c2.638 0 4.777 2.113 4.777 4.719 0 2.606-2.14 4.719-4.777 4.719h-7.026c-.58 0-1.049-.464-1.049-1.037 0-.572.47-1.037 1.05-1.037h7.025c1.479 0 2.678-1.184 2.678-2.645s-1.2-2.645-2.678-2.645h-3.298z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.098 27.549v-4.212h1.18v2.867h1.435v-2.33h1.125v2.33h1.48v-2.966h1.18v4.31h-6.4zm0-4.777v-4.964h1.18v1.81h5.22v1.344h-5.22v1.81h-1.18zm0-7.043v1.344h6.4v-1.344h-2.642v-2.491h2.642v-1.345h-6.4v1.345h2.57v2.49h-2.57z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgSeth = React.memo(SvgSeth);
export default MemoSvgSeth;
