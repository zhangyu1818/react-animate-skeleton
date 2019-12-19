import styled from "styled-components";
import React from "react";
import { PickCSSProperty } from "../../utils/pickCSSProperties";

export interface ItemProps {
  className?: string;
  width?: PickCSSProperty<"width">;
  height: PickCSSProperty<"height">;
}

const ItemElement = styled.div`
  background: transparent;
`;

const Item: React.FC<ItemProps> = ({ width, height, className }) => (
  <ItemElement className={className} style={{ width, height }} />
);

export default Item;
