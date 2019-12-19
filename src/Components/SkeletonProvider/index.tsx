import React from "react";
import { ThemeProvider } from "styled-components";

export interface SkeletonTheme {
  backgroundColor: string;
  skeletonColor: string;
  animationDuration: number;
}

interface SkeletonProviderProps {
  theme?: SkeletonTheme;
}

const defaultSkeletonTheme = {
  backgroundColor: "#fff",
  skeletonColor: "#e4e6f2",
  animationDuration: 2
};

const SkeletonProvider: React.FC<Partial<SkeletonProviderProps>> = ({
  children,
  theme
}) => {
  const mergeTheme = { ...defaultSkeletonTheme, ...theme };
  return <ThemeProvider theme={mergeTheme}>{children}</ThemeProvider>;
};

export default SkeletonProvider;
