import styled from "styled-components";

export interface HorizontalProps {
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | string;
}

const Horizontal = styled.div<HorizontalProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
`;

export default Horizontal;
