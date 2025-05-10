import * as React from "react";

const GmailIcon = (props: { color?: string; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
      fill: props.color,
      minWidth: "24px",
      minHeight: "24px"
    }}
    viewBox="0 0 512 512"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <circle cx={255.999} cy={256} r={246.455} />
    <path
      fill="var(--secondary-text-color)"
      d="M384 128H128c-17.602 0-32 14.406-32 32v192c0 17.594 14.398 32 32 32h256c17.594 0 32-14.406 32-32V160c0-17.594-14.406-32-32-32zm0 224h-32V211.203L256 272l-96-60.797V352h-32V160h19.203L256 227.203 364.797 160H384v192z"
    />
  </svg>
)
export default GmailIcon;