import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View, StyleSheet, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AlamatNgPilipinas() {
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
            source={require("../../../../assets/images/PILIPINAS.png")}
            style={styles.image}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 200,
            }}
          >
            Alamat ng Pilipinas
          </Text>

          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Noong unang panahon, wala pang bansang tinatawag na Pilipinas at
              mayroon lamang maliliit na pulo sa gitna ng karagatan. Sa isang
              kweba sa kalagitnaan ng Dagat Pasipiko, naninirahan ang isang
              amang higante kasama ang kanyang tatlong anak na babae na sina
              Minda, Lu, at Bisaya. Isang araw, kinailangang umalis ng ama upang
              mangaso sa kabilang pulo at mahigpit niyang ibinilin sa kanyang
              mga anak na huwag na huwag lalabas ng kweba dahil sa mga panganib
              na naghihintay sa labas.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Habang wala ang ama, naglinis at nag-ayos ng kweba sina Lu at
              Bisaya upang sorpresahin ang kanilang magulang sa pagdating nito,
              ngunit ang kapatid nilang si Minda ay hindi naging masunurin. Sa
              kagustuhang mamasyal, lumabas si Minda at naglaro sa dalampasigan,
              hanggang sa hindi niya napansin na malayo na pala siya sa kanilang
              tahanan. Isang dambuhalang alon ang biglang lumitaw at lumingon
              kay Minda, hanggang sa tuluyan siyang tinangay patungo sa gitna ng
              dagat habang humihingi ng saklolo.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Narinig nina Lu at Bisaya ang hiyaw ng kanilang kapatid kaya agad
              silang tumigil sa paggawa at tumakbo palabas ng kweba. Nakita nila
              si Minda na sisinghap-singhap sa tubig at pilit na humihingi ng
              tulong dahil hindi ito marunong lumangoy. Sa pagmamahal sa
              kapatid, mabilis na nilusong ng dalawa ang malalim na bahagi ng
              dagat upang abutin ang kamay ni Minda, ngunit sa kasamaang palad
              ay pati sila ay nilamon din ng malalakas at dambuhalang alon.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Nang makauwi ang amang higante, laking pagtataka niya dahil walang
              sumalubong sa kanya na gaya ng dati. Paulit-ulit niya silang
              tinawag at hinanap sa buong paligid at sa mga kalapit na pulo,
              ngunit ni anino ng tatlo ay wala siyang nakita. Nawalan siya ng
              lakas at labis na nanangis nang makita ang ilang pirasong damit na
              nakasabit sa mga bato, na nagkumpirma sa kanyang hinala na nalunod
              ang kanyang mga minamahal na anak sa gitna ng dagat.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Sa tindi ng lumbay at pagod sa pag-iyak, nakasandal sa isang bato
              ang higante at tuluyang nakatulog nang mahaba. Nang siya ay
              magising, laking gulat niya nang makakita ng tatlong malalaking
              pulo na hindi pa naroon noon sa gitna ng dagat. Buong pagmamalaki
              niyang binigkas na ang mga pulong iyon ay ang kanyang mga anak, at
              mula noon ay tinawag ang mga itong Luzon, Visayas, at Mindanao, na
              siyang bumuo sa bansang Pilipinas.
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
