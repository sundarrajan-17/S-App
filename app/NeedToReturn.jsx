import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const products = [
  {
    name: "Battery-4s",
    QuantityAvailable: 10,
    image: "https://picsum.photos/200/300",
    deadline: "10-04-2025",
  },
  {
    name: "Battery-6s",
    QuantityAvailable: 40,
    image: "https://picsum.photos/200/300",
    deadline: "25-03-2025",
  },
];

// const colorScheme = useColorScheme();

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={[styles.name, styles.textStyle]}>{product.name}</Text>
        <Text style={[styles.info, styles.textStyle]}>
          Quantity: {product.QuantityAvailable}
        </Text>
        <Text style={[styles.info, styles.textStyle]}>
          Deadline: {product.deadline}
        </Text>
      </View>
    </View>
  );
};

const Products = () => {
  const getHeader = () => {
    return (
      <Text
        style={[
          styles.info,
          styles.textStyle,
          { fontSize: 30, paddingLeft: 20, fontWeight: 700 },
        ]}
      >
        Need To Return Products
      </Text>
    );
  };
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ProductCard product={item} />}
      contentContainerStyle={styles.listContainer}
      ListHeaderComponent={getHeader}
      style={{ backgroundColor: "#bbb" }}
    />
  );
};

export default Products;

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  textStyle: {
    // color: Colors[colorScheme ?? "light"].text,
    color: "#333",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#888",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    margin: 10,
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  info: {
    color: "gray",
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  counterButton: {
    padding: 8,
  },
  counterText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
});
