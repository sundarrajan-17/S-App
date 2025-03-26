import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import { useProductStore } from "@/hooks/useProductStore";

const AddProductScreen = () => {
  const router = useRouter();

  const { orgId, token } = useProductStore();

  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    description: "",
    orgId: orgId,
    category: "",
  });

  // const { addProduct } = useProductStore();

  const handleAddProduct = async (newProduct) => {
    console.log(newProduct);
    await axios
      .post("http://192.168.6.164:8001/products/create", newProduct, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => router.push("/SuccessScreen"))
      .catch((error) => alert(error.response.data.message));

    // console.log(response);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEW PRODUCT</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={
          (value) =>
            setProduct({
              ...product,
              name: value,
            })
          // console.log(event.target.value)
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Quantity"
        onChangeText={(value) =>
          setProduct({
            ...product,
            quantity: value,
          })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={
          (value) =>
            setProduct({
              ...product,
              description: value,
            })
          // console.log(event)
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        onChangeText={(value) =>
          setProduct({
            ...product,
            category: value,
          })
        }
      />
      {/* <TextInput style={styles.input} placeholder="Enter country of origin" />
      <TextInput style={styles.input} placeholder="Enter return date" /> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddProduct(product)}
      >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default AddProductScreen;
