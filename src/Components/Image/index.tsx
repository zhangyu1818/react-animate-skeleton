import React from "react";
import Padding from "../Padding";
import Item from "../Item";
import { PickCSSProperty } from "../../utils/pickCSSProperties";
import { padding } from "../skeletonProps";

interface ImageProps {
  width?: PickCSSProperty<"width">;
  height?: PickCSSProperty<"height">;
  padding: padding;
  aspectRatio?: number;
}

const Image: React.FC<ImageProps> = ({ padding, ...restProps }) => (
  <Padding padding={padding}>
    <Item {...restProps} />
  </Padding>
);

export default Image;
