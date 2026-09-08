import type { CSSProperties } from "react";
export default function Icon({
  name,
  size = 20,
  style,
}: {
  name: string;
  size?: number;
  style?: CSSProperties;
}) {
  const paths: Record<string, React.ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15M13 5l7 7-7 7" />
      </>
    ),
    play: <path d="m9 5 11 7-11 7Z" />,
    "volume-on": (
      <>
        <path d="M11 4 6 8H3v8h3l5 4Z" />
        <path d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14" />
      </>
    ),
    "volume-off": (
      <>
        <path d="M11 4 6 8H3v8h3l5 4Z" />
        <path d="m16 9 6 6m0-6-6 6" />
      </>
    ),
    pause: (
      <>
        <path d="M9 5v14M15 5v14" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    ),
    leaf: (
      <>
        <path d="M20 3C5 2 1 10 6 16s16 1 14-13ZM4 21 16 8" />
      </>
    ),
    tool: (
      <>
        <path d="m14 6 4 4 3-3c1 6-3 9-8 7l-7 7-3-3 7-7C8 5 12 2 17 3Z" />
      </>
    ),
    chat: <path d="M21 11a8 8 0 0 1-8 8H9l-6 3 1-6a8 8 0 1 1 17-5Z" />,
    search: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
    plus: <path d="M12 4v16M4 12h16" />,
    bag: (
      <>
        <path d="M5 7h14l2 14H3ZM8 7V5a4 4 0 0 1 8 0v2" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
