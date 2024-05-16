import { ReactNode } from "react";
import {
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";

import colors from "../../../theme/colors";

interface ContainerProps extends ViewProps {
  icon: ReactNode;
  text?: string;
  size?: "small" | "large";
  circle?: boolean;
  selected?: boolean;
  description?: string;
}

export function Container({
  icon,
  text,
  size = "small",
  circle,
  selected,
  description,
  ...rest
}: ContainerProps) {
  return (
    <>
      <View
        {...rest}
        style={{
          width: size === "small" ? 80 : "100%",
          height: 90,
          backgroundColor: selected ? colors.button.green : colors.button.light,
          borderRadius: circle
            ? Math.round(
                Dimensions.get("window").width + Dimensions.get("window").height
              ) / 2
            : 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {text && (
          <Text style={{ color: colors.font.dark, fontSize: 16 }}>{text}</Text>
        )}
        <View style={{}}>{icon}</View>
      </View>
      {description && (
        <Text style={{ color: colors.font.dark, fontSize: 16 }}>{text}</Text>
      )}
    </>
  );
}
