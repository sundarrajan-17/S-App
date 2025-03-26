import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const EditProfileScreen = ({ navigation }) => {
  // State for user details
  const [firstName, setFirstName] = useState("Sabrina");
  const [lastName, setLastName] = useState("Aryan");
  const [username, setUsername] = useState("@Sabrina");
  const [email, setEmail] = useState("@SabrinaAry208@gmailcom");
  const [phone, setPhone] = useState("+234 904 6470");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");

  return (
    <View style={styles.container}>
      {/* Back Button */}
      {/* <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity> */}

      {/* Profile Picture */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with actual image
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="camera-outline" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Edit Profile</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
        />

        {/* Dropdown Fields */}
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{birth || "Birth"}</Text>
          <Ionicons name="chevron-down" size={20} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>{gender || "Gender"}</Text>
          <Ionicons name="chevron-down" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Change Password Button */}
      <TouchableOpacity style={styles.changePasswordButton}>
        <Text style={styles.changePasswordText}>Change Password</Text>
        <Ionicons name="lock-closed-outline" size={18} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.changePasswordButton}>
        <Text style={styles.changePasswordText}>Save</Text>
        <Ionicons name="lock-closed-outline" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#bbb", padding: 10 },
  backButton: { position: "absolute", top: 20, left: 20 },
  profileSection: { alignItems: "center", marginTop: 40 },
  profileImage: { width: 50, height: 50, borderRadius: 50 },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 10,
    backgroundColor: "#bbb",
    padding: 6,
    borderRadius: 15,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  inputContainer: { backgroundColor: "#fff", padding: 15, borderRadius: 10 },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownText: { color: "gray", fontSize: 16 },
  changePasswordButton: {
    flexDirection: "row",
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  changePasswordText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
});

export default EditProfileScreen;
