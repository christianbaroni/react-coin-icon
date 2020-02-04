import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGen(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#25292E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.196 19.696L13.1 18.6 11.996 19.7l1.098 1.098 1.102-1.103zm.873.873l-1.102 1.103L20 27.705l6.033-6.033-1.102-1.103L20 25.5l-4.93-4.93zm8.989-.873L20 23.754l-4.058-4.058L20 15.64l4.058 4.057zm.873-.873L20 13.893l-4.93 4.93-1.098-1.097L20 11.702l6.028 6.024-1.097 1.098zm.873.873l1.102 1.103 1.098-1.098-1.103-1.102-1.097 1.097zm1.975 1.976l1.971-1.97-1.976-1.976 1.976-1.976L20 6l-9.75 9.75 1.976 1.976-1.976 1.975 1.97 1.971-1.97 1.97L20 33.389l9.75-9.745-1.97-1.97zm-.873.873L20 29.451l-6.906-6.906-1.098 1.098L20 31.633l8.004-7.99-1.098-1.098zm-14.91-6.795l1.103 1.103L20 9.956l6.9 6.897 1.104-1.103L20 7.746l-8.004 8.004z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgGen = React.memo(SvgGen);
export default MemoSvgGen;
