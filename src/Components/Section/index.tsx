import React from "react";
import styled from "styled-components";
import convert from "../../utils/convert";
import Padding, { PaddingProps } from "../Padding";

interface SectionElementProps {
  horizontal?: boolean;
  lineSize: string | number;
  gap: string | number;
  lines: number;
}

export interface SectionProps extends SectionElementProps, PaddingProps {
  classNames?: string;
}

const SectionElement = styled.div<SectionElementProps>`
  ${({ horizontal }) => (horizontal ? "width" : "height")}: ${({
    lineSize,
    gap,
    lines
  }) =>
    `calc((${convert(lineSize)()} + ${convert(gap)()}) * ${lines} - ${convert(
      gap
    )()})`};
  background: repeating-linear-gradient(
    to ${({ horizontal }) => (horizontal ? "right" : "bottom")},
    transparent,
    transparent ${({ lineSize }) => convert(lineSize)()},
    ${({ theme }) => theme.backgroundColor} 0,
    ${({ theme }) => theme.backgroundColor}
      ${({ lineSize, gap }) =>
        `calc(${convert(lineSize)()} + ${convert(gap)()})`}
  );
  height: ${({ horizontal, lineSize }) =>
    horizontal ? convert(lineSize)() : null};
`;

const Section: React.FC<SectionProps> = props => {
  const { padding, horizontal, ...resetProps } = props;
  return (
    <Padding padding={padding}>
      <SectionElement horizontal={horizontal} {...resetProps} />
    </Padding>
  );
};

export default Section;
