import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const Register= ({ navigation }) => {
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
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login here</Text>
      <Text style={styles.subtitulo}>Welcomen back your've be missed!</Text>
      <TextInput
        label="User"
        selectionColor={"#008000"}
        cursorColor={"#008000"}
        underlineColor={"transparent"}
        textColor="#000000"
        activeUnderlineColor="#4B0082"
        mode="flat"
        textContentType="oneTimeCode"
        style={{
          width: 300,
          textDecorationLine: "line-through",
          borderRadius: 20,
          backgroundColor: "#ffffff",
          paddingVertical: 1,
          marginRight: "auto",
          marginLeft: "auto",
        }}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        label="User"
        selectionColor={"#008000"}
        cursorColor={"#008000"}
        underlineColor={"transparent"}
        textColor="#000000"
        activeUnderlineColor="#4B0082"
        mode="flat"
        textContentType="oneTimeCode"
        style={{
          width: 300,
          textDecorationLine: "line-through",
          borderRadius: 20,
          backgroundColor: "#ffffff",
          paddingVertical: 1,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 5,
        }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        label="User"
        selectionColor={"#008000"}
        cursorColor={"#008000"}
        underlineColor={"transparent"}
        textColor="#000000"
        activeUnderlineColor="#4B0082"
        mode="flat"
        textContentType="oneTimeCode"
        style={{
          width: 300,
          textDecorationLine: "line-through",
          borderRadius: 20,
          backgroundColor: "#ffffff",
          paddingVertical: 1,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 5,
        }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
       <TextInput
        label="User"
        selectionColor={"#008000"}
        cursorColor={"#008000"}
        underlineColor={"transparent"}
        textColor="#000000"
        activeUnderlineColor="#4B0082"
        mode="flat"
        textContentType="oneTimeCode"
        style={{
          width: 300,
          textDecorationLine: "line-through",
          borderRadius: 20,
          backgroundColor: "#ffffff",
          paddingVertical: 1,
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 5,
        }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button style={styles.btn_login} mode="contained" onPress={verification}>
      create account
      </Button>
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
  titulo: {
    fontSize: 30,
    color: "#F5511E",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 20,
    color: "#000000",
    margin: 80,
    textAlign: "center",
    bottom: 70,
  },
  btn_login: {
    marginTop: 20,
    width: 300,
    backgroundColor: "#F5511E",
    borderRadius: 10,
    marginRight: "auto",
    marginLeft: "auto",
  },
});
export default Register;
