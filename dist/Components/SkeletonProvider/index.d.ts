import React from "react";
export interface SkeletonTheme {
    backgroundColor: string;
    skeletonColor: string;
    animationDuration: number;
}
interface SkeletonProviderProps {
    theme?: SkeletonTheme;
}
declare const SkeletonProvider: React.FC<Partial<SkeletonProviderProps>>;
export default SkeletonProvider;
