import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRlc(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#FED044"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.723 11.312a3.212 3.212 0 11-6.423 0 3.212 3.212 0 016.423 0zm-3.211 11.386a3.224 3.224 0 01-3.176-3.284c.037-1.606 1.205-2.956 2.81-3.139.055 0 .12-.009.183-.018.064-.01.128-.018.183-.018.62 0 1.204.182 1.715.51.183.11.401.183.62.183.22 0 .438-.073.657-.182.402-.22.62-.657.584-1.132-.11-1.752 1.168-3.284 2.92-3.43h.329c1.788 0 3.211 1.46 3.211 3.248 0 1.606-1.204 2.956-2.81 3.175-.055 0-.119.01-.183.018-.063.01-.127.018-.182.018a3.15 3.15 0 01-1.715-.51 1.23 1.23 0 00-.62-.183c-.22 0-.439.073-.658.183-.401.218-.62.656-.584 1.13v.512c-.146 1.533-1.35 2.774-2.883 2.92-.067 0-.125.004-.176.009-.087.008-.156.014-.225-.01zm0 8.176c-1.789 0-3.212-1.46-3.212-3.248 0-1.606 1.204-2.957 2.81-3.176.055 0 .119-.009.183-.018s.127-.018.182-.018c.62 0 1.205.182 1.716.51.182.11.401.183.62.183.219 0 .438-.073.657-.182.401-.22.62-.657.584-1.132-.11-1.715 1.131-3.248 2.846-3.43.051 0 .102-.008.157-.017.063-.01.13-.02.209-.02.62 0 1.204.183 1.715.511.182.11.401.183.62.183.22 0 .438-.073.657-.183a1.14 1.14 0 00.584-1.095c-.11-1.752 1.168-3.284 2.92-3.43h.328c1.789 0 3.212 1.46 3.212 3.248 0 1.606-1.204 2.956-2.81 3.175-.055 0-.119.01-.183.018-.064.01-.127.018-.182.018a3.15 3.15 0 01-1.715-.51 1.23 1.23 0 00-.621-.183c-.219 0-.438.073-.657.183-.401.219-.62.657-.584 1.131v.51c-.146 1.534-1.35 2.775-2.847 2.92-.054 0-.118.01-.182.019s-.128.018-.182.018a3.15 3.15 0 01-1.716-.51 1.23 1.23 0 00-.62-.183c-.22 0-.438.073-.657.182-.402.22-.62.657-.584 1.132v.51c-.146 1.533-1.35 2.774-2.883 2.92-.146-.036-.256-.036-.365-.036z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgRlc = React.memo(SvgRlc);
export default MemoSvgRlc;
