import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Katinig() {
  const router = useRouter();
  const katinig = [
    {
      title: "Bb",
      // image: "path",
      label: "Ba Be Bi Bo Bu",
    },
    {
      title: "Dd",
      label: "Da De Di Do Du",
    },
    {
      title: "Hh",
      label: "Ha He Hi Ho Hu",
    },
    {
      title: "Kk",
      label: "Ka Ke Ki Ko Ku",
    },
    {
      title: "Gg",
      label: "Ga Ge Gi Go Gu",
    },
    {
      title: "Ll",
      label: "La Le Li Lo Lu",
    },
    {
      title: "Mm",
      label: "Ma Me Mi Mo Mu",
    },
    {
      title: "Nn",
      label: "Na Ne Ni No Nu",
    },
    {
      title: "Nga",
      label: "Nga Nge Ngi Ngo Ngu",
    },
    {
      title: "Pp",
      label: "Pa Pe Pi Po Pu",
    },
    {
      title: "Rr",
      label: "Ra Re Ri Ro Ru",
    },
    {
      title: "Ss",
      label: "Sa Se Si So Su",
    },
    {
      title: "Tt",
      label: "Ta Te Ti To Tu",
    },
    {
      title: "Ww",
      label: "Wa We Wi Wo Wu",
    },
    {
      title: "Yy",
      label: "Ya Ye Yi Yo Yu",
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
                }}
              >
                <Text style={{ fontSize: 32, color: "#fff" }}>{p.title}</Text>
                <Text style={{ fontSize: 16, color: "#fff" }}>{p.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
