import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { COLORS, SIZES } from "../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../store/features/expensesSlice";
import ToggleButtons from "../components/ToggleButtons";
import { addIncome } from "../store/features/incomesSlice";
import CategoriesList from "../components/CategoriesList";
import AddTransactionBtn from "../components/ui/AddTransactionBtn";

export default function NewTransactionScreen({ navigation }) {
  //
  const dispatch = useDispatch();
  const currentSection = useSelector((state) => state.currentSection.value);
  const currency = useSelector((state) => state.currency.value);
  //

  const [isFocused, setIsFocused] = useState(false);
  const [amount, setAmount] = useState(null);
  const [comment, setComment] = useState("");
  const [iconName, setIconName] = useState("");
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [selectedId, setSelectedId] = useState("");
  //
  function handleCategorySelect({ iconName, color, title, selectedId }) {
    setIconName(iconName);
    setColor(color);
    setTitle(title);
    setSelectedId(selectedId);
  }
  //
  const itemData = {
    id: Date.now(),
    amount: amount,
    comment: comment,
    iconName: iconName,
    color: color,
    title: title,
  };
  //
  function handleAddTransaction() {
    if (amount && !isNaN(amount) && selectedId) {
      if (currentSection === "expenses" && selectedId.startsWith("e")) {
        dispatch(addExpense(itemData));
      } else if (currentSection === "incomes" && selectedId.startsWith("i")) {
        dispatch(addIncome(itemData));
      } else return;
      goBack();
    }
  }
  //
  function goBack() {
    navigation.goBack();
    setAmount(null);
    setSelectedId("");
    setComment("");
    setIsFocused(false);
  }
  return (
    <View style={styles.containerA}>
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <ToggleButtons />
        <ScrollView>
          <View style={styles.mainBody}>
            <View style={styles.amount}>
              <TextInput
                style={[
                  styles.amountInp,
                  isFocused && { borderBottomColor: COLORS.b },
                ]}
                keyboardType="numeric"
                maxLength={8}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={amount}
                onChangeText={(t) => setAmount(t.trim())}
              />
              <Text style={styles.amountCur}>{currency}</Text>
            </View>
            {!amount && (
              <Text style={styles.warning}>
                *amount field is required to add a transaction!
              </Text>
            )}

            <CategoriesList handleCategorySelect={handleCategorySelect} />
            {!selectedId && (
              <Text style={styles.warning}>
                *select a category to add a transaction!
              </Text>
            )}

            <TextInput
              style={styles.commentInpt}
              multiline={true}
              maxLength={200}
              numberOfLines={9}
              placeholder="Comment"
              placeholderTextColor={COLORS.e}
              onChangeText={(t) => setComment(t)}
            />
          </View>
        </ScrollView>
      </Pressable>
      <AddTransactionBtn
        handleAddTransaction={handleAddTransaction}
        amount={amount}
        currentSection={currentSection}
        selectedId={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerA: {
    flex: 1,
    borderTopColor: COLORS.d,
    borderTopWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    paddingTop: 20,
  },
  mainBody: {
    marginTop: 15,
  },
  amount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  amountCur: {
    color: COLORS.b,
    fontSize: SIZES.header,
    marginLeft: 4,
  },
  amountInp: {
    fontSize: SIZES.reg,
    width: 100,
    textAlign: "center",
    borderBottomColor: COLORS.e,
    borderBottomWidth: 2,
    color: COLORS.l,
  },

  commentInpt: {
    alignSelf: "center",
    width: 350,
    height: 100,
    borderColor: COLORS.d,
    borderWidth: 0.8,
    padding: 10,
    textAlignVertical: "top",
    marginVertical: 10,
    color: COLORS.l,
    borderRadius: 14,
  },
  warning: {
    fontSize: 11,
    textAlign: "center",
    color: COLORS.r,
  },
});
