import styled from "styled-components";
import React from "react";
import { PickCSSProperty } from "../../utils/pickCSSProperties";

export interface ItemProps {
  className?: string;
  width?: PickCSSProperty<"width">;
  height?: PickCSSProperty<"height">;
  aspectRatio?: number;
}

const ItemElement = styled.div`
  background: transparent;
`;

const Item: React.FC<ItemProps> = ({
  width,
  height,
  aspectRatio,
  className
}) => {
  const tempHeight =
    aspectRatio !== undefined
      ? { paddingBottom: `${aspectRatio * 100}%` }
      : { height };
  return (
    <ItemElement className={className} style={{ width }}>
      <div style={tempHeight} />
    </ItemElement>
  );
};

export default Item;
