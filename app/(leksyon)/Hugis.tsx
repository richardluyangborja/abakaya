import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Hugis() {
  const router = useRouter();
  const hugis = [
    {
      title: "Bilog",
      // image: "path",
    },
    {
      title: "Parisukat",
    },
    {
      title: "Bituin",
    },
    {
      title: "Tatsulok",
    },
    {
      title: "Puso",
    },
    {
      title: "Dyamante",
    },
    {
      title: "Biluhaba",
    },
    {
      title: "Parihaba",
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
                borderWidth: 3,
                borderColor: "#999",
                alignItems: "center",
                justifyContent: "center",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 24, color: "#000" }}>{p.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
