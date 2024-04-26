import { ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ColorValue,
} from "react-native";
import style from "./style";

interface ButtonProps extends TouchableOpacityProps {
  label?: ReactNode;
  colorLabel?: ColorValue | undefined;
  icon?: ReactNode;
  fontSize?: number | undefined;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
}

export function Button({
  label,
  colorLabel,
  children,
  icon,
  fontSize = 14,
  fontWeight = "normal",
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      <Text
        style={{
          fontSize: fontSize,
          color: colorLabel,
          fontWeight: fontWeight,
        }}
      >
        {label}
      </Text>
      {icon}
    </TouchableOpacity>
  );
}
