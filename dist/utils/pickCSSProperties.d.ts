import { CSSProperties } from "react";
export declare type PickCSSProperties<K extends keyof CSSProperties> = Pick<CSSProperties, K>;
export declare type PickCSSProperty<K extends keyof CSSProperties> = CSSProperties[K];
