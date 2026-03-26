import { useMusic } from "@/app/lib/music-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Video } from "expo-av";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function AngBatangMahiligMagsinungaling() {
  const router = useRouter();
  const { stopMusic } = useMusic();

  useEffect(() => {
    stopMusic();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.navbar}>
        <Pressable onPress={() => router.back()}>
          <Ionicons style={{ color: "#fff" }} name="chevron-back" size={24} />
        </Pressable>
        <Text style={{ color: "#fff", marginTop: 3 }}>ABAKAYA</Text>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 16,
          }}
        >
          <Video
            source={require("../../../assets/videos/mahilig-magsinungaling.mp4")}
            style={styles.video}
            useNativeControls
            resizeMode="cover"
            shouldPlay
            isLooping
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Ang Batang Mahilig Magsinungaling
          </Text>
          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Si Elisa ay isang batang babae na naninirahan sa isang malayong
              nayon. Kilala siya sa kanilang lugar, hindi dahil sa kabutihan,
              kundi dahil sa kanyang pagiging mahilig magsinungaling. Madalas
              siyang gumagawa ng mga kuwento, gaya ng pagdadahilan na siya ay
              may sakit upang makaiwas sa pagpasok sa paaralan at makapaglaro
              lamang maghapon. Dahil sa kanyang bisyo, madalas siyang nagdudulot
              ng kalituhan at kawalan ng unawaan sa kanyang mga kapatid at
              kalaro.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Umabot pa ang kanyang pagsisinungaling sa kanyang pag-aaral.
              Minsan ay ibinalita niya sa kanyang pamilya na siya ay nakapasa sa
              isang pagsusulit, kahit ang totoo ay bumagsak siya rito. Ang
              kawalan niya ng katapatan ay naging bahagi na ng kanyang
              pang-araw-araw na buhay, hanggang sa hindi na niya namamalayan ang
              bigat ng epekto nito sa mga tao sa kanyang paligid.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Isang gabi, habang naglalakad si Elisa, may nakasalubong siyang
              isang matanda na nagtatanong ng direksyon. Sa halip na tumulong
              nang tapat, sinagot niya ito ng mga maling direksyon at puro
              kasinungalingan. Hindi alam ni Elisa na ang matanda pala ay isang
              engkantada na may kapangyarihang bumasa ng puso. Dahil sa galit ng
              engkantada sa kanyang pag-uugali, pinarusahan niya si Elisa: sa
              bawat kasinungalingang bibitawan ng bata, unt-unting mawawala ang
              kanyang boses.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Noong una ay hindi naniwala si Elisa, ngunit habang tumatagal ay
              unti-unti ngang naglaho ang kanyang tinig hanggang sa maging ganap
              siyang pipi. Sa puntong ito, napuno ng takot at pagsisisi ang
              bata. Wala siyang magawa kundi ang umiyak at magsumamo sa
              engkantada sa loob ng kanyang puso, dahil wala nang tunog na
              lumalabas sa kanyang bibig sa tuwing susubukan niyang magsalita.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Dahil sa tapat na pagsisisi ni Elisa, naulinigan ng engkantada ang
              tibok ng kanyang puso at muling ibinalik ang kanyang boses. Labis
              ang tuwa ni Elisa at nangakong hinding-hindi na muling
              magsisinungaling sa kanyang kapwa. Mula noon, naging huwaran siya
              ng katapatan sa kanilang nayon, at ang kanyang kuwento ay
              nagsilbing paalala sa lahat na ang pagsisinungaling ay nagdudulot
              lamang ng kapahamakan sa sarili at sa iba.
            </Text>
          </View>
          <Pressable
            style={{
              padding: 16,
              backgroundColor: "#CC0000",
              borderRadius: 20,
              marginTop: 24,
              marginBottom: 24,
              alignSelf: "center",
            }}
            onPress={() =>
              router.navigate("/AngBatangMahiligMagsinungalingPagsusulit")
            }
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Pagsusulit
            </Text>
          </Pressable>
        </View>
      </ScrollView>
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
  image: {
    position: "absolute",
    width: 360,
    height: 200,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 320,
    height: 200,
  },
});
