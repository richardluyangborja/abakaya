import { RelativePathString, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Leksyon() {
  const router = useRouter();
  const pages = [
    {
      label: "Abakada",
      href: "/Abakada",
    },
    {
      label: "Maikling Kwento",
      href: "/MaiklingKwento",
    },
    {
      label: "Alamat",
      href: "/Alamat",
    },
    {
      label: "Numero",
      href: "/Numero",
    },
    {
      label: "Hugis",
      href: "/Hugis",
    },
    {
      label: "Kulay",
      href: "/Kulay",
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
            Leksyon
          </Text>
        </View>
        {pages.map((p) => (
          <Pressable
            key={p.href}
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
    </View>
  );
}
