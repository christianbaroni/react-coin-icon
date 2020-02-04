import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDai(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#FEBE44"
      />
      <Path
        d="M32.406 15.935h-2.498C28.532 12.117 24.834 9.5 19.957 9.5h-8.021v6.435H9.15v2.309h2.786v2.42H9.15v2.31h2.786v6.358h8.021c4.821 0 8.491-2.597 9.902-6.358h2.547v-2.31H30.42c.05-.406.077-.827.077-1.248v-.056c0-.38-.02-.751-.056-1.116h1.972v-2.309h-.007zm-18.224-4.379h5.775c3.579 0 6.239 1.762 7.467 4.372H14.182v-4.372zm5.775 15.698h-5.775v-4.287H27.41c-1.235 2.568-3.888 4.287-7.453 4.287zm8.218-7.79c0 .408-.029.808-.085 1.194H14.182v-2.421h13.915c.05.379.078.772.078 1.172v.056z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgDai = React.memo(SvgDai);
export default MemoSvgDai;
