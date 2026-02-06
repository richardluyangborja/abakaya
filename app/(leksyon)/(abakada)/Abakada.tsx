import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Abakada() {
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
        <Pressable
          style={{
            backgroundColor: "#EDB111",
            borderRadius: 20,
            width: "100%",
            padding: 24,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
            Patinig
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#EDB111",
            borderRadius: 20,
            width: "100%",
            padding: 24,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
            Katinig
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
