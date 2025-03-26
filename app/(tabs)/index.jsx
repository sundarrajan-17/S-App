import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Image,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Avatar, Card } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";
import Image1 from "../../assets/images/smallDrone.jpg";
import Image2 from "../../assets/images/copter2.webp";
import Image3 from "../../assets/images/mediumDrone.jpg";
import { Dimensions } from "react-native";
import HeaderRight from "@/components/HeaderRight";

const { width, height } = Dimensions.get("window");

const data = [
  {
    id: "1",
    name: "XT60-MaleConnectors",
    numOfItems: "10",
    userId: "sharan152",
  },
  {
    id: "2",
    name: "XT60-FemaleConnectors",
    numOfItems: "10",
    userId: "sharan152",
  },
  { id: "3", name: "Propeller-18-inch", numOfItems: "5", userId: "jyothi1110" },
  { id: "4", name: "4s-Battey", numOfItems: "2", userId: "jaswa1706" },
  { id: "5", name: "Dhq4-Model", numOfItems: "1", userId: "sundar1708" },
];

const carouselData = [
  { item: "1", index: "0", image: Image1 },
  { item: "2", index: "1", image: Image2 },
  { item: "3", index: "2", image: Image3 },
];

export default function HomeScreen() {
  const router = useRouter();
  const [mode, setMode] = useState("dark");

  const setDarkLightMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <ScrollView
      style={[mode === "dark" ? styles.lightScrollView : styles.darkScrollView]}
    >
      <View style={[styles.contentcontainer]}>
        <Carousel
          data={carouselData}
          renderItem={({ item }) => <CarouselItem item={item} />}
          width={width}
          height={280}
          autoPlay={true}
          loop={true}
          autoPlayInterval={1000}
          scrollAnimationDuration={2000}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.8,
            parallaxScrollingOffset: 50,
            parallaxAdjacentItemScale: 0.8,
          }}
        />
        <View>
          <Card>
            <Card.Title title="HISTORY" titleVariant="labelLarge" />
            <Card.Content style={{ gap: 10 }}>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <View style={styles.listItem}>
                    <Text style={styles.item}>{item.userId}</Text>
                    <Text style={styles.item}>{item.name}</Text>
                    <Text style={styles.item}>{item.numOfItems}</Text>
                  </View>
                )}
                // nestedScrollEnabled={true}
                // style={{ height: 45 * 4 }} // Show only 3 items at a time
                scrollEnabled={false} // Ensure scrolling is enabled
                // ListHeaderComponent={<View><Text>History</Text></View>}
              />
              <TouchableHighlight
                onPress={() => router.push("/(tabs)/history")}
              >
                <View style={{ backgroundColor: "#ddd" }}>
                  <Text
                    style={{
                      color: "#000",
                      fontFamily: "fantasy",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    View History
                  </Text>
                </View>
              </TouchableHighlight>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableHighlight onPress={() => router.push("/Products")}>
            <View
              style={
                mode === "dark" ? styles.lightButtonView : styles.darkButtonView
              }
            >
              <Text
                style={
                  mode === "dark"
                    ? styles.contentdarkText
                    : styles.contentwhiteText
                }
              >
                Book
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => router.push("/NeedToReturn")}>
            <View
              style={
                mode === "dark" ? styles.lightButtonView : styles.darkButtonView
              }
            >
              <Text
                style={
                  mode === "dark"
                    ? styles.contentdarkText
                    : styles.contentwhiteText
                }
              >
                Return
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => router.push("/history")}>
            <View
              style={
                mode === "dark" ? styles.lightButtonView : styles.darkButtonView
              }
            >
              <Text
                style={
                  mode === "dark"
                    ? styles.contentdarkText
                    : styles.contentwhiteText
                }
              >
                History
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <HeaderRight />
    </ScrollView>
  );
}

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.CarouselImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  lightScrollView: {
    paddingTop: 10,
    backgroundColor: "#bbb",
    paddingBottom: 40,
  },
  darkScrollView: {
    paddingTop: 30,
    backgroundColor: "black",
  },
  whiteText: {
    color: "#000000",
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 25,
  },
  darkText: {
    color: "#000000",
    fontSize: 22,
    fontWeight: 500,
    lineHeight: 25,
  },
  contentwhiteText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 25,
  },
  contentdarkText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 25,
  },
  headercontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  contentcontainer: {
    flex: 1,
    gap: 20,
    padding: 10,
  },
  content: {
    margin: 10,
  },
  buttoncontainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "red",
    // margin: 5,
    // overflowY: "auto",
  },
  darkButtonView: {
    backgroundColor: "#000000",
    margin: 5,
    padding: 20,
    borderRadius: 10,
  },
  lightButtonView: {
    backgroundColor: "#999999",
    margin: 5,
    padding: 20,
    borderRadius: 10,
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
    color: "#333",
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#999",
    borderBlockColor: "#fff",
    borderRadius: 10,
    marginVertical: 4,
  },
  slide: {
    backgroundColor: "#555",
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
  CarouselImage: {
    width: 400,
    height: 280,
    objectFit: "fill",
  },
});
