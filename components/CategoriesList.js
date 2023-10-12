import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { EXPENSESCATS, INCOMESCATS } from "../constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CategoriesList({
  currentSection,
  handleCategorySelect,
}) {
  //
  const [selectedId, setSelectedId] = useState(null);
  //
  function handleSelection({ id, iconName, title, color, selectedId }) {
    handleCategorySelect({ id, iconName, title, color, selectedId });
    setSelectedId(id);
  }
  //
  return (
    <View style={styles.container}>
      {(currentSection === "expenses" ? EXPENSESCATS : INCOMESCATS).map(
        (item) => (
          <View key={item.id.toString()}>
            <View style={styles.sContainer}>
              <Pressable
                onPress={() =>
                  handleSelection({
                    iconName: item.iconName,
                    title: item.title,
                    color: item.color,
                    id: item.id,
                    selectedId: item.id,
                  })
                }
                style={[
                  styles.item,
                  selectedId === item.id && {
                    backgroundColor: `${item.color}aa`,
                  },
                ]}
              >
                <View
                  style={[styles.iconCont, { backgroundColor: item.color }]}
                >
                  <FontAwesome5
                    name={item.iconName}
                    size={40}
                    color={"#ffffff"}
                  />
                </View>
                <Text style={styles.text}>{item.title}</Text>
              </Pressable>
            </View>
          </View>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  sContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    borderRadius: 14,
    alignItems: "center",
    padding: 4,
  },
  iconCont: {
    width: 65,
    height: 65,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
