import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View, Image, ImageBackground, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Numero() {
  const router = useRouter();
  const numero = [
    {
      title: "1",
      image: require("../../assets/images/ISA.png"),
      label: "Isa",
    },
    {
      title: "2",
      image: require("../../assets/images/DALAWA.png"),
      label: "Dalawa",
    },
    {
      title: "3",
      image: require("../../assets/images/TATLO.png"),
      label: "Tatlo",
    },
    {
      title: "4",
      image: require("../../assets/images/APAT.png"),
      label: "Apat",
    },
    {
      title: "5",
      image: require("../../assets/images/LIMA.png"),
      label: "Lima",
    },
    {
      title: "6",
      image: require("../../assets/images/ANIM.png"),
      label: "Anim",
    },
    {
      title: "7",
      image: require("../../assets/images/PITO.png"),
      label: "Pito",
    },
    {
      title: "8",
      image: require("../../assets/images/WALO.png"),
      label: "Walo",
    },
    {
      title: "9",
      image: require("../../assets/images/SIYAM.png"),
      label: "Siyam",
    },
    {
      title: "10",
      image: require("../../assets/images/SAMPU.png"),
      label: "Sampu",
    },
  ];

  return (
    <ImageBackground
          source={require("../../assets/images/NUMERO BG.png")}
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
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
              Numero
            </Text>
          </View>
          {numero.map((n) => (
            <View
              key={n.label}
              style={{
                flexDirection: "row",
                gap: 24,
                backgroundColor: "#fff",
                borderWidth: 5,
                borderColor: "#B3916E",
                width: "90%",
                padding: 24,
              }}
            >
              <Text style={{ color: "#000", fontSize: 100, fontWeight: "bold" }}>
                {n.title}
              </Text>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 24, position: "absolute", left: 170, top: 10 }}>
                {n.label}
              </Text>
              <Image
                source={n.image}
                style={{
                  position: "absolute", 
                  width: 150,
                  height: 150,
                  left: 120,
                  top: 20,
                }}
                resizeMode="cover"
              />
              <AntDesign style={{ color: "#000", position:"absolute", right: 0, bottom: 0,}} name="sound" size={24} color="black" />
            </View>
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
});