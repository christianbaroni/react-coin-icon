import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgIost(props) {
  return (
    <Svg height={40} width={40} viewBox="0 0 32 32" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle cx={16} cy={16} fill="#1c1c1c" r={16} />
        <Path
          d="M24.5 11v10L16 26l-8.5-5V11L16 6zm-8.768 5.407l-.79.467 1.476.862.785-.463 2.099 1.235-3.131 1.84-6.495-3.786-.027 1.843 6.526 3.79 6.27-3.687-3.674-2.162.74-.437-1.476-.862-.735.434-1.03-.606.901-.533-1.476-.863-.897.53-1.754-1.032 3.13-1.841 4.328 2.529 1.586-.938-5.917-3.438-6.27 3.688 3.329 1.959-.628.37 1.476.863.623-.368z"
          fill="#fff"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

const MemoSvgIost = React.memo(SvgIost);
export default MemoSvgIost;
