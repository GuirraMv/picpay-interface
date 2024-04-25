import { ReactNode } from "react";
import { View } from "react-native";

import style from "./style";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return <View style={style.container}>{children}</View>;
}
