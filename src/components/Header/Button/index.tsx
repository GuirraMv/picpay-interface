import { ReactNode } from "react";
import {
  Dimensions,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import colors from "../../../theme/colors";

interface ButtonProps extends TouchableOpacityProps {
  label?: ReactNode;
  icon?: ReactNode;
}

export default function Button({ label, icon, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.icon.background.light,
        marginLeft: 8,
        height: 40,
        width: 40,
        borderRadius:
          Math.round(
            Dimensions.get("window").width + Dimensions.get("window").height,
          ) / 2,
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
      }}
      {...rest}
    >
      {icon}
    </TouchableOpacity>
  );
}
