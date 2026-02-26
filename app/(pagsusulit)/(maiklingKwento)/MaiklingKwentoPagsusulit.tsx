import { RelativePathString, useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MaiklingKwentoPagsusulit() {
  const router = useRouter();
  const pages = [
    {
      label: "Ang Batang Mabait at Magalang",
      href: "/AngBatangMabaitAtMagalangPagsusulit",
      image: require("../../../assets/images/ANG BATANG MABAIT AT MAGALANG.png"),
    },
    {
      label: "Ang Batang Mahilig Mag-Cellphone",
      href: "/AngBatangMahiligMagCellphonePagsusulit",
      image: require("../../../assets/images/ANG BATANG MAHILIG MAG CELLPHONE.png"),
    },
    {
      label: "Ang Batang Mahilig Magsinungaling",
      href: "/AngBatangMahiligMagsinungalingPagsusulit",
      image: require("../../../assets/images/ANG BATANG MAHILIG MAGSINUNGALING.png"),
    },
  ];

  return (
    <ImageBackground
      source={require("../../../assets/images/BG3.png")}
      style={styles.background}
    >
      <View style={styles.navbar}>
        <Pressable onPress={() => router.back()}>
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
              Maikling Kwento
            </Text>
          </View>
          {pages.map((p) => (
            <Pressable
              key={p.label}
              style={{
                borderRadius: 20,
                width: "100%",
                padding: 24,
              }}
              onPress={() => router.navigate(p.href as RelativePathString)}
            >
              <ImageBackground
                source={p.image}
                style={styles.imageBackground}
                imageStyle={styles.imageStyle}
              >
                <View style={styles.overlay} />
                <Text style={styles.text}>{p.label}</Text>
              </ImageBackground>
            </Pressable>
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
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    height: "250%",
    marginBottom: 30,
  },
  imageStyle: {
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 20,
    width: "100%",
    height: "250%",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    top: 45,
  },
});
