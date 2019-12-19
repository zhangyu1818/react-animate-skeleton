import React from "react";
import { PaddingProps } from "../Padding";
interface SectionElementProps {
    horizontal?: boolean;
    lineSize: string | number;
    gap: string | number;
    lines: number;
}
export interface SectionProps extends SectionElementProps, PaddingProps {
    classNames?: string;
}
declare const Section: React.FC<SectionProps>;
export default Section;
