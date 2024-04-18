import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface RootProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function Root({ children, style }: RootProps) {
  return <View style={style}>{children}</View>;
}
