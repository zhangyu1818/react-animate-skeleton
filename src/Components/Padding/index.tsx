import styled from "styled-components";
import convert from "../../utils/convert";
import { padding } from "../skeletonProps";

export interface PaddingProps {
  padding: padding;
}

const Padding = styled.div<PaddingProps>`
  border-width: ${({ padding }) => convert(padding)(0)};
  border-style: solid;
  border-color: ${({ theme }) => theme.backgroundColor};
`;

export default Padding;
