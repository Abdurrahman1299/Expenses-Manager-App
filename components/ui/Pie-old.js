// import { StyleSheet, Text, View } from "react-native";
// import NumberFormat from "../utils/NumberFormat";
// // import PieChart from "react-native-pie-chart";
// import { COLORS } from "../../constants/colors";

// const heightWidth = 240;
// export default function Pie({
//   currentSection,
//   accuExpenses,
//   accuIncomes,
//   totalExpenses,
//   totalIncomes,
// }) {
//   //
//   console.log(accuExpenses);

//   // function expensesInfo() {
//   //   let series = [100];
//   //   let sliceColors = [COLORS.g];
//   //   if (accuExpenses.length !== 0) {
//   //     series = accuExpenses.map((item) => item.amount);
//   //     sliceColors = accuExpenses.map((item) => item.color);
//   //   }
//   //   return { series, sliceColors };
//   // }
//   // //

//   // function incomesInfo() {
//   //   let series = [100];
//   //   let sliceColors = [COLORS.g];
//   //   if (accuIncomes.length !== 0) {
//   //     series = accuIncomes.map((item) => item.amount);
//   //     sliceColors = accuIncomes.map((item) => item.color);
//   //   }
//   //   return { series, sliceColors };
//   // }
//   // //

//   // const series =
//   //   currentSection === "expenses"
//   //     ? expensesInfo().series
//   //     : incomesInfo().series;

//   // const sliceColors =
//   //   currentSection === "expenses"
//   //     ? expensesInfo().sliceColors
//   //     : incomesInfo().sliceColors;

//   // const totalValue = data.reduce((total, slice) => total + slice.value, 0);

//   const data = accuExpenses;
//   return (
//     <View style={styles.pieContainer}>
//       {data.map((slice, index) => {
//         const percentage = (slice.value / totalExpenses) * 100;
//         const rotation =
//           index === 0
//             ? 0
//             : data
//                 .slice(0, index)
//                 .reduce((acc, s) => acc + (s.value / totalExpenses) * 360, 0);

//         console.log(slice);
//         return (
//           <View
//             key={index}
//             style={[
//               styles.pieSlice,
//               {
//                 borderTopColor: slice.color,
//                 transform: [{ rotate: `${rotation}deg` }],
//               },
//             ]}
//           >
//             <Text style={styles.sliceTitle}>{slice.title}</Text>
//           </View>
//         );
//       })}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // text: {
//   //   position: "absolute",
//   //   height: heightWidth,
//   //   width: heightWidth,
//   //   justifyContent: "center",
//   //   alignItems: "center",
//   // },

//   //

//   pieContainer: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 50,
//     borderColor: "transparent",
//   },
//   pieSlice: {
//     width: 0,
//     height: 0,
//     borderStyle: "solid",
//     borderRightWidth: 50,
//     borderTopWidth: 50,
//     borderTopLeftWidth: 50,
//     position: "absolute",
//     left: 0,
//     top: 0,
//   },
//   sliceTitle: {
//     position: "absolute",
//     top: 50,
//     left: 0,
//     width: "100%",
//     textAlign: "center",
//   },
// });
