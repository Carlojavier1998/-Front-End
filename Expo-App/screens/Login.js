import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, ActivityIndicator } from "react-native";
import { Button, TextInput } from "react-native-paper";

const Login = ({ navigation }) => {
  const [correo, setCorreo] = useState("aloga.carlo.lopez@gmail.com");
  const [contraseña, setContraseña] = useState("");
  const [show, setShow] = useState(false);
  const handleLogin = async () => {
    const user = {
      correo,
      contraseña,
    };
    if ([correo, contraseña].includes("")) {
      Alert.alert("Error", "Hay campos sin completar", [
        { text: "Ok" },
        { text: "Cancel" },
      ]);
      return;
    }
    loadIt();
    try {
      const response = await fetch(
        "https://apiweb-app.somee.com/api/Auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      console.log("Respuesta de la API:", data);
      switch (data.status) {
        case "Successful":
          navigation.navigate("Menupanel");
          break;
        case "FailedAttempt":
          Alert.alert("Error", "Contraseña incorrecta.", [{ text: "Ok" }]);
          break;
        case "InvalidAccount":
          Alert.alert("Error", "La cuenta no existe.", [{ text: "Ok" }]);
          break;
        case "NonActiveAccount":
          Alert.alert("Error", "Cuenta no activa. Verifica tu correo.", [
            { text: "Ok" },
          ]);
          break;
        default:
          Alert.alert("Error", "Estado inesperado.", [{ text: "Ok" }]);
          break;
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      Alert.alert("Error", "No se pudo realizar la solicitud.");
    } finally {
      setShow(false);
    }
  };
  const loadIt = () => {
    setShow(true);
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
      <View>
        {show ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button
            style={styles.btn_login}
            mode="contained"
            onPress={handleLogin}
          >
            Sign in
          </Button>
        )}
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
