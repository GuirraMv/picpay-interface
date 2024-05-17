import { ReactNode } from "react";
import { FlexAlignType, View } from "react-native";

interface RootProps {
  children: ReactNode;
  align?: FlexAlignType | undefined;
}

export function Root({ children, align = "flex-start" }: RootProps) {
  return (
    <View style={{ flexDirection: "column", alignItems: align }}>
      {children}
    </View>
  );
}
