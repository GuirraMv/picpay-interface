import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { View, ViewStyle } from "react-native";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

interface IconProps {
  name: string;
  size: number;
  color: string;
  styleIcon?: StyleProp<ViewStyle>;
  styleContainer?: StyleProp<ViewStyle>;
}

export function Icon({
  name,
  size,
  color,
  styleIcon,
  styleContainer,
}: IconProps) {
  return (
    <View style={styleContainer}>
      <FontAwesome6 name={name} size={size} color={color} style={styleIcon} />
    </View>
  );
}
