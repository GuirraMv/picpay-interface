import { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import style from "./style";

interface ButtonProps extends TouchableOpacityProps {
  label?: ReactNode;
  icon?: ReactNode;
}

export default function Button({ label, icon, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      {icon}
    </TouchableOpacity>
  );
}
