import { useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChangeProfile() {
  const router = useRouter();
  const avatars: { placeholder: string; image: null | ImageSourcePropType }[] =
    [
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

  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [name, setName] = useState("Pangalan");
  const avatarsForSelection = [...avatars.slice(1), avatars[0]];

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const savedName = await AsyncStorage.getItem("name");
        const savedAvatar = await AsyncStorage.getItem("avatar");

        if (savedName) setName(savedName);

        if (savedAvatar) {
          const found = avatars.find((a) => a.placeholder === savedAvatar);
          if (found) setSelectedAvatar(found);
        }
      } catch (e) {
        console.log("Failed to load profile", e);
      }
    };

    loadProfile();
  }, []);

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
        {selectedAvatar?.image ? (
          <Image source={selectedAvatar.image} style={styles.avatarImage} />
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
          <TextInput
            value={name}
            onChangeText={setName}
            style={{ paddingRight: 24 }}
          />
          <MaterialCommunityIcons
            style={{ right: 0, position: "absolute", top: 2 }}
            name="pencil-outline"
            size={20}
            color="black"
          />
        </View>
      </View>

      <Text
        style={{
          color: "#fff",
          marginTop: 16,
          marginLeft: 24,
          textAlign: "center",
        }}
      >
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
          <Pressable
            key={a.placeholder}
            onPress={() => setSelectedAvatar(a)}
            style={{ gap: 16, alignItems: "center" }}
          >
            <Image source={a.image!} style={styles.avatarImage} />
            <Text>{a.placeholder}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        onPress={async () => {
          try {
            await AsyncStorage.setItem("name", name);
            await AsyncStorage.setItem("avatar", selectedAvatar.placeholder);

            router.navigate("/");
          } catch (e) {
            console.log("Failed to save profile", e);
          }
        }}
      >
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

