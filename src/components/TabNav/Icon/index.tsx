import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React from "react";

interface IconProps {
  name: string;
  size: number;
}

export function Icon({ name, size }: IconProps) {
  return <FontAwesome5 name={name} size={size} />;
}
