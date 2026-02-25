import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
  Modal,
} from "react-native";

export default function App() {
  const router = useRouter();
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
    >
      <Text style={styles.text_abakaya}>ABAKAYA!</Text>

      {/* paayos nalang style kung mgulo boy^ ^ */}
      <Pressable
        onPress={() => router.navigate("/ChangeProfile")}
        style={{
          alignSelf: "flex-start",
          marginLeft: 5,
          zIndex: 1000,
          width: 60,
          height: 60,
        }}
      >
        <Image
          source={require("../assets/images/AGILA.png")}
          style={styles.profile}
        />
      </Pressable>

      <Pressable
        style={{
          position: "absolute",
          top: 40,
          right: 20,
          zIndex: 1000,
        }}
        onPress={() => setSettingsOpen(true)}
      >
        <Feather style={{}} name="settings" size={45} color="black" />
      </Pressable>

      <Text style={styles.alamin}>Alamin, Aralin, Kayang-kaya</Text>

      <Pressable style={styles.btn} onPress={() => router.navigate("/Menu")}>
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
          }}
        >
          START
        </Text>
      </Pressable>

      <Modal
        visible={settingsOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setSettingsOpen(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              position: "relative",
              backgroundColor: "#023D7A",
              padding: 20,
              borderRadius: 12,
              borderWidth: 3,
              borderColor: "#fff",
            }}
          >
            <Pressable
              style={{ position: "absolute", top: 4, right: 10 }}
              onPress={() => setSettingsOpen(false)}
            >
              <Text style={{ color: "#fff" }}>close</Text>
            </Pressable>
            <View style={{ padding: 20, flexDirection: "row", gap: 24 }}>
              <View
                style={{
                  position: "relative",
                  height: 160,
                  width: 150,
                  backgroundColor: "#EDB111",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    color: "#fff",
                    bottom: 10,
                    fontSize: 20,
                    fontWeight: "700",
                    alignSelf: "center",
                  }}
                >
                  On
                </Text>
              </View>
              <View
                style={{
                  position: "relative",
                  height: 160,
                  width: 150,
                  backgroundColor: "#EDB111",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    color: "#fff",
                    bottom: 10,
                    fontSize: 20,
                    fontWeight: "700",
                    alignSelf: "center",
                  }}
                >
                  Credits
                </Text>
              </View>
            </View>
            <View style={{ padding: 20, flexDirection: "row", gap: 24 }}>
              <View
                style={{
                  position: "relative",
                  height: 160,
                  width: 150,
                  backgroundColor: "#EDB111",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    color: "#fff",
                    bottom: 10,
                    fontSize: 20,
                    fontWeight: "700",
                    alignSelf: "center",
                  }}
                >
                  Privacy Policy
                </Text>
              </View>
              <View
                style={{
                  position: "relative",
                  height: 160,
                  width: 150,
                  backgroundColor: "#EDB111",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    color: "#fff",
                    bottom: 10,
                    fontSize: 20,
                    fontWeight: "700",
                    alignSelf: "center",
                  }}
                >
                  Contact Us
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.container}>
        <Image
          source={require("../assets/images/TOP.png")}
          style={styles.image}
        />
      </View>
      <Image
        source={require("../assets/images/HOME KALABAW.png")}
        style={styles.kalabaw}
      />
      <Image
        source={require("../assets/images/BOTTOM.png")}
        style={styles.bottom_image}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    position: "absolute",
    left: 0,
    marginLeft: 5,
    marginTop: 30,
    height: 60,
    width: 60,
    borderRadius: 100,
    top: 0,
    zIndex: 500,
    backgroundColor: "#000",
  },
  settings: {
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: 5,
    marginTop: 35,
    zIndex: 1,
  },
  btn: {
    position: "absolute",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#CC0000",
    alignSelf: "center",
    borderRadius: 25,
    overflow: "hidden",
    zIndex: 1000,
  },
  text_abakaya: {
    position: "absolute",
    color: "#023D7A",
    fontSize: 70,
    fontWeight: 900,
    top: 0,
    marginTop: 200,
    zIndex: 1,
  },
  alamin: {
    position: "absolute",
    color: "#023D7A",
    fontSize: 24,
    fontWeight: 900,
    top: 0,
    marginTop: 270,
    zIndex: 1,
  },
  image: {
    position: "absolute",
    top: -20,
    width: "100%",
    height: 500,
  },
  kalabaw: {
    position: "absolute",
    width: 320,
    height: 320,
    marginTop: 430,
    marginLeft: 50,
    zIndex: 1,
  },
  bottom_image: {
    width: "100%",
    height: 300,
    bottom: 0,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
