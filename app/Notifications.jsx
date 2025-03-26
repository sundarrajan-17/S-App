import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Using Ionicons for icons

// Define notification data structure

// Sample Notification Data
const notifications = [
  {
    id: "1",
    typeOfNot: "image",
    action: "added",
    filename: "WebUI.Img",
    folder: "Backup folder",
    time: "2 Min Ago",
    daysAgo: "Today",
  },
  {
    id: "2",
    typeOfNot: "video",
    action: "deleted",
    filename: "Tutorial.Mp4",
    folder: "AI tutorial",
    time: "2 Min Ago",
    daysAgo: "Today",
  },
  {
    id: "3",
    typeOfNot: "audio",
    action: "deleted",
    filename: "Pod.Aud",
    folder: "My Audio",
    time: "2 Days Ago",
    daysAgo: "2 Days Ago",
  },
  {
    id: "4",
    typeOfNot: "image",
    action: "deleted",
    filename: "App.Img",
    folder: "Backup folder",
    time: "2 Days Ago",
    daysAgo: "2 Days Ago",
  },
  {
    id: "5",
    typeOfNot: "video",
    action: "shared",
    filename: "Motion.Mp4",
    folder: "Backup folder",
    time: "2 Days Ago",
    daysAgo: "2 Days Ago",
  },
  {
    id: "6",
    typeOfNot: "audio",
    action: "deleted",
    filename: "Pod.Aud",
    folder: "Backup folder",
    time: "5 Days Ago",
    daysAgo: "5 Days Ago",
  },
];

// Function to get icons based on file typeOfNot
const getIcon = (typeOfNot) => {
  switch (typeOfNot) {
    case "image":
      return "image-outline";
    case "audio":
      return "musical-notes-outline";
    case "video":
      return "videocam-outline";
    default:
      return "document-text-outline";
  }
};

const NotificationPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Ionicons
              name={getIcon(item.typeOfNot)}
              size={24}
              color="white"
              style={styles.icon}
            />
            <View style={styles.details}>
              <Text style={styles.text}>
                You have {item.action}{" "}
                <Text style={styles.filename}>{item.filename}</Text>
              </Text>
              <Text style={styles.folder}>↳ {item.folder}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
        ListHeaderComponent={<Text style={styles.sectionHeader}>Today</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbb", // Dark theme
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
  filename: {
    fontWeight: "bold",
    color: "#C084FC",
  },
  folder: {
    color: "#A089C7",
    fontSize: 12,
  },
  time: {
    color: "#A089C7",
    fontSize: 12,
  },
});

export default NotificationPage;
