import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function SvgSocks(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="url(#socks_svg__paint0_linear)"
      />
      <Path
        opacity={0.8}
        d="M22.333 6.935l.442.147 6.588 2.06a.154.154 0 01.103.187l-.489 1.78a.154.154 0 01-.127.112l-.079.011a.154.154 0 00-.124.105l-2.884 8.89a.156.156 0 00-.007.069c.052.39.13 1.367.067 2.452-.083 1.4-1.378 2.137-2.162 2.525-.784.388-1.333.466-1.881.543-.614.086-1.333.465-1.843.815-1.556.866-4.825 2.678-5.453 2.988-.627.31-1.724.336-2.194.31-.927.038-2.96-.36-3.675-2.257-.711-1.89.431-3.471 1.1-4.034a.146.146 0 01.019-.014c2.24-1.335 6.96-4.14 7.993-4.73 1.036-.59 1.4-1.307 1.454-1.592l2.693-8.328a.154.154 0 00-.054-.17l-.135-.101a.154.154 0 01-.054-.173l.508-1.498a.153.153 0 01.194-.097z"
        fill="url(#socks_svg__paint1_linear)"
      />
      <Path
        d="M21.939 7.744l.456.092 6.79 1.244a.154.154 0 01.124.174l-.268 1.826a.154.154 0 01-.112.126l-.078.021a.154.154 0 00-.11.119l-1.784 9.175a.157.157 0 00.002.069c.099.38.296 1.341.364 2.426.088 1.399-1.107 2.288-1.839 2.769-.731.48-1.266.623-1.801.767-.599.16-1.267.624-1.73 1.032-1.44 1.05-4.465 3.245-5.05 3.63-.585.384-1.67.542-2.14.573-.916.15-2.982.002-3.922-1.794-.936-1.789.006-3.497.602-4.138a.136.136 0 01.017-.016c2.062-1.597 6.405-4.955 7.36-5.665.956-.712 1.231-1.468 1.25-1.758l1.661-8.593a.154.154 0 00-.075-.162l-.146-.084a.153.153 0 01-.074-.165l.322-1.549a.154.154 0 01.18-.119z"
        fill="url(#socks_svg__paint2_linear)"
      />
      <Defs>
        <LinearGradient
          id="socks_svg__paint0_linear"
          x1={5.217}
          y1={4.348}
          x2={30.435}
          y2={40}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EAE4D7" />
          <Stop offset={1} stopColor="#DB16EB" />
        </LinearGradient>
        <LinearGradient
          id="socks_svg__paint1_linear"
          x1={17.483}
          y1={7.551}
          x2={20.492}
          y2={28.895}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.56} />
        </LinearGradient>
        <LinearGradient
          id="socks_svg__paint2_linear"
          x1={17.199}
          y1={8.944}
          x2={22.778}
          y2={29.765}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.8} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const MemoSvgSocks = React.memo(SvgSocks);
export default MemoSvgSocks;
