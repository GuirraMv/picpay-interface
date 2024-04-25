import { Dimensions, StyleSheet } from "react-native";

import colors from "../../theme/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  containerHeader: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: colors.background.light,
  },
  containerIcon: {
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
  icon: {
    alignSelf: "center",
  },
  iconButtonCard: {
    paddingLeft: 4,
  },
  containerInput: {
    backgroundColor: colors.input.background,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: 220,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 10,
  },
  input: {
    fontSize: 18,
    width: "80%",
    height: "80%",
  },
  iconInput: {
    marginRight: 12,
    marginLeft: 12,
  },
});

export default style;
