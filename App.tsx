import { StatusBar } from "expo-status-bar";

import { Routers } from "./src/routers/Routers";
import colors from "./src/theme/colors";

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor={colors.statusbar.light} />
      <Routers />
    </>
  );
}
