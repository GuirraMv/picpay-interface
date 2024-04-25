import { ViewProps, Text, ColorValue, View } from "react-native";

interface TextProps extends ViewProps {
  text: string;
  fontSize?: number | undefined;
  color: ColorValue | undefined;
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

export function TextCard({
  text,
  color,
  fontSize = 14,
  fontWeight = "normal",
  ...rest
}: TextProps) {
  return (
    <View {...rest}>
      <Text
        style={{ fontSize: fontSize, color: color, fontWeight: fontWeight }}
      >
        {text}
      </Text>
    </View>
  );
}
