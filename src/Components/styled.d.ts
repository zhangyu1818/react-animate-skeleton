import "styled-components";
import { SkeletonTheme } from "./SkeletonProvider";

declare module "styled-components" {
  export interface DefaultTheme extends SkeletonTheme {}
}
