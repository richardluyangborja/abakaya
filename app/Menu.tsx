import { useRouter } from "expo-router";
import { Pressable, Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Menu() {
  const router = useRouter();
  return (
    <ImageBackground 
      source={require('../assets/images/BG2.png')}
       style={styles.background}
    >
      <View
        style={styles.navbar}
      >
        <Pressable onPress={() => router.navigate("/")}>
          <Ionicons style={{ color: "#fff" }} name="chevron-back" size={24} />
        </Pressable>
        <Text style={{ color: "#fff", marginTop: 3 }}>ABAKAYA</Text>
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
        <Pressable
          style={{
            backgroundColor: "#EDB111",
            borderRadius: 20,
            width: "100%",
            padding: 24,
          }}
          onPress={() => router.navigate("/Leksyon")}
        >
          <Image
            source={require('../assets/images/LEKSYON.png')} 
            style={{
              width: 75,
              height: 75, 
              marginRight: 16,
              zIndex: 1,
              flexDirection: "row",
              paddingBottom: 30,
            }}
          />
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30, marginLeft: 150, position: "absolute", marginTop: 40, }}>
            Leksyon
          </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#EDB111",
            borderRadius: 20,
            width: "100%",
            padding: 24,
          }}
        >
          <Image
            source={require('../assets/images/PAGSUSULIT.png')} 
            style={{
              width: 75,
              height: 75, 
              marginRight: 16,
              zIndex: 1,
              flexDirection: "row",
            }}
            />
          <Text style={{color: "#fff", fontWeight: "bold", fontSize: 30, marginLeft: 150, position: "absolute", marginTop: 40, }}>
            Pagsusulit
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create ({
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navbar: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 35,
    marginTop: 0,
    backgroundColor: "#01254C",
    gap: 16,
  },
});