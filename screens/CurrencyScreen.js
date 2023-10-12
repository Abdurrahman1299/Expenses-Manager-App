import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { COUNTRIES } from "../constants/countries";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../store/features/currencySlice";
import { COLORS, SIZES } from "../constants/colors";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../components/ui/Loading";

export default function CurrencyScreen({ navigation }) {
  const currency = useSelector((state) => state.currency.value);
  const dispatch = useDispatch();
  const [currencySelected, setCurrencySelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //
  useEffect(() => {
    const loadCurrency = async () => {
      try {
        const storedCurrency = await AsyncStorage.getItem("currency");
        if (storedCurrency) {
          dispatch(changeCurrency(JSON.parse(storedCurrency)));
        }
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    loadCurrency();
  }, []);

  //
  function handleSelection(cur) {
    dispatch(changeCurrency(cur));
    setCurrencySelected(true);
  }

  function handlePressContinue() {
    navigation.navigate("Home");
    setCurrencySelected(false);
  }

  //
  return (
    <>
      {!isLoading ? (
        <View style={styles.container}>
          <Text style={styles.header}>
            Currency Selected: <Text style={styles.headerCur}>{currency}</Text>
          </Text>

          <ScrollView>
            {COUNTRIES.map((item) => (
              <Pressable
                style={[
                  styles.item,
                  currency === item.currency && {
                    backgroundColor: COLORS.g,
                  },
                ]}
                key={nanoid()}
                onPress={() =>
                  handleSelection(item.currency, item.country + item.currency)
                }
              >
                <Text style={styles.itemText}>{item.country}</Text>
                <Text style={styles.itemText}>{item.currency}</Text>
              </Pressable>
            ))}
          </ScrollView>

          {currencySelected && (
            <Pressable
              onPress={handlePressContinue}
              style={({ pressed }) => pressed && { opacity: 0.7 }}
            >
              <View style={[styles.button]}>
                <Text style={styles.buttonTxt}>Continue</Text>
              </View>
            </Pressable>
          )}
        </View>
      ) : (
        <Loading />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: 45,
  },
  header: {
    fontSize: SIZES.header,
    color: COLORS.l,
    paddingBottom: 14,
    borderBottomColor: COLORS.or,
    borderBottomWidth: 1,
    textAlign: "center",
  },
  headerCur: {
    color: COLORS.or,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  itemText: {
    paddingHorizontal: 12,
    color: COLORS.l,
    fontSize: SIZES.reg,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 25,
  },
  buttonTxt: {
    backgroundColor: COLORS.or,
    color: COLORS.bg,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: SIZES.reg,
    fontWeight: "bold",
    borderRadius: 8,
  },
});
