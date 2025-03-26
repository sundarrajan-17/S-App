import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

const ProductDetailsScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEW PRODUCT</Text>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          style={styles.image}
        />
        <TouchableOpacity style={styles.addImageButton}>
          <Text style={styles.addImageText}>+ Add Image</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Add description" />
      <TextInput style={styles.input} placeholder="Add remarks" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("SuccessScreen")}
      >
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: { width: 80, height: 80, marginRight: 10 },
  addImageButton: { backgroundColor: "#f0f0f0", padding: 10, borderRadius: 5 },
  addImageText: { color: "#555" },
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

export default ProductDetailsScreen;
