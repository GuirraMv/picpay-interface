import { ReactNode } from "react";
import { ColorValue, View, ViewProps } from "react-native";

import style from "./style";

interface RootProps extends ViewProps {
  children: ReactNode;
  backgroundColor: ColorValue | undefined;
}

export function Root({ children, backgroundColor, ...rest }: RootProps) {
  return (
    <View
      style={{
        ...style.container,
        backgroundColor,
      }}
      {...rest}
    >
      {children}
    </View>
  );
}
