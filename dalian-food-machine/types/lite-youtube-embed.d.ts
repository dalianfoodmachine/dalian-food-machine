declare module "lite-youtube-embed" {
  // side-effect only import, registers <lite-youtube> custom element
}

declare namespace React.JSX {
  interface IntrinsicElements {
    "lite-youtube": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        videoid?: string;
        playlabel?: string;
        params?: string;
        posterquality?: string;
        posterloading?: "lazy" | "eager";
      },
      HTMLElement
    >;
  }
}
