import { Text, TextProps } from "react-native";

import colors from "../../../theme/colors";

interface TextButtonProps extends TextProps {
  text: string;
  align?: "auto" | "left" | "right" | "center" | "justify" | undefined;
}

export function TextButton({ text, align = "center" }: TextButtonProps) {
  return (
    <Text
      style={{
        color: colors.font.dark,
        fontSize: 16,
        width: "80%",
        textAlign: align,
        flexWrap: "wrap",
        paddingTop: 10,
      }}
    >
      {text}
    </Text>
  );
}
