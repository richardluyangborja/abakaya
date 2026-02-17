import { useRouter } from "expo-router";
import { Pressable, Text, View, ImageBackground, StyleSheet, Image, ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Hugis() {
  const router = useRouter();
  const hugis = [
    {
      title: "Bilog",
      image: require("../../assets/images/BILOG.png"),
      borderColor: "#1E721C",
    },
    {
      title: "Parisukat",
      image: require("../../assets/images/PARISUKAT.png"),
      borderColor: "#5D2651",
    },
    {
      title: "Bituin",
      image: require("../../assets/images/BITUIN.png"),
      borderColor: "#FBCA4D",
    },
    {
      title: "Tatsulok",
      image: require("../../assets/images/TATSULOK.png"),
      borderColor: "#284B70",
    },
    {
      title: "Puso",
      image: require("../../assets/images/PUSO.png"),
      borderColor: "#771009",
    },
    {
      title: "Dyamante",
      image: require("../../assets/images/DYAMANTE.png"),
      borderColor: "#E1925B",
    },
    {
      title: "Biluhaba",
      image: require("../../assets/images/BILUHABA.png"),
      borderColor: "#C5757C",
    },
    {
      title: "Parihaba",
      image: require("../../assets/images/PARIHABA.png"),
      borderColor: "#78AEB0",
    },
  ];

  return (
    <ImageBackground 
              source={require('../../assets/images/HUGIS BG.png')}
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
          justifyContent: "flex-start",
          gap: 16,
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}
      >
        <View
          style={{
            padding: 16,
            backgroundColor: "#CC0000",
            borderRadius: 20,
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Hugis
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 12,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            rowGap: 22,
          }}
        >
          {hugis.map((p) => (
            <View
              key={p.title}
              style={{
                width: "48%",
                height: "auto",
                backgroundColor: "#eee",
                borderWidth: 6,
                borderColor: p.borderColor,
                alignItems: "center",
                justifyContent: "center",
                padding: 12,
                borderRadius: 20,
              }}
            >
              <Text style={{ fontSize: 24, color: "#000", marginTop: 130}}>{p.title}</Text>
              <Image
                                source={p.image}
                                style={{
                                  position: "absolute",
                                  width: 100,
                                  height: 100,
                                }}
                                resizeMode="cover"
                              />
            </View>
          ))}
        </View>
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
    opacity: 50,
  },
});