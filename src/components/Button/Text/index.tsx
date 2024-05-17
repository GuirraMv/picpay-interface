import { Text, TextProps } from "react-native";
import colors from "../../../theme/colors";

interface TextButtonProps extends TextProps {
  text: string;
}

export function TextButton({ text }: TextButtonProps) {
  return <Text style={{ color: colors.font.dark, fontSize: 14 }}>{text}</Text>;
}
