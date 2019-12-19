import React from "react";
import { PickCSSProperty } from "../../utils/pickCSSProperties";
import { padding } from "../skeletonProps";
interface ImageProps {
    width?: PickCSSProperty<"width">;
    height: PickCSSProperty<"height">;
    padding: padding;
}
declare const Image: React.FC<ImageProps>;
export default Image;
