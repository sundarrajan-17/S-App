import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ProfileScreen = () => {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>My Account</Text>
        <Ionicons name="settings-outline" size={24} color="white" />
      </View> */}

      <View style={styles.menu}>
        <MenuItem
          icon="person-outline"
          text="My Profile"
          onPress={() => router.push("/ProfilePage")}
        />
        <MenuItem
          icon="cart-outline"
          text="My Orders"
          onPress={() => router.push("/history")}
        />
        <MenuItem
          icon="lock-closed-outline"
          text="Change Password"
          onPress={() => router.push("/history")}
        />
        <MenuItem
          icon="notifications-outline"
          text="Notifications"
          onPress={() => router.push("/Notifications")}
        />
        <MenuItem icon="chatbubble-outline" text="Contact Preferences" />
        <MenuItem icon="settings-outline" text="Settings" />
        <MenuItem icon="help-circle-outline" text="Help & FAQs" />
      </View>

      <TouchableOpacity style={styles.signOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const MenuItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Ionicons name={icon} size={24} color="darkgreen" />
    <Text style={styles.menuText}>{text}</Text>
    <Ionicons name="chevron-forward" size={20} color="gray" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#bbb" },
  header: {
    backgroundColor: "darkgreen",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { color: "white", fontSize: 22, fontWeight: "bold" },
  menu: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  menuText: { flex: 1, fontSize: 16, marginLeft: 10, color: "#333" },
  signOut: {
    backgroundColor: "#333",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  signOutText: { color: "#bbb", fontSize: 16, fontWeight: "bold" },
});

export default ProfileScreen;
