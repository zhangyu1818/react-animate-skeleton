import React from "react";
import { PickCSSProperty } from "../../utils/pickCSSProperties";
export interface ItemProps {
    className?: string;
    width?: PickCSSProperty<"width">;
    height: PickCSSProperty<"height">;
}
declare const Item: React.FC<ItemProps>;
export default Item;
