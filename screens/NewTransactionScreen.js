import {
  Keyboard,
  Modal,
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
import SemiCircle from "../components/ui/SemiCircle";
import CategoriesList from "../components/CategoriesList";
import GobackBtn from "../components/ui/GobackBtn";
import AddTransactionBtn from "../components/ui/AddTransactionBtn";

export default function NewTransactionScreen({
  currentSection,
  isVisible,
  modalHidden,
  expensesSection,
  incomesSection,
}) {
  //
  const dispatch = useDispatch();
  //
  const currency = useSelector((state) => state.currency.value);
  const [isFocused, setIsFocused] = useState(false);
  const [amount, setAmount] = useState(null);
  const [comment, setComment] = useState("");
  const [iconName, setIconName] = useState(null);
  const [color, setColor] = useState(null);
  const [title, setTitle] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  //
  function handleCategorySelect({ iconName, color, title, selectedId }) {
    setIconName(iconName);
    setColor(color);
    setTitle(title);
    setSelectedId(selectedId);
  }
  //
  function dispatchExpenses() {
    dispatch(
      addExpense({
        id: Date.now(),
        amount: amount,
        comment: comment,
        iconName: iconName,
        color: color,
        title: title,
      })
    );
    handleGoback();
  }
  function dispatchIncomes() {
    dispatch(
      addIncome({
        id: Date.now(),
        amount: amount,
        comment: comment,

        iconName: iconName,
        color: color,
        title: title,
      })
    );
    handleGoback();
  }
  //
  function handleAddTransaction() {
    if (amount && amount.trim() !== "" && !isNaN(amount) && selectedId) {
      if (currentSection === "expenses" && selectedId.startsWith("e")) {
        dispatchExpenses();
      } else if (currentSection === "incomes" && selectedId.startsWith("i")) {
        dispatchIncomes();
      }
    }
  }
  //
  function handleGoback() {
    modalHidden();
    setAmount(null);
    setSelectedId("");
    setComment("");
  }
  return (
    <Modal visible={isVisible} animationType="slide">
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <SemiCircle />
        <GobackBtn handleGoback={handleGoback} />
        <ToggleButtons
          expensesSection={expensesSection}
          incomesSection={incomesSection}
          currentSection={currentSection}
        />
        <ScrollView>
          <View style={styles.mainBody}>
            <View style={styles.amount}>
              <TextInput
                style={[
                  styles.amountInp,
                  isFocused && { borderBottomColor: COLORS.b },
                ]}
                placeholder={isFocused ? "" : "0"}
                placeholderTextColor={COLORS.e}
                keyboardType="numeric"
                maxLength={8}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={amount}
                onChangeText={(t) => setAmount(t)}
              />
              <Text style={styles.amountCur}>{currency}</Text>
            </View>

            <CategoriesList
              currentSection={currentSection}
              handleCategorySelect={handleCategorySelect}
            />

            <View>
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
          </View>
        </ScrollView>
      </Pressable>
      <AddTransactionBtn
        handleAddTransaction={handleAddTransaction}
        amount={amount}
        currentSection={currentSection}
        selectedId={selectedId}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: "center",
    paddingTop: 60,
  },

  mainBody: {
    marginTop: 15,
  },
  amount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
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
});
