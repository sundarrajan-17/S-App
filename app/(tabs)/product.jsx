import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={{
        backgroundColor: "#bbb",
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 40,
          gap: 15,
          backgroundColor: "#bbb",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "fantasy",
              fontSize: 24,
              fontWeight: "700",
              color: "#777",
            }}
          >
            Welcome to CASR-Store!
            {"\n"}
          </Text>
          <Text
            style={{
              fontFamily: "fantasy",
              fontSize: 18,
              fontWeight: "300",
              lineHeight: 25,
              color: "#333",
            }}
          >
            Here You Can Easily buy and return stocks available in the store
            whenever you needs it.
          </Text>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={() => router.push("/Products")}>
            <View style={styles.button}>
              <Text
                style={{
                  color: "#333",
                  fontFamily: "fantasy",
                  fontSize: 15,
                  fontWeight: "700",
                  lineHeight: 20,
                }}
              >
                Book
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/NeedToReturn")}>
            <View style={styles.button}>
              <Text
                style={{
                  color: "#333",
                  fontFamily: "fantasy",
                  fontSize: 15,
                  fontWeight: "700",
                  lineHeight: 20,
                }}
              >
                Return
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)/history")}>
            <View style={styles.button}>
              <Text
                style={{
                  color: "#333",
                  fontFamily: "fantasy",
                  fontSize: 15,
                  fontWeight: "700",
                  lineHeight: 20,
                }}
              >
                History
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/AddProductScreen")}>
            <View style={styles.button}>
              <Text
                style={{
                  color: "#333",
                  fontFamily: "fantasy",
                  fontSize: 15,
                  fontWeight: "700",
                  lineHeight: 20,
                }}
              >
                Add
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/RemoveOrUpdate",
                params: { id: "1234", name: "sundar" },
              })
            }
          >
            <View style={styles.button}>
              <Text
                style={{
                  color: "#333",
                  fontFamily: "fantasy",
                  fontSize: 15,
                  fontWeight: "700",
                  lineHeight: 20,
                }}
              >
                Remove/Update
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textdecor: {
    width: 10,
    color: "white",
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    gap: 100,
  },
  buttoncontainer: {
    width: "100%",
    height: "100%",
    gap: 10,
    borderRadius: 10,
    paddingTop: 20,
    // alignSelf: "center",
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "#fff",
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
  },
  button: {
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#999",
    padding: 10,
    borderRadius: 20,
  },
  slide: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
