import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Searchbar } from "react-native-paper";

const Menupanel = () => {
  const [produc, setProduc] = useState([]);
  const [search, setSearch] = useState("");
  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    getProducto();
  }, []);
  const getProducto = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduc(data);
        console.log(data);
      });
  };
  const onSearchChange = (searchbar) => {
    setSearch(searchbar);
  };
  const filteredProducts = produc.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search..."
        selectionColor={"#008000"}
        color="black"
        iconColor="#094293"
        value={search}
        onChangeText={onSearchChange}
        style={{
          backgroundColor: "#FFFFFF",
          margin: 4,
          marginTop: 100,
          marginBottom: -70,
        }}
      />
      <Text style={styles.titulo}>productListingScreen</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContarner}>
            <Image source={{ uri: item.image }} style={styles.imagen} />
            <Text
              style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}
            >
              {item.title}
            </Text>
            <Text style={{ fontSize: 18, textAlign: "center" }}>
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
    textAlign: "center",
    marginTop: 100,
    marginBottom: 50,
  },
});
export default Menupanel;
