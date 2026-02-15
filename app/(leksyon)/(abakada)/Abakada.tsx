import { useRouter } from "expo-router";
import { Pressable, Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Abakada() {
  const router = useRouter();

  return (
    <ImageBackground 
          source={require('../../../assets/images/SILID.png')}
           style={styles.background}
        >
  <View
    style={{
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.3)",
    }}
  >
    <View style={styles.navbar}>
      <Pressable onPress={() => router.navigate("/Leksyon")}>
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
        onPress={() => router.navigate("/Patinig")}
      >
        <Image
            source={require('../../../assets/images/patinig.png')} 
            style={{
              width: 75,
              height: 75, 
              marginRight: 16,
              zIndex: 1,
              flexDirection: "row",
            }}
            />
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 34, position: "absolute", textAlign: "center", alignContent: "center", marginLeft: 150, marginTop: 40, }}>
          Patinig
        </Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#EDB111",
          borderRadius: 20,
          width: "100%",
          padding: 24,
        }}
        onPress={() => router.navigate("/Katinig")}
      >
        <Image
            source={require('../../../assets/images/katinig.png')} 
            style={{
              width: 75,
              height: 75, 
              marginRight: 16,
              zIndex: 1,
              flexDirection: "row",
            }}
            />
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 34, position: "absolute", textAlign: "center", alignContent: "center", marginLeft: 150, marginTop: 40, }}>
          Katinig
        </Text>
      </Pressable>
    </View>
  </View>
</ImageBackground>

  );
}


const styles = StyleSheet.create ({
  navbar: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 35,
    marginTop: 0,
    backgroundColor: "#01254C",
    gap: 16,
  },
  background: {
    flex: 1,
    backgroundColor: "#fff",
  },
});