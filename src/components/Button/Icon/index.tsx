import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";

interface IconProps {
  IconName: string;
  IconColor: string;
  IconSize: number;
}

export default function Icon({ IconName, IconColor, IconSize }: IconProps) {
  return <FontAwesome6 name={IconName} color={IconColor} size={IconSize} />;
}
