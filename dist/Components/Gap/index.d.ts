import React from "react";
import { PickCSSProperty } from "../../utils/pickCSSProperties";
interface GapElementProps {
    className?: string;
}
export interface GapProps extends GapElementProps {
    width?: PickCSSProperty<"width">;
    height: PickCSSProperty<"height">;
}
declare const Gap: React.FC<GapProps>;
export default Gap;
