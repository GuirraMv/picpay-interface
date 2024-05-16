import { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return <View style={{ flexDirection: "row" }}>{children}</View>;
}
