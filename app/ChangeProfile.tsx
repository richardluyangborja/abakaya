import { useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

export default function ChangeProfile() {
  const router = useRouter();
  const avatars: { placeholder: string; image: null | ImageSourcePropType }[] =
    [
      {
        placeholder: "agila",
        image: null,
      },
      {
        placeholder: "kalabaw",
        image: null,
      },
      {
        placeholder: "jeepney",
        image: null,
      },
      {
        placeholder: "perlas",
        image: null,
      },
      {
        placeholder: "sampaguita",
        image: null,
      },
      {
        placeholder: "Manga",
        image: null,
      },
    ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0075EF",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 24,
          paddingHorizontal: 16,
          paddingTop: 28,
          paddingBottom: 16,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Text>Back</Text>
        </Pressable>
        <Text>Change Profile</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 32,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        {avatars.at(0)?.image ? (
          <Image source={avatars.at(0)!.image!} />
        ) : (
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 100,
              backgroundColor: "#000",
            }}
          ></View>
        )}
        <View
          style={{
            backgroundColor: "#FFE18B",
            paddingHorizontal: 12,
            paddingVertical: 5,
            width: 210,
          }}
        >
          <Text>Pangalan</Text>
        </View>
      </View>
      <Text style={{ color: "#fff", marginTop: 16, marginLeft: 24 }}>
        Pumili ng iyong avatar.
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 38,
          width: "80%",
          alignSelf: "center",
          paddingHorizontal: 24,
          paddingVertical: 24,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          marginTop: 8,
        }}
      >
        {avatars.map((a) => (
          <View key={a.placeholder} style={{ gap: 16 }}>
            {a.image ? (
              <Image source={a.image} />
            ) : (
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                  backgroundColor: "#000",
                }}
              ></View>
            )}
            <Text style={{ alignSelf: "center" }}>{a.placeholder}</Text>
          </View>
        ))}
      </View>
      <Pressable onPress={() => router.navigate("/")}>
        <Text
          style={{
            alignSelf: "center",
            backgroundColor: "#CC0000",
            color: "#fff",
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginTop: 32,
          }}
        >
          Save
        </Text>
      </Pressable>
    </View>
  );
}
