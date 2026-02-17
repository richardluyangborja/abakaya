import { RelativePathString, useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
  ImageBackground,
  StyleSheet
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Leksyon() {
  const router = useRouter();
  const pages = [
    {
      label: "Abakada",
      href: "/Abakada",
      image: require("../../assets/images/ABAKADA.png"),
    },
    {
      label: "Maikling Kwento",
      href: "/MaiklingKwento",
      image: require("../../assets/images/MAIKLING KWENTO.png"),
    },
    {
      label: "Alamat",
      href: "/Alamat",
      image: require("../../assets/images/ALAMAT.png"),
    },
    {
      label: "Numero",
      href: "/Numero",
      image: require("../../assets/images/NUMERO.png"),
    },
    {
      label: "Hugis",
      href: "/Hugis",
      image: require("../../assets/images/HUGIS.png"),
    },
    {
      label: "Kulay",
      href: "/Kulay",
      image: require("../../assets/images/KULAY.png"),
    },
  ];

  return (
    <ImageBackground
  source={require("../../assets/images/BG4.png")} 
  style={{ flex: 1, opacity: 50,}}
  resizeMode="cover"
>
  <View
    style={{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(255,255,255,0.3)",
    }}
  />
  <View
        style={styles.navbar}
      >
        <Pressable onPress={() => router.navigate("/")}>
          <Ionicons style={{ color: "#fff" }} name="chevron-back" size={24} />
        </Pressable>
        <Text style={{ color: "#fff", marginTop: 3 }}>ABAKAYA</Text>
      </View>

  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      paddingHorizontal: 16,
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
        Leksyon
      </Text>
    </View>

    {pages.map((p) => (
      <Pressable
        key={p.href}
        style={{
          position: "relative",
          backgroundColor: "#EDB111",
          borderRadius: 20,
          width: "100%",
          padding: 34,
          overflow: "hidden",
        }}
        onPress={() => router.navigate(p.href as RelativePathString)}
      >
        <Image
          source={p.image as ImageSourcePropType}
          style={{
            position: "absolute",
            width: 100,
            height: 100, 
          }}
          resizeMode="cover"
        />
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24, paddingLeft: 90,}}>
          {p.label}
        </Text>
      </Pressable>
    ))}
  </View>
</ImageBackground>

  );
}

const styles = StyleSheet.create ({
  navbar: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 35,
    marginTop: 0,
    backgroundColor: "#01254C",
    gap: 16,
  },
});