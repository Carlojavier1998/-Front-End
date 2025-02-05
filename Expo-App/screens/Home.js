import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";
import { Svg, Rect, Circle, Line } from "react-native-svg";

const Home = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [username, setUsername] = useState("Admin");
  const [password, setPassword] = useState("");
  const Pass = "123456";
  const user = "Admin";

  const verification = () => {
    if ([username, password].includes("")) {
      Alert.alert("Error", "there are unfilled fields", [
        { text: "Ok" },
        { text: "Cancel" },
      ]);
    } else if (username === user && password === Pass) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Error", "Incorrect password or username", [
        { text: "Ok" },
        { text: "Cancel" },
      ]);
    }
  };
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
      <Text style={styles.subtitles}>Discover Your Dream Job here</Text>
      <Text style={styles.paragraph}>
        Explore all the existing job roles based on your interest and study
        major
      </Text>
      <View style={styles.containerBtn}>
        <Button
          style={styles.btn_login}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.txt_login}>Sign in</Text>
        </Button>
        <Button
          style={styles.btn_Register}
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.txt_register}>Register</Text>
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  subtitles: {
    fontSize: 30,
    color: "#F5511E",
    fontWeight: "bold",
    marginLeft: 60,
    marginRight: 60,
    textAlign: "center",
    marginBottom: 30,
  },
  paragraph: {
    fontSize: 14,
    color: "#000000",
    marginLeft: 60,
    marginRight: 60,
    textAlign: "center",
    marginBottom: 30,
  },
  btn_login: {
    marginTop: 20,
    width: 150,
    backgroundColor: "#F5511E",
    borderRadius: 10,
    margin: 10,
  },
  btn_Register: {
    marginTop: 20,
    width: 150,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    margin: 10,
  },
  txt_login: {
    fontSize: 16,
    color: "#ffffff",
  },
  txt_register: {
    fontSize: 16,
    color: "#000000",
  },
});
export default Home;
