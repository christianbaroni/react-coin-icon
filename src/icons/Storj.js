import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStorj(props) {
  return (
    <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#2683FF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.671 23.762a2.445 2.445 0 01.875 3.293c-.668 1.173-2.187 1.589-3.381.934a2.722 2.722 0 01-.3-.198l-.023-.017-6.404 3.62c.016.116.025.235.026.353 0 .139 0 .265-.026.403-.218 1.326-1.49 2.233-2.841 2.019-1.35-.215-2.275-1.464-2.057-2.787l-6.444-3.646c-.1.072-.203.14-.308.202-.03.014-.059.03-.088.045-.075.039-.151.079-.235.106a2.495 2.495 0 01-3.227-1.35c-.514-1.248.104-2.66 1.376-3.165v-7.29a1.59 1.59 0 01-.334-.153 5.377 5.377 0 01-.283-.188 2.418 2.418 0 01-.978-2.26 2.445 2.445 0 011.521-1.948 2.526 2.526 0 012.478.335l6.508-3.696-.004-.031c-.012-.1-.022-.193-.022-.296 0-1.337 1.144-2.447 2.507-2.447 1.363 0 2.48 1.084 2.482 2.434 0 .102-.01.194-.022.294l-.004.035 6.559 3.72a2.517 2.517 0 013.666.77c.666 1.172.23 2.66-.966 3.317l-.123.056c-.075.036-.15.07-.224.095v7.303c.102.04.201.085.295.138h.001zm.451 3.053a1.84 1.84 0 00-.656-2.548 1.909 1.909 0 00-2.236.24l-2.946-1.677a3.253 3.253 0 00-1.131-4.162 4.778 4.778 0 00-.323-.808l4.45-2.472a1.944 1.944 0 001.736.468 1.87 1.87 0 001.427-2.247c-.231-1.008-1.26-1.626-2.288-1.4a1.87 1.87 0 00-1.428 2.245l-4.501 2.51c-.874-1.021-3.652-1.702-3.652-1.702V9.699a1.742 1.742 0 001.183-1.16 1.732 1.732 0 00-1.183-2.17c-.938-.278-1.929.227-2.212 1.149a1.733 1.733 0 001.183 2.17v5.675s-1.516.491-2.108.97a4.058 4.058 0 00-1.8.468l-4.232-2.384a1.82 1.82 0 00-.462-1.69 1.904 1.904 0 00-2.675-.089 1.84 1.84 0 00-.09 2.637c.717.756 1.909.795 2.675.088l3.82 2.144a3.888 3.888 0 00-.438 5.07L10.88 24.48a1.937 1.937 0 00-1.749-.454 1.872 1.872 0 00-1.414 2.259c.246 1.006 1.275 1.626 2.3 1.385a1.872 1.872 0 001.415-2.256l3.588-2.031a4.045 4.045 0 003.292.794c.359.164.728.303 1.105.416v5.3c-.515.159-.945.517-1.195.995a1.937 1.937 0 00.888 2.623c.078.04.155.076.244.102.007 0 .013.003.02.006a.046.046 0 00.02.007c1.052.314 2.173-.254 2.494-1.287a1.947 1.947 0 00-1.313-2.448v-5.195s.965-.088 1.415-.227a3.404 3.404 0 003.64-.744l3.008 1.729c-.19.799.172 1.627.888 2.03a1.927 1.927 0 002.597-.669v-.001zm-21.848-1.376a.814.814 0 00-.694-.39.79.79 0 00-.798.783.79.79 0 00.798.781.79.79 0 00.797-.781.845.845 0 00-.103-.393zm10.57-17.404a.794.794 0 01-.798.781.79.79 0 01-.796-.781.79.79 0 01.796-.783.79.79 0 01.799.783zm8.925 6.003a.798.798 0 00.797.783v-.001a.79.79 0 00.798-.782.79.79 0 00-.798-.782.79.79 0 00-.797.782zm-19.817-.72a.764.764 0 01.296 1.06.793.793 0 01-1.08.29.762.762 0 01-.296-1.06.793.793 0 011.08-.29zM31.26 25.666a.764.764 0 00-.373-.466V25.2a.8.8 0 00-1.099.274.77.77 0 000 .79.8.8 0 00.7.387.83.83 0 00.695-.392.764.764 0 00.077-.592zM19.25 31.72a.045.045 0 01.012-.026.79.79 0 01.9-.648.78.78 0 01.67.876.835.835 0 01-.823.669.797.797 0 01-.76-.871zm5.89-10.28a1.858 1.858 0 00-1.312-1.79l-.039-.29a1.523 1.523 0 00-.05-.202.148.148 0 00-.007-.037c-.003-.013-.007-.025-.007-.039a5.155 5.155 0 01-.039-.12l-.039-.119v-.013a3.335 3.335 0 00-.964-1.35l-.013-.012a1.662 1.662 0 00-.243-.177l-.013-.013a7.08 7.08 0 01-.064-.041c-.06-.04-.124-.081-.18-.11l-.014-.013a2.348 2.348 0 00-.257-.125l-.026-.013a4.245 4.245 0 00-.282-.113l-.013-.013c-.039-.01-.075-.02-.112-.032-.06-.018-.12-.036-.185-.045h-.013a2.452 2.452 0 00-.308-.049h-.013a3.236 3.236 0 00-1.62.189l-.065.05a2.44 2.44 0 00-.282.126.605.605 0 01-.128.063.502.502 0 00-.102.06l-.04.028a5.62 5.62 0 00-.18.126l-.038.026c-.056.036-.104.078-.154.122l-.065.055-.065.063-.003.003c-.075.074-.138.135-.202.212a2.768 2.768 0 00-.463-.039.4.4 0 00-.13.013 2.57 2.57 0 00-2.133 1.337l-.013.026a1.636 1.636 0 00-.116.259l-.013.03a1.225 1.225 0 00-.064.202c-.006.013-.01.029-.013.044a.182.182 0 01-.013.044l-.003.018c-.012.058-.024.116-.036.184a.155.155 0 01-.005.036 2.42 2.42 0 00-.02.342 1.5 1.5 0 00.012.24c0 .012.003.023.006.035a.224.224 0 01.007.054c.006.024.009.048.012.072a.618.618 0 00.013.079l.011.046a.496.496 0 00.015.055.362.362 0 01.026.114c0 .025.011.05.023.076l.015.037c.01.03.023.06.039.088.02.041.037.083.052.126l.01.017c.008.015.016.027.016.047.182.417.487.769.875 1.009.185.115.384.208.591.277.08.027.16.048.243.063l.026.013.232.037.052.013c.09.013.179.013.283.013.34.003.678-.065.99-.202.038.025.072.05.107.075l.11.076.027.013c.065.038.141.075.218.113h.013a3.374 3.374 0 002.38.24h.012a1.45 1.45 0 00.334-.114l.349-.15a1.9 1.9 0 001.285.384c.041-.003.083-.006.128-.006l.065-.012c.164-.022.325-.07.476-.14l.039-.012.107-.056.11-.059c.318-.202.564-.497.707-.845.052-.113.078-.226.104-.339v-.039c.006-.025.01-.05.013-.075a.626.626 0 01.013-.076c0-.03.003-.062.006-.094.004-.032.007-.064.007-.096z"
        fill="#fff"
      />
    </Svg>
  );
}

const MemoSvgStorj = React.memo(SvgStorj);
export default MemoSvgStorj;
