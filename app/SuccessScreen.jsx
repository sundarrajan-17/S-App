import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const SuccessScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>🎉 AWESOME!</Text>
      <Text>The new product has been successfully saved!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.buttonText}>VIEW PRODUCT</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>START SELL</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  successText: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },
});

export default SuccessScreen;
