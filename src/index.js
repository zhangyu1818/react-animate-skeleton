import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const convert = value => defaultValue =>
  typeof value === "number" ? `${value}px` : value || defaultValue;

const _skeletonLoading = keyframes`
  from {
    background-position: 100% 100%;
  }
  to {
    background-position: 100% 0;
  }
`;

const _skeleton = styled(
  ({ className, children, height = "100%", padding }) => (
    <div
      className={className}
      children={children}
      style={{ height, padding }}
    />
  )
)`
  background: linear-gradient(to bottom, #fff, #f3f4f5, #fff, #f3f4f5, #fff);
  background-size: 100% 200%;
  background-clip: content-box;
  animation: ${_skeletonLoading} 2s linear infinite;
`;

const _skeletonSection = styled(
  ({ height, className, padding, horizontal }) => (
    <Skeleton.Padding padding={padding} maxContent={horizontal}>
      <div className={className} style={{ height }} />
    </Skeleton.Padding>
  )
)`
  ${({ horizontal }) => (horizontal ? "width" : "height")}: ${({
    lineHeight,
    gap,
    lines
  }) =>
    `calc((${convert(lineHeight)(0)} + ${convert(gap)(
      0
    )}) * ${lines} - ${convert(gap)(0)})`};
  background: repeating-linear-gradient(
    to ${({ horizontal }) => (horizontal ? "right" : "bottom")},
    transparent,
    transparent ${({ lineHeight }) => convert(lineHeight)()},
    #fff 0,
    #fff
      ${({ lineHeight, gap }) =>
        `calc(${convert(lineHeight)()} + ${convert(gap)()})`}
  );
`;

const _skeletonGap = styled(({ width, height, className }) => (
  <div className={className} style={{ width, height }} />
))`
  background: #fff;
`;

const _skeletonItem = styled(({ height, className }) => (
  <div className={className} style={{ height }} />
))`
  background: transparent;
`;

const _skeletonPadding = styled.div`
  width: ${({ maxContent }) => (maxContent ? "max-content" : null)};
  border-width: ${({ padding }) => convert(padding)(0)};
  border-style: solid;
  border-color: #fff;
`;

class Skeleton extends Component {
  static Section = _skeletonSection;
  static Padding = _skeletonPadding;
  static Gap = _skeletonGap;
  static Item = _skeletonItem;
  static Image = ({ height, padding }) => (
    <Skeleton.Padding padding={padding}>
      <Skeleton.Item height={height} />
    </Skeleton.Padding>
  );
  render() {
    const Wrap = _skeleton;
    return <Wrap {...this.props} />;
  }
}

export default Skeleton;
