import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";

import style from "./style";
import { Button } from "../../components/Button";
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={style.containerCard}>
            <Card.Root backgroundColor={colors.button.green}>
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
                  style={style.headerCard}
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
                  fontSize={24}
                />
              </View>

              <Card.Text
                color={colors.font.light}
                text="R$ 1.200"
                fontSize={24}
                fontWeight="600"
                style={{ marginTop: 5 }}
              />

              <View style={style.rowCenterCard}>
                <Card.Text
                  text="Rendendo 102% do CDI"
                  color={colors.font.light}
                  style={{ opacity: 0.9, width: "90%" }}
                />

                <Card.Button
                  onPress={() => setVisible(!visible)}
                  icon={
                    <Ionicons
                      name={
                        visible === true ? "eye-outline" : "eye-off-outline"
                      }
                      size={28}
                      color={colors.icon.light}
                    />
                  }
                />
              </View>

              <Card.Button
                style={style.bottomButton}
                label="Invista seu dinheiro"
                fontWeight="600"
                fontSize={16}
                colorLabel={colors.font.dark}
              />
            </Card.Root>

            <Card.Root backgroundColor={colors.button.light}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Card.Text
                  text="Cartão de crédito"
                  color={colors.font.dark}
                  fontWeight="600"
                />
              </View>

              <Card.Text
                color={colors.font.dark}
                text="Encontre tudo sobre seu PicPay Card"
                fontWeight="600"
                fontSize={28}
                style={{ marginTop: 20, width: "60%" }}
              />

              <Card.Button
                style={{
                  ...style.bottomButton,
                  backgroundColor: colors.button.dark,
                }}
                label="Acessar cartão"
                fontWeight="600"
                fontSize={16}
                colorLabel={colors.font.light}
              />
            </Card.Root>
          </View>
        </ScrollView>

        {/* buttons options */}
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              color: colors.font.dark,
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Pro dia a dia
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Button.Root align="center">
                <Button.Content selected>
                  <Button.Icon
                    IconName="pix"
                    IconColor={colors.icon.light}
                    IconSize={20}
                  />
                </Button.Content>
                <Button.Text text="Pix" />
              </Button.Root>

              <Button.Root align="center">
                <Button.Content>
                  <Button.Icon
                    IconName="barcode"
                    IconColor={colors.icon.dark}
                    IconSize={20}
                  />
                </Button.Content>
                <Button.Text text="Pagar boleto" />
              </Button.Root>

              <Button.Root align="center">
                <Button.Content>
                  <Button.Icon
                    IconName="money-bill"
                    IconColor={colors.icon.dark}
                    IconSize={20}
                  />
                </Button.Content>
                <Button.Text text="Pagar pessoas" />
              </Button.Root>

              <Button.Root align="center">
                <Button.Content>
                  <Button.Icon
                    IconName="piggy-bank"
                    IconColor={colors.icon.dark}
                    IconSize={20}
                  />
                </Button.Content>

                <Button.Text text="Cofrinho" />
              </Button.Root>

              <Button.Root align="center">
                <Button.Content>
                  <Button.Icon
                    IconName="phone"
                    IconColor={colors.icon.dark}
                    IconSize={20}
                  />
                </Button.Content>

                <Button.Text text="Recarga de Celular" />
              </Button.Root>
            </View>
          </ScrollView>
        </View>

        {/* large buttons */}
        <View
          style={{
            width: "100%",
            marginTop: 20,
            justifyContent: "center",
            gap: 20,
            marginLeft: 10,
          }}
        >
          <Button.Root>
            <Button.Content size="large" direction="row">
              <Button.Text text="PicPay card" align="left" />
              <Button.Icon
                IconColor={colors.icon.dark}
                IconName="credit-card"
                IconSize={20}
              />
            </Button.Content>
          </Button.Root>

          <Button.Root>
            <Button.Content size="large" direction="row">
              <Button.Text text="Empréstimos" align="left" />
              <Button.Icon
                IconColor={colors.icon.dark}
                IconName="hand-holding-dollar"
                IconSize={20}
              />
            </Button.Content>
          </Button.Root>

          <Button.Root>
            <Button.Content size="large" direction="row">
              <Button.Text text="Investir" align="left" />
              <Button.Icon
                IconColor={colors.icon.dark}
                IconName="arrow-trend-up"
                IconSize={20}
              />
            </Button.Content>
          </Button.Root>
        </View>
      </ScrollView>
    </View>
  );
};
