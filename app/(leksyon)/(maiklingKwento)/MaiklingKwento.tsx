import { RelativePathString, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MaiklingKwento() {
  const router = useRouter();
  const pages = [
    {
      label: "Pamilyang Nagtutulungan",
      href: "/PamilyangNagtutulungan",
    },
    {
      label: "Ang Lihim ni Lira",
      href: "/AngLihimniLira",
    },
    {
      label: "Si Lukas at ang Kanyang Lapis",
      href: "/SiLukasatangKanyangLapis",
    },
  ];

  return (
    <ImageBackground 
              source={require('../../../assets/images/BG3.png')}
               style={styles.background}
            >
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
              Maikling Kwento
            </Text>
          </View>
          {pages.map((p) => (
            <Pressable
              key={p.label}
              style={{
                backgroundColor: "#EDB111",
                borderRadius: 20,
                width: "100%",
                padding: 24,
              }}
              onPress={() => router.navigate(p.href as RelativePathString)}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
                {p.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
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
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
});