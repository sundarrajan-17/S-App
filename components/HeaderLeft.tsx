import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HeaderLeft = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.headerLeft}>
      <FontAwesome name="plane" size={24} color="white" />
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  headerLeft: {
    padding: 10,
    // flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-around",
  },
});
