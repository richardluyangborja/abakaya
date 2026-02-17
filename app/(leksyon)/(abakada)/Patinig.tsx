import { useRouter } from "expo-router";
import {
  Pressable,
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function getLabel(highlightLetter: "A" | "E" | "I" | "O" | "U") {
  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      {highlightLetter === "A" ? (
        <Text
          style={{ fontSize: 20, fontWeight: "semibold", color: "#C219AE" }}
        >
          A
        </Text>
      ) : (
        <Text style={{ fontSize: 20, fontWeight: "semibold", color: "#fff" }}>
          A
        </Text>
      )}
      {highlightLetter === "E" ? (
        <Text
          style={{ fontSize: 20, fontWeight: "semibold", color: "#C219AE" }}
        >
          E
        </Text>
      ) : (
        <Text style={{ fontSize: 20, fontWeight: "semibold", color: "#fff" }}>
          E
        </Text>
      )}
      {highlightLetter === "I" ? (
        <Text
          style={{ fontSize: 20, fontWeight: "semibold", color: "#C219AE" }}
        >
          I
        </Text>
      ) : (
        <Text style={{ fontSize: 20, fontWeight: "semibold", color: "#fff" }}>
          I
        </Text>
      )}
      {highlightLetter === "O" ? (
        <Text
          style={{ fontSize: 20, fontWeight: "semibold", color: "#C219AE" }}
        >
          O
        </Text>
      ) : (
        <Text style={{ fontSize: 20, fontWeight: "semibold", color: "#fff" }}>
          O
        </Text>
      )}
      {highlightLetter === "U" ? (
        <Text
          style={{ fontSize: 20, fontWeight: "semibold", color: "#C219AE" }}
        >
          U
        </Text>
      ) : (
        <Text style={{ fontSize: 20, fontWeight: "semibold", color: "#fff" }}>
          U
        </Text>
      )}
    </View>
  );
}

export default function Patinig() {
  const router = useRouter();

  const patinig = [
    {
      title: "Aa",
      image: require("../../../assets/images/Aa.png"),
      child: getLabel("A"),
    },
    {
      title: "Ee",
      image: require("../../../assets/images/Ee.png"),
      child: getLabel("E"),
    },
    {
      title: "Ii",
      image: require("../../../assets/images/Ii.png"),
      child: getLabel("I"),
    },
    {
      title: "Oo",
      image: require("../../../assets/images/Oo.png"),
      child: getLabel("O"),
    },
    {
      title: "Uu",
      image: require("../../../assets/images/Uu.png"),
      child: getLabel("U"),
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
          {patinig.map((p) => (
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
              <Text style={{ fontSize: 32, color: "#fff", marginBottom: 100 }}>
                {p.title}
              </Text>
              {p.child}

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

