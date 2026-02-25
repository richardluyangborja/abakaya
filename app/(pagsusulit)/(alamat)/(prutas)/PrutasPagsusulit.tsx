import { RelativePathString, useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PrutasPagsusulit() {
  const router = useRouter();
  const pages = [
    {
      label: "Alamat ng Pinya",
      href: "/AlamatNgPinyaPagsusulit",
      image: require("../../../../assets/images/LUGAR.png"),
    },
    // {
    //   label: "Alamat ng Mangga",
    //   href: "/AlamatNgMangga",
    //   image: require("../../../../assets/images/LUGAR.png"),
    // },
  ];

  return (
    <ImageBackground
      source={require("../../../../assets/images/NUMERO BG.png")}
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
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
              Prutas
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
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    height: "400%",
    marginBottom: 50,
  },
  imageStyle: {
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 20,
    width: "100%",
    height: "400%",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    top: "130%",
  },
});
