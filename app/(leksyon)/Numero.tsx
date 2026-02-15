import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Numero() {
  const router = useRouter();
  const numero = [
    {
      title: "1",
      // image: "path",
      label: "Isa",
    },
    {
      title: "2",
      label: "Dalawa",
    },
    {
      title: "3",
      label: "Tatlo",
    },
    {
      title: "4",
      label: "Apat",
    },
    {
      title: "5",
      label: "Lima",
    },
    {
      title: "6",
      label: "Anim",
    },
    {
      title: "7",
      label: "Pito",
    },
    {
      title: "8",
      label: "Walo",
    },
    {
      title: "9",
      label: "Siyam",
    },
    {
      title: "10",
      label: "Sampu",
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
              Numero
            </Text>
          </View>
          {numero.map((n) => (
            <View
              key={n.label}
              style={{
                flexDirection: "row",
                gap: 24,
                backgroundColor: "#eee",
                borderRadius: 20,
                width: "100%",
                padding: 24,
              }}
            >
              <Text style={{ color: "#000", fontSize: 52, fontWeight: "bold" }}>
                {n.title}
              </Text>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 24 }}>
                {n.label}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
