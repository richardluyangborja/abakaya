import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Kulay() {
  const router = useRouter();
  const kulay = [
    {
      title: "Pula",
      // image: "path",
    },
    {
      title: "Kahel",
    },
    {
      title: "Dilaw",
    },
    {
      title: "Luntian",
    },
    {
      title: "Asul",
    },
    {
      title: "Lila",
    },
    {
      title: "Rosas",
    },
    {
      title: "Kayumanggi",
    },
    {
      title: "Abo",
    },
    {
      title: "Puti",
    },
    {
      title: "Itim",
    },
  ];

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
              Kulay
            </Text>
          </View>
          {kulay.map((n) => (
            <View
              key={n.title}
              style={{
                flexDirection: "row",
                gap: 24,
                backgroundColor: "#eee",
                justifyContent: "center",
                borderRadius: 20,
                width: "100%",
                padding: 24,
              }}
            >
              <Text style={{ color: "#000", fontSize: 44, fontWeight: "bold" }}>
                {n.title}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
