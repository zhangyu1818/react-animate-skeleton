import React from "react";
import { PickCSSProperty } from "../../utils/pickCSSProperties";
import { flex } from "../skeletonProps";
export interface GapProps {
    width?: PickCSSProperty<"width">;
    height?: PickCSSProperty<"height">;
    className?: string;
    aspectRatio?: number;
    flex?: flex;
}
declare const Gap: React.FC<GapProps>;
export default Gap;
