import { Dimensions, StyleSheet } from "react-native";

import colors from "../../../theme/colors";

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.icon.background.light,
    marginLeft: 8,
    height: 40,
    width: 40,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});

export default style;
