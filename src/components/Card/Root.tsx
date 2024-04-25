import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

import colors from "../../theme/colors";

interface RootProps extends ViewProps {
  children: ReactNode;
}

export function Root({ children, ...rest }: RootProps) {
  return (
    <View
      style={{
        height: "90%",
        backgroundColor: colors.button.green,
        alignSelf: "center",
        width: 320,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
      {...rest}
    >
      {children}
    </View>
  );
}
