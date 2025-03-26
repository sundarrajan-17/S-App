import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useProductStore } from "@/hooks/useProductStore";
import { useFocusEffect } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { isLoaded } from "expo-font";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);

  const increment = (quantity) => {
    {
      quantity < count + 1 ? setCount(count) : setCount(count + 1);
    }
  };
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  return (
    <View style={styles.card}>
      {/* <Image source={{ uri: product.image }} style={styles.image} /> */}
      <View style={styles.details}>
        <Text style={[styles.name, styles.textStyle]}>{product.name}</Text>
        <Text style={[styles.info, styles.textStyle]}>
          Available: {product.quantity}
        </Text>
        <Text style={[styles.info, styles.textStyle]}>
          Description: {product.description}
        </Text>
      </View>
      {count === 0 ? (
        // Add Button
        <TouchableOpacity style={[styles.addButton]} onPress={increment}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      ) : (
        // Counter Buttons
        <View style={styles.counterContainer}>
          <TouchableOpacity
            onPress={() => decrement(product.quantity)}
            style={styles.counterButton}
          >
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.counterText]}>{count}</Text>
          <TouchableOpacity
            onPress={() => increment(product.quantity)}
            style={styles.counterButton}
          >
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const Products = () => {
  // // const products = useProductStore((state) => state.getProducts);
  // const productsList = useProductStore((state) => state.products);
  const [refreshing, setRefreshing] = useState(false);

  // useEffect(() => {
  //   products();
  // }, []);
  const { products, getProducts } = useProductStore();
  useFocusEffect(() => {
    getProducts();
  });

  // if (!useProductStore.getState().isLoaded) {
  //   getProducts(); // Fetch only on first access
  // }
  const SubmitBooking = () => {
    console.log("Submitted");
    console.log(products);
  };

  const onRefresh = () => {
    setRefreshing(true);
    getProducts();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000); // Refresh indicator will be visible for at least 1 second
  };

  const getHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={[
            styles.info,
            styles.textStyle,
            { fontSize: 30, paddingLeft: 20, fontWeight: 700 },
          ]}
        >
          Products
        </Text>
        <TouchableOpacity onPress={onRefresh} style={{ paddingRight: 14 }}>
          <Feather name="refresh-cw" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  const getFooter = () => {
    return (
      <Button title="Book" onPress={SubmitBooking} style={{ margin: 5 }} />
    );
  };

  // console.log("productsss", productsList);

  // const products = useProductStore((state) => state.products);
  return (
    <ScrollView
      style={{ backgroundColor: "#bbb", margin: 5 }}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {products === undefined ? (
        <Text style={[styles.name, styles.textStyle]}>Loading products...</Text>
      ) : isLoaded && products.length === 0 ? (
        <Text style={[styles.name, styles.textStyle]}>
          No Products To Display Add Some Products
        </Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={getHeader}
          ListFooterComponent={getFooter}
          scrollEnabled={false}
        />
      )}
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  listContainer: {
    padding: 13,
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
