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

class Skeleton extends Component {
  static backgroundColor = "#fff";
  static skeletonColor = "#f3f4f5";
  static duration = 2;

  static Section = styled(
    ({ height, className, padding, horizontal, block }) => (
      <Skeleton.Padding padding={padding} maxContent={horizontal} block={block}>
        <div className={className} style={{ height }} />
      </Skeleton.Padding>
    )
  )`
    ${({ horizontal }) => (horizontal ? "width" : "height")}: ${({
      lineSize,
      gap,
      lines
    }) =>
      `calc((${convert(lineSize)(0)} + ${convert(gap)(
        0
      )}) * ${lines} - ${convert(gap)(0)})`};
    background: repeating-linear-gradient(
      to ${({ horizontal }) => (horizontal ? "right" : "bottom")},
      transparent,
      transparent ${({ lineSize }) => convert(lineSize)()},
      ${Skeleton.backgroundColor} 0,
      ${Skeleton.backgroundColor}
        ${({ lineSize, gap }) =>
          `calc(${convert(lineSize)()} + ${convert(gap)()})`}
    );
    height: ${({ horizontal, lineSize }) =>
      horizontal ? convert(lineSize) : null};
  `;

  static Padding = styled.div`
    width: ${({ maxContent }) => (maxContent ? "max-content" : null)};
    border-width: ${({ padding }) => convert(padding)(0)};
    border-style: solid;
    border-color: ${Skeleton.backgroundColor};
    flex: ${({ block }) => (block ? 1 : "none")};
  `;

  static Gap = styled(({ width, height, className, flex }) => (
    <div className={className} style={{ width, height, flex }} />
  ))`
    background: ${Skeleton.backgroundColor};
  `;

  static Item = styled(({ height, width, className }) => (
    <div className={className} style={{ height, width }} />
  ))`
    background: transparent;
  `;

  static Image = ({ height, padding }) => (
    <Skeleton.Padding padding={padding}>
      <Skeleton.Item height={height} />
    </Skeleton.Padding>
  );

  static Avatar = ({ width, height, padding }) => (
    <Skeleton.Padding
      padding={padding}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Skeleton.Item height={height} width={width} />
      <Skeleton.Gap flex={1} />
    </Skeleton.Padding>
  );

  static Horizontal = styled(({ children, className }) => (
    <div className={className}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { block: true })
      )}
    </div>
  ))`
    display: flex;
    border-color: ${Skeleton.backgroundColor};
    border-width: ${({ padding }) => convert(padding)(0)};
    border-style: solid;
  `;

  render() {
    const Wrap = styled(({ className, children, height, width, padding }) => (
      <div
        className={className}
        children={children}
        style={{ height, padding, width }}
      />
    ))`
      background: linear-gradient(
        to bottom,
        ${Skeleton.backgroundColor},
        ${Skeleton.skeletonColor},
        ${Skeleton.backgroundColor},
        ${Skeleton.skeletonColor},
        ${Skeleton.backgroundColor}
      );
      background-size: 100% 200%;
      background-clip: content-box;
      animation: ${_skeletonLoading} ${Skeleton.duration}s linear infinite;
    `;
    return <Wrap {...this.props} />;
  }
}

export default Skeleton;
