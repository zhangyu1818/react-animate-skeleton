import React from "react";
import { PaddingProps } from "../Padding";
import { flex } from "../skeletonProps";
interface SectionElementProps {
    horizontal?: boolean;
    lineSize: string | number;
    gap: string | number;
    lines: number;
    flex?: flex;
}
export interface SectionProps extends SectionElementProps, PaddingProps {
    classNames?: string;
}
declare const Section: React.FC<SectionProps>;
export default Section;
