import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGno(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#00A6C4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4.75c4.101 0 8.023 1.68 10.854 4.647.372.39.724.799 1.053 1.226L20 22.532 8.098 10.626A14.998 14.998 0 0120.001 4.75zm12.832 7.226a15.005 15.005 0 01-3.11 19.196 14.996 14.996 0 01-19.443 0 15.01 15.01 0 01-3.257-18.95l.148-.25 1.176 1.176 1.243 1.249a5.513 5.513 0 00.33 7.434 5.508 5.508 0 007.273.457l.158-.127L20 24.812l2.651-2.651a5.508 5.508 0 007.432-.33 5.513 5.513 0 00.457-7.276l-.127-.158 2.42-2.42zm-2.75 5.952c0-.862-.287-1.699-.815-2.379l-5.471 5.467.15.11a3.899 3.899 0 006.137-3.198zm-19.347-2.379l5.47 5.467c-.63.488-1.393.77-2.185.81l-.2.005a3.884 3.884 0 01-3.5-2.176 3.903 3.903 0 01.415-4.106zm.044-5.02A12.883 12.883 0 0120 6.709a12.883 12.883 0 019.222 3.822l-9.222 9.221-9.222-9.221z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgGno = React.memo(SvgGno);
export default MemoSvgGno;
