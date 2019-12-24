import React from "react";
import styled from "styled-components";
import { PickCSSProperty } from "../../utils/pickCSSProperties";
import { flex } from "../skeletonProps";

export interface GapProps {
  width?: PickCSSProperty<"width">;
  height?: PickCSSProperty<"height">;
  className?: string;
  aspectRatio?: number;
  flex?: flex;
}

const GapElement = styled.div<GapProps>`
  background: ${({ theme }) => theme.backgroundColor};
  flex: ${({ flex }) =>
    typeof flex !== "undefined"
      ? typeof flex === "boolean"
        ? 1
        : flex
      : "initial"};
`;

const Gap: React.FC<GapProps> = ({ width, height, aspectRatio, ...props }) => {
  const tempHeight =
    aspectRatio !== undefined
      ? { paddingBottom: `${aspectRatio * 100}%` }
      : { height };
  return (
    <GapElement {...props} style={{ width }}>
      <div style={tempHeight} />
    </GapElement>
  );
};

export default Gap;
