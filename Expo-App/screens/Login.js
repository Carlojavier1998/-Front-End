import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import axios from "axios";
import { Button, TextInput } from "react-native-paper";

const Login = ({ navigation }) => {
  const [correo, setCorreo] = useState("aloga.carlo.lopez@gmail.com");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = async () => {
    const user = {
      correo,
      contraseña,
    };
    if ([correo, contraseña].includes("")) {
      Alert.alert("Error", "there are unfilled fields", [
        { text: "Ok" },
        { text: "Cancel" },
      ]);
      return;
    }
    try {
      const { data } = await axios.post(
        "https://apiweb-app.somee.com/api/Auth/login",
        user
      );
      const res = JSON.parse(data);
      console.log("consola" + res);
      if (res.status.includes("Successful")) {
        Alert.alert("Successful", "Welcome", [
          { text: "Ok" },
          { text: "Cancel" },
        ]);
        navigation.navigate("Menupanel");
      }
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login here</Text>
      <Text style={styles.subtitulo}>Welcomen back your've be missed!</Text>
      <TextInput
        label="Email"
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
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        label="Password"
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
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
      />
      <Button style={styles.btn_login} mode="contained" onPress={handleLogin}>
        Sign in
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
export default Login;
