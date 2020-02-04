import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPoa(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#5332A0"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.641 21.715h-.422v1.115c0 .216-.19.391-.423.391H7.421c-.232 0-.421-.175-.421-.391v-6.9h.013c0-.012-.013-.02-.013-.031 0-.216.189-.392.421-.392h4.22c1.863 0 3.375 1.39 3.375 3.104 0 1.714-1.512 3.104-3.375 3.104zm8.437-6.208c2.33 0 4.218 1.727 4.218 3.857s-1.888 3.857-4.218 3.857-4.218-1.727-4.218-3.857 1.888-3.857 4.218-3.857zM34 22.977c0 .132-.117.239-.261.239h-9.592c-.006 0-.01.005-.015.005-.142 0-.257-.108-.257-.24 0-.05.029-.091.057-.13l-.009-.016 4.751-7.14h.021a.245.245 0 01.48 0h.02L34 22.881l-.027.035c.007.02.027.036.027.06z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgPoa = React.memo(SvgPoa);
export default MemoSvgPoa;
