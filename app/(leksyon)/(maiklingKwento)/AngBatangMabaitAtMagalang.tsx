import { useMusic } from "@/app/lib/music-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Video } from "expo-av";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function AngBatangMabaitAtMagalang() {
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
            source={require("../../../assets/videos/mabait-magalang.mp4")}
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
            Ang Batang Mabait at Magalang
          </Text>
          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Sa isang payapang barangay, kilalang-kilala ang batang si Popong
              hindi dahil sa yaman kundi dahil sa kanyang gintong asal. Mula sa
              kanyang paggising, agad siyang bumabangon nang may ngiti at hindi
              nakakalimutang lumapit sa kanyang mga magulang at lolo’t lola
              upang magmano. Ang bawat salitang lumalabas sa kanyang bibig ay
              palaging may kalakip na &quot;Po&quot; at &quot;Opo,&quot; na
              nagpapakita ng kanyang malalim na paggalang sa mga nakatatanda sa
              loob ng kanilang tahanan.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Sa loob ng bahay, si Popong ay isang ehemplo ng pagiging masunurin
              at matulungin. Sa tuwing siya ay inuutusan ng kanyang ina na
              magligpit ng mga laruan o tumulong sa mga gawaing bahay, agad
              siyang tumatalima nang walang anumang reklamo o pagdadabog. Para
              sa kanya, ang pagtulong sa mga magulang ay isang paraan ng
              pagpapakita ng pagmamahal at pasasalamat sa lahat ng kanilang
              sakripisyo para sa kanya.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Hindi lamang sa loob ng tahanan makikita ang kabaitan ni Popong,
              dahil bitbit din niya ito sa kanyang pakikitungo sa komunidad.
              Isang araw, habang siya ay naglalakad, nakasalubong niya ang isang
              matandang kapitbahay na hirap na hirap sa pagbitbit ng mabibigat
              na bayong. Hindi nag-atubili si Popong na lumapit at mag-alok ng
              tulong hanggang sa makarating ang matanda sa tapat ng pintuan
              nito, habang palaging bumabati ng magalang na &quot;Magandang
              umaga po&quot; sa sinumang makasalubong.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Maging sa pakikipaglaro sa kanyang mga kaibigan, nananatiling
              mapagkumbaba at maunawain si Popong. Marunong siyang magbahagi ng
              kanyang mga laruan at meryenda, at siya ang unang humihingi ng
              paumanhin kung sakaling magkaroon ng hindi pagkakaunawaan. Ang
              kwento ni Popong ay isang mahalagang paalala na ang pagiging
              mabait at magalang ay nagbubunga ng pagmamahal at respeto mula sa
              ibang tao, at ito ang tunay na kayamanan ng isang bata.
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
              router.navigate("/AngBatangMabaitAtMagalangPagsusulit")
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
