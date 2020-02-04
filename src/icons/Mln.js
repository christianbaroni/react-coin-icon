import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMln(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#00224D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.374 28.77l-6.59-3.865 1.7-.981-.223-.388-1.677.969v-9.814l8.524 5.053v14.45l.892.556.891-.556v-14.45l8.525-5.053v9.815l-1.678-.97-.223.386 1.7.983-6.589 3.864v2.162l8.624-5.075V12.62L20 6 8.75 12.619v13.237l8.624 5.075V28.77zm-5.899-15.646l8.278-4.857v1.977h.446V8.239l8.326 4.885L20 18.177l-8.525-5.053zm8.278-1.617h.446v2.072h-.447v-2.072zm.446 3.335h-.447v2.073l.223.1.224-.101v-2.072zm6.503 8.063l-1.793-1.036-.224.386 1.795 1.038.222-.387v-.001zm-3.055-1.28l.224-.387-1.795-1.035-.197.142-.025.242 1.794 1.038zm-10.35 1.28l1.793-1.036.224.387-1.794 1.035-.224-.386zm4.625-2.703l-1.793 1.035.222.387 1.794-1.035-.023-.244-.2-.142z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgMln = React.memo(SvgMln);
export default MemoSvgMln;
