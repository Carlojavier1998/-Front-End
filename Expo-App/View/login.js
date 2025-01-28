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
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default function login() {
  const { width, height } = Dimensions.get("window");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Pass = "123456";
  const user = "Admin";
  function SvgTop() {
    return (
      <Svg height="200" width="100%" viewBox="0 0 1440 320" style={styles.svg}>
        <Path
          fill="#4A90E2"
          d="M0,96L30,117.3C60,139,120,181,180,186.7C240,192,300,160,360,149.3C420,139,480,149,540,165.3C600,181,660,203,720,218.7C780,235,840,245,900,224C960,203,1020,149,1080,149.3C1140,149,1200,203,1260,245.3C1320,288,1380,320,1410,336L1440,352L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </Svg>
    );
  }
  const login = () => {
    if ([username, password].includes("")) {
      Alert.alert("Error", "there are unfilled fields", [
        { text: "Ok" },
        { text: "Cancel" },
      ]);
    } else if (username === user && password === Pass) {
      Alert.alert("successful", "welcome", [
        { text: "Ok" },
        { text: "Cancel" },
      ]);
    } else {
      Alert.alert("Error", "Incorrect password or username", [
        { text: "Ok" },
        { text: "Cancel" },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <SvgTop />
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subtitulo}>sing In to yoy¿ur account</Text>
      <TextInput
        style={styles.textInput}
        placeholder="user"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textInput}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button style={styles.btn_login} mode="contained" onPress={login}>
        Sign in
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 80,
    color: "#34434D",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 20,
    color: "gray",
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 32,
    backgroundColor: "#fff",
  },
  btn_login: {
    marginTop: 20,
    width: 320,
    backgroundColor: "#4682B4",
  },
});
