import { RelativePathString, useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Pagsusulit() {
  const router = useRouter();
  const pages = [
    {
      label: "Numero",
      href: "/PagsusulitNumeroLevel",
      image: require("../../assets/images/NUMERO.png"),
    },
    {
      label: "Alamat",
      href: "/AlamatPagsusulit",
      image: require("../../assets/images/NUMERO.png"),
    },
    {
      label: "Maikling Kwento",
      href: "/MaiklingKwentoPagsusulit",
      image: require("../../assets/images/NUMERO.png"),
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/SILID.png")}
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
            top: 40,
            position: "absolute",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Pagsusulit
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
            />
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 24,
                paddingLeft: 90,
              }}
            >
              {p.label}
            </Text>
          </Pressable>
        ))}
      </View>
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
});
