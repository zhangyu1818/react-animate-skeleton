import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { PickCSSProperty } from "../../utils/pickCSSProperties";
import convert from "../../utils/convert";

export interface SkeletonProps {
  className?: string;
  animationDuration?: number;
  loadingKeyFrames?: Keyframes;
  width?: PickCSSProperty<"width">;
  animate?: boolean;
}

const SkeletonElement = styled.div<SkeletonProps>`
  background: linear-gradient(
    to bottom,
    ${({ theme: { backgroundColor, skeletonColor } }) =>
      `${backgroundColor},${skeletonColor} 30%,${backgroundColor} 60%`}
  );
  background-size: 200% 200%;
  background-clip: content-box;
  animation: ${({ loadingKeyFrames }) => loadingKeyFrames}
    ${({ theme, animationDuration }) =>
      animationDuration || theme.animationDuration}s
    linear infinite;
  ${({ animate }) => (!animate ? "animation:none;" : "")};
  width: ${({ width }) => convert(width)("100%")};
  opacity: 0.45;
`;

const defaultLoadingKeyFrames = keyframes`
  from {
    background-position: 100% 100%;
  }
  to {
    background-position: 100% -100%;
  }
`;

const Skeleton: React.FC<SkeletonProps> = ({
  loadingKeyFrames = defaultLoadingKeyFrames,
  animate = true,
  ...props
}) => {
  return (
    <SkeletonElement
      loadingKeyFrames={loadingKeyFrames}
      animate={animate}
      {...props}
    />
  );
};

export default Skeleton;
