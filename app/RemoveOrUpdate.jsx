import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useProductStore } from "@/hooks/useProductStore";

// const productsData = [
//   {
//     name: "Battery-4s",
//     QuantityAvailable: 10,
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     name: "Battery-6s",
//     QuantityAvailable: 40,
//     image: "https://picsum.photos/200/300",
//   },
// ];

const ProductCard = ({ product, count, increment, decrement }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={[styles.name, styles.textStyle]}>{product.name}</Text>
        <Text style={[styles.info, styles.textStyle]}>
          Available: {product.QuantityAvailable}
        </Text>
      </View>
      {count === 0 ? (
        <TouchableOpacity style={styles.addButton} onPress={increment}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={decrement} style={styles.counterButton}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{count}</Text>
          <TouchableOpacity onPress={increment} style={styles.counterButton}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const RemoveProducts = () => {
  const { id, name } = useLocalSearchParams();
  console.log("id nameeeeeeeeeee", id, name);
  const [counts, setCounts] = useState({}); // Store count for each product

  const [removeProduct, setRemoveProduct] = useState({});

  // const { getProducts } = useProductStore();
  const { products } = useProductStore();

  // useFocusEffect(() => getProducts());

  const increment = (product) => {
    setCounts((prev) => ({
      ...prev,
      [product.name]: Math.min(
        (prev[product.name] || 0) + 1,
        product.QuantityAvailable
      ),
    }));
  };

  const decrement = (product) => {
    setCounts((prev) => ({
      ...prev,
      [product.name]: Math.max((prev[product.name] || 0) - 1, 0),
    }));
  };

  return (
    <View style={{ backgroundColor: "#bbb" }}>
      <Text style={[styles.header]}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            count={counts[item.name] || 0}
            increment={() => increment(item)}
            decrement={() => decrement(item)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
      <Button title="Remove/Update" onPress={() => console.log(counts)} />
    </View>
  );
};

export default RemoveProducts;

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  header: {
    fontSize: 30,
    paddingLeft: 20,
    fontWeight: "700",
    color: "#333",
  },
  textStyle: {
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
