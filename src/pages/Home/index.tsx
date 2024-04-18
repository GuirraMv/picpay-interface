import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { View, ScrollView } from "react-native";

import style from "./style";
import { Header } from "../../components/Header";
import colors from "../../theme/colors";

export const Home = () => {
  return (
    <View style={style.container}>
      <ScrollView>
        <Header.Root style={style.containerHeader}>
          <Header.Icon
            name="user"
            size={20}
            color={colors.icon.dark}
            styleContainer={style.containerIcon}
            styleIcon={style.icon}
          />

          <Header.SearchBar
            placeholder="Buscar"
            styleContainer={style.containerInput}
            styleIcon={style.iconInput}
            styleInput={style.input}
            icon={
              <FontAwesome6 name="magnifying-glass" color="black" size={18} />
            }
          />

          <Header.Icon
            name="message"
            size={20}
            color={colors.icon.dark}
            styleContainer={style.containerIcon}
            styleIcon={style.icon}
          />

          <Header.Icon
            name="bell"
            size={20}
            color={colors.icon.dark}
            styleContainer={style.containerIcon}
            styleIcon={style.icon}
          />
        </Header.Root>
      </ScrollView>
    </View>
  );
};
