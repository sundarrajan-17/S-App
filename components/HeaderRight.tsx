import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { useRouter } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useProductStore } from "@/hooks/useProductStore";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HeaderRight = () => {
  const router = useRouter();

  const { isLoggedIn, orgId, token } = useProductStore();
  const handleClick = () => {
    // Your theme toggle logic here
    console.log(orgId, token);
  };
  return (
    <View style={styles.headerRight}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/Notifications")}
      >
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={toggleTheme}>
        <MaterialIcons
          name='dark-mode'
          size={24}
          color='black'
        />
      </TouchableOpacity> */}
      {isLoggedIn ? (
        <TouchableOpacity onPress={handleClick} style={{ alignSelf: "center" }}>
          <FontAwesome name="user-circle" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => router.push("/LogInSignUp")}
          >
            <View
              style={{
                backgroundColor: "#fff",
                padding: 13,
                borderRadius: 18,
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontFamily: "sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                Login/Signup
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: "row",
    padding: 5,
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
});
