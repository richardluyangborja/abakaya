import { useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
  StyleSheet
} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ChangeProfile() {
  const router = useRouter();
  const avatars: { placeholder: string; image: null | ImageSourcePropType }[] = [
    {
      placeholder: "Agila",
      image: require("../assets/images/AGILA.png"),
    },
    {
      placeholder: "Kalabaw",
      image: require("../assets/images/KALABAW_PROF.png"),
    },
    {
      placeholder: "Jeepney",
      image: require("../assets/images/JEEPNEY_PROF.png"),
    },
    {
      placeholder: "Perlas",
      image: require("../assets/images/PERLAS_PROF.png"),
    },
    {
      placeholder: "Sampaguita",
      image: require("../assets/images/SAMPAGUITA_PROF.png"),
    },
    {
      placeholder: "Manga",
      image: require("../assets/images/MANGGA_PROF.png"),
    },
  ];

  const avatarsForSelection = [
    ...avatars.slice(1), 
    avatars[0],
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0075EF",
      }}
    >
      <View style={styles.navbar}>
        <Pressable onPress={() => router.back()}>
          <Ionicons style={{ color: "#fff" }} name="chevron-back" size={24} />
        </Pressable>
        <Text style={{ color: "#fff", marginTop: 3 }}>ABAKAYA</Text>
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
          <Image source={avatars.at(0)!.image!} style={styles.avatarImage} />
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
            width: 180,
            borderRadius: 5,
          }}
        >
          <Text>Pangalan</Text>
          <MaterialCommunityIcons style={{ right: 0, position: "absolute", top: 2, }} name="pencil-outline" size={20} color="black" />
        </View>
      </View>

      <Text style={{ color: "#fff", marginTop: 16, marginLeft: 24, textAlign: 'center'}}>
        Pumili ng iyong Avatar.
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
          borderRadius: 8,
        }}
      >
        {avatarsForSelection.map((a) => (
          <View key={a.placeholder} style={{ gap: 16 }}>
            {a.image ? (
              <Image source={a.image} style={styles.avatarImage} />
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
            marginTop: 25,
            borderRadius: 5,
          }}
        >
          Save
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 35,
    marginTop: 0,
    backgroundColor: "#01254C",
    gap: 16,
  },
  avatarImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});