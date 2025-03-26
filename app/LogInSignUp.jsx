import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import { useProductStore } from "@/hooks/useProductStore";
import axios from "axios";

export default function AuthScreen() {
  const [isOrg, setIsOrg] = useState(true);
  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { setIsLogIN, setOrgId, orgId, token } = useProductStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const setOrgSelection = () => {
    setIsUser(false);
    setIsOrg(true);
  };

  const setUserSelection = () => {
    setIsUser(true);
    setIsOrg(false);
  };

  const LoginUser = async (data) => {
    console.log(data);
    await axios
      .post("http://192.168.6.164:8001/auth/user/login", data)
      .then((response) => {
        // console.log(response.data.user.orgId);
        // console.log(response.data.token);
        setIsLogIN();
        router.push("/(tabs)");
      })
      .catch((error) => alert(error.response.data.message));

    // console.log(response);
    // isLoggedIn = true;
  };

  const LoginOrg = async (data) => {
    setLoading(true);
    console.log(data);
    axios
      .post("http://192.168.6.164:8001/auth/org/login", data)
      .then((response) => {
        setIsLogIN();
        // console.log(response);
        console.log(response.data.user.orgId);
        console.log(response.data.token);
        setOrgId(response.data.user.orgId, response.data.token);
        // setTimeout(() => {}, 5000);
        console.log(orgId, token);
        router.push("/(tabs)");
      })
      .catch((error) => alert(error.response.data.message));

    setLoading(false);

    // console.log(response);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Login</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Checkbox
            status={isOrg ? "checked" : "unchecked"}
            onPress={setOrgSelection}
          />
          <Text style={{ fontSize: 20, fontweight: 500 }}>Org</Text>
          <Checkbox
            status={isUser ? "checked" : "unchecked"}
            onPress={setUserSelection}
          />
          <Text style={{ fontSize: 20, fontweight: 500, textAlign: "center" }}>
            User
          </Text>
        </View>
        {/* Email Field */}
        <Controller
          control={control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}
        {/* Password Field */}
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" },
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
        {/* Submit Button */}
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <TouchableOpacity
            style={[styles.button, { borderWidth: 1, borderColor: "red" }]}
            onPress={handleSubmit(
              isOrg
                ? LoginOrg
                : isUser
                ? LoginUser
                : alert("Please Select User/Org CheckBox")
            )}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#bbb",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    borderColor: "#aaa",
  },
  button: {
    backgroundColor: "#6688aa",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    color: "#0a7ea4",
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 5,
  },
});
