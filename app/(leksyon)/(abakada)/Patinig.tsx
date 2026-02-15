import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Patinig() {
  const router = useRouter();
  const patinig = [
    {
      title: "Aa",
      // image: "path",
      label: "Araw",
    },
    {
      title: "Ee",
      label: "Eroplano",
    },
    {
      title: "Ii",
      label: "Ilaw",
    },
    {
      title: "Oo",
      label: "Orasan",
    },
    {
      title: "Uu",
      label: "Ulap",
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
              key={p.label}
              style={{
                width: "46%",
                height: "auto",
                backgroundColor: "#667558",
                borderWidth: 5,
                borderColor: "#B3916E",
                alignItems: "center",
                justifyContent: "center",
                padding: 12,
              }}
            >
              <Text style={{ fontSize: 32, color: "#fff" }}>{p.title}</Text>
              <Text style={{ fontSize: 16, color: "#fff" }}>{p.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
