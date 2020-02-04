import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgBdl(props) {
  return (
    <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle cx={16} cy={16} r={16} fill="#E54C40" />
        <Path
          fill="#FFF"
          fillRule="nonzero"
          d="M9.328 8.617c-.02-.147.118-.235.197-.335a436.69 436.69 0 002.968-2.965c-.014 2.716.008 5.432-.011 8.148 2.049-1.13 4.63-1.18 6.736-.168-.002.175-.002.349-.002.525-1.681-.904-3.748-1.02-5.541-.39-2.063.71-3.707 2.457-4.35 4.536.003-3.118-.001-6.234.003-9.351zm13.39 11.662a6.652 6.652 0 01-1.897 4.405 6.697 6.697 0 01-8.503.91c-1.48-.974-2.55-2.554-2.878-4.296-.285-1.38-.092-2.845.501-4.12a6.749 6.749 0 013.268-3.252c1.884-.888 4.18-.813 6.004.192-.011 1.494-.01 2.988.001 4.482-.298-.617-.74-1.169-1.325-1.535-1.157-.747-2.765-.712-3.882.098-1.23.846-1.785 2.524-1.296 3.935.437 1.391 1.82 2.412 3.282 2.396 1.406.035 2.763-.884 3.266-2.195.32-.743.24-1.564.247-2.35.006-4.055-.01-8.11-.008-12.164.001-.51.01-1.02-.02-1.528 1.09 1.074 2.17 2.161 3.25 3.246-.022 3.925 0 7.85-.01 11.777z"
        />
      </G>
    </Svg>
  );
}

const MemoSvgBdl = React.memo(SvgBdl);
export default MemoSvgBdl;
