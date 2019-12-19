import { CSSProperties } from "react";

export type PickCSSProperties<K extends keyof CSSProperties> = Pick<
  CSSProperties,
  K
>;
export type PickCSSProperty<K extends keyof CSSProperties> = CSSProperties[K];
