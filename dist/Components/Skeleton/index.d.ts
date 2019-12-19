import React from "react";
import { Keyframes } from "styled-components";
import { PickCSSProperty } from "../../utils/pickCSSProperties";
export interface SkeletonProps {
    className?: string;
    animationDuration?: number;
    loadingKeyFrames?: Keyframes;
    width?: PickCSSProperty<"width">;
    animate?: boolean;
}
declare const Skeleton: React.FC<SkeletonProps>;
export default Skeleton;
