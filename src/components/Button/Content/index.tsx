import { ReactNode } from "react";
import { Dimensions, View, ViewProps } from "react-native";

import { styles } from "./styles";
import colors from "../../../theme/colors";

interface ContentProps extends ViewProps {
  children?: ReactNode;
  text?: string;
  size?: "small" | "large";
  circle?: boolean;
  selected?: boolean;
  description?: string;
  direction?: "column" | "row" | "row-reverse" | "column-reverse" | undefined;
}

export function Content({
  children,
  text,
  size = "small",
  circle,
  selected,
  description,
  direction = "column",
  ...rest
}: ContentProps) {
  return (
    <>
      <View
        {...rest}
        style={{
          ...styles.container,
          flexDirection: direction,
          width: size === "small" ? 80 : "95%",
          backgroundColor: selected ? colors.button.green : colors.button.light,
          borderRadius: circle
            ? Math.round(
                Dimensions.get("window").width + Dimensions.get("window").height
              ) / 2
            : 20,
        }}
      >
        {children}
      </View>
    </>
  );
}
