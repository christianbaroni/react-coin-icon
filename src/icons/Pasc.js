import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgPasc(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none">
        <Circle cx={16} cy={16} r={16} fill="#F7931E" />
        <Path
          d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm6 5.813a2.25 2.25 0 012.25 2.25v3.374a2.25 2.25 0 01-2.25 2.25h-2.786l-.18.844a.488.488 0 01-.454.375h-.563a.294.294 0 01-.295-.375l.18-.843h-1.313l-.18.843a.488.488 0 01-.454.375h-.563a.294.294 0 01-.295-.375l.18-.843H13.87L12.634 23.5h-3l2.192-10.313h3l-.478 2.25h5.777c.621 0 1.125-.503 1.125-1.124v-1.126c0-.62-.504-1.124-1.125-1.124H7.75l1.875-2.25h7.326l.179-.844a.488.488 0 01.454-.375h.563a.294.294 0 01.295.375l-.179.844h1.313l.179-.844a.488.488 0 01.454-.375h.563a.294.294 0 01.295.375l-.179.844H22z"
          fill="#FFF"
        />
      </G>
    </Svg>
  );
}

const MemoSvgPasc = React.memo(SvgPasc);
export default MemoSvgPasc;
