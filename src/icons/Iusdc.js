import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function SvgIusdc(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="url(#iusdc_svg__paint0_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.714 31.744C10.926 29.99 7.5 25.388 7.5 20c0-5.388 3.425-9.988 8.213-11.743.298-.108.536-.47.536-.788V6.305c0-.473-.368-.74-.819-.596C9.381 7.645 5 13.312 5 20.004S9.38 32.362 15.431 34.296c.45.143.82-.124.82-.597v-1.165c0-.32-.239-.68-.537-.79zm9.768-8.769c0-2.92-1.778-3.905-5.213-4.374-2.533-.369-3.025-.962-3.025-2.146 0-1.124.857-1.921 2.514-1.921 1.498 0 2.359.524 2.714 1.727.08.27.321.46.6.46h1.315c.365 0 .65-.336.574-.695-.416-1.905-1.698-3.048-3.71-3.406v-1.99a.625.625 0 00-.626-.626h-1.251a.625.625 0 00-.625.625v1.937c-2.48.352-4.08 2-4.08 4.117 0 2.74 1.654 3.8 5.15 4.27 2.37.387 3.044.898 3.044 2.248 0 1.349-1.146 2.247-2.759 2.247-2.18 0-2.901-.955-3.165-2.19a.634.634 0 00-.613-.508h-1.425a.583.583 0 00-.578.676c.362 2.08 1.699 3.606 4.426 3.978v1.974c0 .346.279.626.625.626h1.25c.347 0 .626-.28.626-.626v-1.974c2.581-.41 4.232-2.207 4.232-4.429zM23.752 6.31c0-.473.368-.74.819-.597 6.047 1.933 10.432 7.6 10.432 14.292S30.622 32.362 24.57 34.296c-.451.143-.82-.124-.82-.597v-1.165c0-.346.21-.667.537-.787 4.788-1.756 8.213-6.356 8.213-11.743 0-5.388-3.425-9.99-8.213-11.743-.298-.108-.536-.47-.536-.787V6.309z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="iusdc_svg__paint0_linear"
          x1={40}
          y1={40}
          x2={5.4}
          y2={5.4}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.159} stopColor="#003CDA" />
          <Stop offset={1} stopColor="#33DFCC" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const MemoSvgIusdc = React.memo(SvgIusdc);
export default MemoSvgIusdc;
