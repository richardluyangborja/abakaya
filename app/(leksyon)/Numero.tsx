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
      borderColor: "#D98A54",
    },
    {
      title: "2",
      image: require("../../assets/images/DALAWA.png"),
      label: "Dalawa",
      borderColor: "#C7AAD0",
    },
    {
      title: "3",
      image: require("../../assets/images/TATLO.png"),
      label: "Tatlo",
      borderColor: "#EAB562",
    },
    {
      title: "4",
      image: require("../../assets/images/APAT.png"),
      label: "Apat",
      borderColor: "#C06E45",
    },
    {
      title: "5",
      image: require("../../assets/images/LIMA.png"),
      label: "Lima",
      borderColor: "#B193B9",
    },
    {
      title: "6",
      image: require("../../assets/images/ANIM.png"),
      label: "Anim",
      borderColor: "#F5C86D",
    },
    {
      title: "7",
      image: require("../../assets/images/PITO.png"),
      label: "Pito",
      borderColor: "#B5795F",
    },
    {
      title: "8",
      image: require("../../assets/images/WALO.png"),
      label: "Walo",
      borderColor: "#E8B367",
    },
    {
      title: "9",
      image: require("../../assets/images/SIYAM.png"),
      label: "Siyam",
      borderColor: "#E3BD72",
    },
    {
      title: "10",
      image: require("../../assets/images/SAMPU.png"),
      label: "Sampu",
      borderColor: "#D0803C",
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
                width: "90%",
                padding: 24,
                borderColor: n.borderColor,
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