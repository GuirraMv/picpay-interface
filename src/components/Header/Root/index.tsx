import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

interface RootProps extends ViewProps {
  children: ReactNode;
}

export function Root({ children, ...rest }: RootProps) {
  return <View {...rest}>{children}</View>;
}
