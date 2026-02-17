import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function PagsusulitNumeroLevel() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          marginTop: 24,
          flexDirection: "row",
          gap: 16,
          padding: 16,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Text>Back</Text>
        </Pressable>
        <Text>ABAKAYA</Text>
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
            Pagsusulit
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#EDB111",
            borderRadius: 20,
            width: "100%",
            padding: 24,
          }}
          onPress={() => router.navigate("/MadaliPagsusulitNumero")}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
            Madali
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#EDB111",
            borderRadius: 20,
            width: "100%",
            padding: 24,
          }}
          onPress={() => router.navigate("/Pagsusulit")}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
            Mahirap
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
