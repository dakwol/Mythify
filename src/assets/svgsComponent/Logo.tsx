import type { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <radialGradient
        id="logo_svg__a"
        cx={0}
        cy={0}
        r={0.782}
        gradientTransform="matrix(.9017 -.43237 .51795 1.08017 0 .721)"
        gradientUnits="objectBoundingBox"
        spreadMethod="pad"
      >
        <stop offset="0%" stopColor="#ffc589" />
        <stop offset="100%" stopColor="#e2994e" />
      </radialGradient>
    </defs>
    <path
      fill="none"
      stroke="url(#logo_svg__a)"
      strokeLinecap="round"
      strokeMiterlimit={105}
      strokeWidth={200}
      d="M4180 5516v-734l53-58c264-289 869-944 872-944 2 0 152 161 332 357 180 197 375 409 433 472s117 128 132 145l27 31v1470l-42-46c-23-25-154-169-292-320-137-150-252-276-255-279s-79-85-169-182c-89-98-167-178-171-178-8 0-67 64-575 625-114 127-239 263-276 303l-69 72z"
      transform="matrix(.1 0 0 -.1 0 1024)"
    />
  </svg>
);
export default SvgLogo;
