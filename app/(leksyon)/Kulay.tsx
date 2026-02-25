import { useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Kulay() {
  const router = useRouter();
  const kulay = [
    {
      image: require("../../assets/images/PULA.png"),
    },
    {
      image: require("../../assets/images/KAHEL.png"),
    },
    {
      image: require("../../assets/images/DILAW.png"),
    },
    {
      image: require("../../assets/images/LUNTIAN.png"),
    },
    {
      image: require("../../assets/images/ASUL.png"),
    },
    {
      image: require("../../assets/images/LILA.png"),
    },
    {
      image: require("../../assets/images/ROSAS.png"),
    },
    {
      image: require("../../assets/images/KAYUMAGGI.png"),
    },
    {
      image: require("../../assets/images/ABO.png"),
    },
    {
      image: require("../../assets/images/PUTI.png"),
    },
    {
      image: require("../../assets/images/ITIM.png"),
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/KULAY BG.png")}
      style={styles.background}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
      />
      <View style={styles.navbar}>
        <Pressable onPress={() => router.navigate("/Leksyon")}>
          <Ionicons style={{ color: "#fff" }} name="chevron-back" size={24} />
        </Pressable>
        <Text style={{ color: "#fff", marginTop: 3 }}>ABAKAYA</Text>
      </View>

      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            paddingVertical: 24,
            paddingHorizontal: 16,
            overflowX: "scroll",
          }}
        >
          <View
            style={{
              padding: 16,
              backgroundColor: "#CC0000",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Kulay
            </Text>
          </View>
          {kulay.map((n, i) => (
            <View
              key={i}
              style={{
                flexDirection: "row",
                gap: 24,
                backgroundColor: "#eee",
                justifyContent: "center",
                borderRadius: 20,
                width: "100%",
                padding: 24,
                marginBottom: 40,
              }}
            >
              <Text
                style={{ color: "#000", fontSize: 44, fontWeight: "bold" }}
              ></Text>
              <Image
                source={n.image}
                style={{
                  position: "absolute",
                  width: 333,
                  height: 140,
                }}
                resizeMode="cover"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 35,
    marginTop: 0,
    backgroundColor: "#01254C",
    gap: 16,
  },
  background: {
    flex: 1,
    backgroundColor: "#fff",
    opacity: 50,
  },
});

