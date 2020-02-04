import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgNxs(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle cx={16} cy={16} r={16} fill="#4099CD" />
        <Path
          fill="#FFF"
          d="M2.005 23.76c.605-1.764 1.771-3.674 3.395-5.56a2 2 0 012.788-2.81 34.973 34.973 0 014.104-3.109c6.934-4.503 14.262-5.94 17.836-3.798a15.9 15.9 0 011.821 6.236c-1.154 3.778-4.966 8.292-10.398 11.82-3.747 2.433-7.61 3.972-10.933 4.533a16.052 16.052 0 01-8.613-7.312zm3.75-5.195c-2.344 2.708-3.283 5.494-2.147 7.244 1.716 2.643 7.52 1.92 12.961-1.613 5.442-3.534 8.462-8.542 6.746-11.185-1.717-2.643-7.52-1.92-12.962 1.613-.603.392-1.177.802-1.717 1.225a2 2 0 01-2.881 2.716z"
        />
      </G>
    </Svg>
  );
}

const MemoSvgNxs = React.memo(SvgNxs);
export default MemoSvgNxs;
