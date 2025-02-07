import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Svg, Rect, Circle, Line } from "react-native-svg";
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
const Welcomen = () => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  function SvgTop() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="200"
        height="200"
      >
        <Rect x="10" y="35" width="44" height="2" fill="#B0BEC5" />
        <Rect x="10" y="37" width="44" height="15" fill="#CFD8DC" />
        <Rect x="15" y="39" width="34" height="11" fill="#ECEFF1" />
        <Rect x="5" y="20" width="54" height="20" fill="#90A4AE" />
        <Rect x="10" y="23" width="44" height="15" fill="#FFFFFF" />
        <Circle cx="32" cy="12" r="8" fill="#FFCCBC" />
        <Rect x="26" y="22" width="12" height="6" fill="#FFC107" />
        <Rect x="20" y="29" width="24" height="2" fill="#B0BEC5" />
        <Rect x="36" y="20" width="2" height="6" fill="#B0BEC5" />
        <Rect x="26" y="20" width="2" height="6" fill="#B0BEC5" />
        <Rect x="32" y="20" width="2" height="6" fill="#B0BEC5" />
        <Line x1="5" y1="56" x2="59" y2="56" stroke="#B0BEC5" strokeWidth="2" />
      </Svg>
    );
  }
  return (
    <View style={styles.container}>
      <SvgTop />
      <Text style={styles.title}>Bienvenido</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
});

export default Welcomen;
