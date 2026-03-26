import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Image, ImageStyle } from "react-native";

export function AvatarHeader({ style }: { style?: ImageStyle }) {
  const avatarsMap = {
    Agila: require("../../assets/images/AGILA.png"),
    Kalabaw: require("../../assets/images/KALABAW_PROF.png"),
    Jeepney: require("../../assets/images/JEEPNEY_PROF.png"),
    Perlas: require("../../assets/images/PERLAS_PROF.png"),
    Sampaguita: require("../../assets/images/SAMPAGUITA_PROF.png"),
    Manga: require("../../assets/images/MANGGA_PROF.png"),
  };

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const n = await AsyncStorage.getItem("name");
      const a = await AsyncStorage.getItem("avatar");

      if (n) setName(n);
      if (a) setAvatar(a);
      else setAvatar(avatarsMap["Agila"]);
    };

    load();
  }, []);
  return (
    avatar && (
      <Image
        style={
          style || {
            height: 30,
            width: 30,
            borderRadius: 100,
          }
        }
        source={avatarsMap[avatar as keyof typeof avatarsMap]}
      />
    )
  );
}
