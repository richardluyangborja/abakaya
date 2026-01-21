import { View, Text, Button, Pressable } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 100,
            backgroundColor: "#000",
          }}
        ></View>
        <Text style={{ fontSize: 16 }}>Settings</Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16 * 1.6 * 1.6,
            fontWeight: "semibold",
            marginTop: 24,
          }}
        >
          ABAKAYA
        </Text>
        <Text style={{ fontSize: 16 * 1.6, marginBottom: 48 }}>
          Alamin, Aralin, Kayang-kaya
        </Text>
        <Pressable
          style={{
            paddingVertical: 12,
            paddingHorizontal: 24,
            backgroundColor: "#ed0707",
            alignSelf: "center",
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
            }}
          >
            START
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
