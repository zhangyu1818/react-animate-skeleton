import styled from "styled-components";
import convert from "../../utils/convert";
import { flex, padding } from "../skeletonProps";

export interface PaddingProps {
  padding: padding;
  flex?: flex;
}

const Padding = styled.div<PaddingProps>`
  border-width: ${({ padding }) => convert(padding)(0)};
  border-style: solid;
  border-color: ${({ theme }) => theme.backgroundColor};
  flex: ${({ flex }) =>
    typeof flex !== "undefined"
      ? typeof flex === "boolean"
        ? 1
        : flex
      : "initial"};
`;

export default Padding;
