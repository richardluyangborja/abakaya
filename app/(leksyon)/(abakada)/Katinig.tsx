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

export default function Katinig() {
  const router = useRouter();
  const katinig = [
    {
      title: "Bb",
      image: require("../../../assets/images/Bb.png"),
      label: "Ba Be Bi Bo Bu",
    },
    {
      title: "Dd",
      image: require("../../../assets/images/Dd.png"),
      label: "Da De Di Do Du",
    },
    {
      title: "Hh",
      image: require("../../../assets/images/Hh.png"),
      label: "Ha He Hi Ho Hu",
    },
    {
      title: "Kk",
      image: require("../../../assets/images/Kk.png"),
      label: "Ka Ke Ki Ko Ku",
    },
    {
      title: "Gg",
      image: require("../../../assets/images/Gg.png"),
      label: "Ga Ge Gi Go Gu",
    },
    {
      title: "Ll",
      image: require("../../../assets/images/Ll.png"),
      label: "La Le Li Lo Lu",
    },
    {
      title: "Mm",
      image: require("../../../assets/images/Mm.png"),
      label: "Ma Me Mi Mo Mu",
    },
    {
      title: "Nn",
      image: require("../../../assets/images/Nn.png"),
      label: "Na Ne Ni No Nu",
    },
    {
      title: "Ng",
      image: require("../../../assets/images/Ng.png"),
      label: "Nga Nge Ngi Ngo Ngu",
    },
    {
      title: "Pp",
      image: require("../../../assets/images/Pp.png"),
      label: "Pa Pe Pi Po Pu",
    },
    {
      title: "Rr",
      image: require("../../../assets/images/Rr.png"),
      label: "Ra Re Ri Ro Ru",
    },
    {
      title: "Ss",
      image: require("../../../assets/images/Ss.png"),
      label: "Sa Se Si So Su",
    },
    {
      title: "Tt",
      image: require("../../../assets/images/Tt.png"),
      label: "Ta Te Ti To Tu",
    },
    {
      title: "Ww",
      image: require("../../../assets/images/Ww.png"),
      label: "Wa We Wi Wo Wu",
    },
    {
      title: "Yy",
      image: require("../../../assets/images/Yy.png"),
      label: "Ya Ye Yi Yo Yu",
    },
  ];

  return (
    <ImageBackground
      source={require("../../../assets/images/SILID.png")}
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
              Patinig
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
            {katinig.map((p) => (
              <View
                key={p.title}
                style={{
                  width: "46%",
                  height: "auto",
                  backgroundColor: "#667558",
                  borderWidth: 5,
                  borderColor: "#B3916E",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  position: "relative",
                }}
              >
                <Text
                  style={{ fontSize: 32, color: "#fff", marginBottom: 100 }}
                >
                  {p.title}
                </Text>
                <Text style={{ fontSize: 16, color: "#fff" }}>{p.label}</Text>
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

