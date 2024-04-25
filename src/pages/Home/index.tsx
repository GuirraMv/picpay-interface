import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import style from "./style";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import colors from "../../theme/colors";

export const Home = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={style.container}>
      <ScrollView>
        <Header.Root style={style.containerHeader}>
          <Header.Button
            style={style.containerIcon}
            disabled
            icon={
              <FontAwesome6
                name="user"
                size={20}
                color={colors.icon.dark}
                style={style.icon}
              />
            }
          />

          <Header.SearchBar
            placeholder="Buscar"
            styleContainer={style.containerInput}
            styleIcon={style.iconInput}
            styleInput={style.input}
            icon={
              <FontAwesome6
                name="magnifying-glass"
                size={18}
                color={colors.icon.dark}
                style={style.icon}
              />
            }
          />

          <Header.Button
            icon={
              <FontAwesome6
                name="message"
                size={20}
                color={colors.icon.dark}
                style={style.icon}
              />
            }
          />

          <Header.Button
            icon={
              <FontAwesome6
                name="bell"
                size={20}
                color={colors.icon.dark}
                style={style.icon}
              />
            }
          />
        </Header.Root>

        <View
          style={{
            width: "100%",
            height: 350,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Card.Root>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Card.Text
                text="Conta"
                color={colors.font.light}
                fontWeight="600"
              />
              <Card.Button
                style={{
                  marginLeft: "55%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                label="Ver extrato"
                colorLabel={colors.font.light}
                fontWeight="600"
                icon={
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={16}
                    color={colors.icon.light}
                  />
                }
              />
            </View>

            <View style={{ marginTop: 30 }}>
              <Card.Text
                color={colors.font.light}
                text="Saldo em conta"
                fontWeight="600"
                fontSize={20}
              />
            </View>

            <Card.Text
              color={colors.font.light}
              text="1.200"
              fontSize={20}
              fontWeight="600"
              style={{ marginTop: 20 }}
            />

            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Card.Text
                text="Rendendo 102% do CDI"
                color={colors.font.light}
                style={{ opacity: 0.9 }}
              />

              <Card.Button
                style={{ width: "80%", alignSelf: "flex-end" }}
                onPress={() => setVisible(!visible)}
                icon={
                  <FontAwesome6
                    name={visible === true ? "eye" : "eye-slash"}
                    size={18}
                    color={colors.icon.light}
                    style={style.icon}
                  />
                }
              />
            </View>

            <Card.Button
              style={{
                backgroundColor: colors.background.light,
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
                height: 60,
                alignSelf: "center",
                position: "absolute",
                bottom: 10,
                width: "90%",
              }}
              label="Invista seu dinheiro"
              fontSize={16}
              colorLabel={colors.font.dark}
            />
          </Card.Root>
        </View>
      </ScrollView>
    </View>
  );
};
