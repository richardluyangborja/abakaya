import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View, StyleSheet, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AlamatNgKalabasa() {
  const router = useRouter();

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
            gap: 20,
          }}
        >
          <Image
            source={require("../../../../assets/images/KALABASA.png")}
            style={styles.image}
          />

          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 200,
            }}
          >
            Alamat ng Kalabasa
          </Text>

          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Noong unang panahon sa isang malayong nayon na napapalibutan ng
              luntiang kagubatan, naninirahan ang isang batang nagngangalang
              Simo. Si Simo ay isang masiglang bata na mahilig tumakbo at
              maglaro, ngunit mayroon siyang iniindang kahinaan—ang kanyang
              paningin. Dahil malabo ang kanyang mga mata, madalas siyang
              nadadapa at hindi niya maaninag nang malinaw ang kagandahan ng mga
              bundok, ilog, at luntiang kapaligiran na kanyang kinalakihan.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Isang gabi habang mahimbing na natutulog, dinalaw si Simo ng isang
              mahiwagang panaginip kung saan nagpakita sa kanya ang diwata ng
              kalusugan na si Aling Liwliwa. Sinabi ng diwata na batid niya ang
              pagnanais ni Simo na makakita nang malinaw at magkaroon ng matibay
              na pangangatawan. Bilang tulong, nagpahiwatig ang diwata tungkol
              sa isang kakaibang bunga na matatagpuan sa kailaliman ng kagubatan
              na siyang magbibigay ng lunas sa kanyang mga karamdaman.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Kinaumagahan, agad na ikinuwento ni Simo ang kanyang panaginip sa
              kanyang mga magulang na puno ng pag-aalala para sa kanya. Hindi
              nag-atubili ang kanyang ama at ina na samahan siya sa loob ng
              kagubatan upang hanapin ang sinasabing bunga. Matapos ang mahabang
              paglalakad, natagpuan nila sa ilalim ng isang matandang puno ang
              isang gumagapang na halamang may bilog, mataba, at kulay-kahel na
              bunga na tinawag nilang &quot;Kalabasa&quot; dahil sa pangako
              nitong kaliwanagan at lakas.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Agad na inani ng kanyang mga magulang ang bunga at inihanda ito
              bilang pagkain para sa bata. Sa bawat subo at kagat ni Simo sa
              masustansyang kalabasa, naramdaman niya ang unti-unting pagbabago
              sa kanyang pakiramdam. Hindi lamang luminaw ang kanyang paningin
              upang makita ang ganda ng mundo, kundi naramdaman din niya ang
              pag-apaw ng lakas at enerhiya sa kanyang buong katawan na hindi
              niya naranasan kailanman.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Nang mabalitaan ng buong nayon ang himalang nangyari kay Simo,
              nagsimula na ring magtanim at kumain ng kalabasa ang lahat ng mga
              taga-nayon. Napagtanto nila na ang gulay na ito ay isang
              mahalagang proteksyon laban sa sakit at nagpapanatili ng sigla sa
              kanilang araw-araw na pamumuhay. Mula noon, itinuring na nilang
              sagradong biyaya ang kalabasa, isang paalala na ang tunay na
              kayamanan ay ang ating kalusugan na nagmumula sa mga simpleng
              handog ng kalikasan.
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


const styles = StyleSheet.create ({
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
});
