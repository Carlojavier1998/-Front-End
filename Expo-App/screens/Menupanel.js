import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Alert,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator
} from "react-native";
import {  Button ,Menu } from 'react-native-paper';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const Menupanel= () => {
  const [produc, setProduc] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    getProducto();
  }, []);

  const getProducto = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduc(data);
        console.log(data);
      });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>productListingScreen</Text>
      <FlatList
        data={produc}
        renderItem={({item}) => (
          <View style={styles.cardContarner}>
            <Image source={{uri: item.image}} style={styles.imagen} />
            <Text style={{fontSize:20,textAlign:"center",fontWeight:'bold'}}>
              {item.title}
            </Text>
            <Text style={{fontSize:18,textAlign:"center"}}>
             ${item.price}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  cardContarner: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  imagen: {
    height: 150,
    width: 150,
  },
  titulo: {
    fontSize: 20,
    color: "gray",
    textAlign:'center',
    marginTop:100,
    marginBottom:50
  },
});
export default Menupanel;
