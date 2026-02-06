import { RelativePathString, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function MaiklingKwento() {
  const router = useRouter();
  const pages = [
    {
      label: "Lugar",
      href: "/",
    },
    {
      label: "Prutas",
      href: "/",
    },
    {
      label: "Gulay",
      href: "/",
    },
    {
      label: "Hayop",
      href: "/",
    },
    {
      label: "Bagay",
      href: "/",
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
              Alamat
            </Text>
          </View>
          {pages.map((p) => (
            <Pressable
              key={p.label}
              style={{
                backgroundColor: "#EDB111",
                borderRadius: 20,
                width: "100%",
                padding: 24,
              }}
              onPress={() => router.navigate(p.href as RelativePathString)}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 24 }}>
                {p.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
