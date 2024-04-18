import React from "react";
import { StyleProp, TextInput, TextStyle, View, ViewStyle } from "react-native";

interface SearchBarProps {
  icon?: React.ReactNode;
  placeholder: string;
  styleContainer?: StyleProp<ViewStyle>;
  styleInput?: StyleProp<TextStyle>;
  styleIcon?: StyleProp<ViewStyle>;
}

export function SearchBar({
  icon,
  placeholder,
  styleContainer,
  styleInput,
  styleIcon,
}: SearchBarProps) {
  return (
    <View style={styleContainer}>
      <View style={styleIcon}>{icon}</View>

      <TextInput style={styleInput} placeholder={placeholder} />
    </View>
  );
}
