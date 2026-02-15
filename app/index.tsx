import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={require('./assets/background.png')} 
      style={styles.background}
    >
      <Text style={styles.text_abakaya}>
          ABAKAYA!
        </Text>

      <Image 
        source={require('./assets/AGILA.png')} 
        style={styles.profile} 
      />

        <Feather style={styles.settings} name="settings" size={45} color="black" />

        <Text style={styles.alamin}>
          Alamin, Aralin, Kayang-kaya
        </Text>

        <Pressable style={styles.btn}
          onPress={() => router.navigate("/Menu")}
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

      <View style={styles.container}>
        <Image 
          source={require('./assets/TOP.png')} 
          style={styles.image} 
        />
      </View>
    <Image 
        source={require('./assets/HOME KALABAW.png')} 
        style={styles.kalabaw} 
      />
      <Image 
        source={require('./assets/BOTTOM.png')} 
        style={styles.bottom_image} 
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    position: 'absolute',
    left: 0,
    marginLeft: 5,
    marginTop: 30,
    height: 60,
    width: 60,
    borderRadius: 100,
    top: 0,
    zIndex: 1,
    backgroundColor: "#000",
  },
  settings: { 
    position: 'absolute', 
    top: 0, 
    right: 0, 
    marginRight: 5,
    marginTop: 35,
    zIndex: 1,
  }, 
  btn: {
    position: 'absolute',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#CC0000",
    alignSelf: "center",
    borderRadius: 25,
    overflow: "hidden",
  },
  text_abakaya: {
    position: 'absolute',
    color: '#023D7A',
    fontSize: 70,
    fontWeight: 900,
    top: 0,
    marginTop: 200,
    zIndex: 1,
  },
  alamin : {
    position: 'absolute',
    color: '#023D7A',
    fontSize: 24,
    fontWeight: 900,
    top: 0,
    marginTop: 270,
    zIndex: 1,
  },
  image: {
    position: 'absolute',
    top: -20,
    width: '100%',
    height: 500,
  },
  kalabaw: {
    position: 'absolute',
    width: 320,
    height: 320,
    marginTop: 430,
    marginLeft: 50,
    zIndex: 1,
  },
  bottom_image: {
    width: '100%',
    height: 300,
    bottom: 0,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
