import React from "react";
import styled from "styled-components";
import { PickCSSProperty } from "../../utils/pickCSSProperties";

interface GapElementProps {
  className?: string;
}

export interface GapProps extends GapElementProps {
  width?: PickCSSProperty<"width">;
  height: PickCSSProperty<"height">;
}

const GapElement = styled.div<GapElementProps>`
  background: ${({ theme }) => theme.backgroundColor};
`;

const Gap: React.FC<GapProps> = ({ width, height, ...props }) => (
  <GapElement {...props} style={{ width, height }} />
);

export default Gap;
