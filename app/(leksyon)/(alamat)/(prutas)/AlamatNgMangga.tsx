import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View, StyleSheet, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function AlamatNgMangga() {
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
            source={require("../../../../assets/images/MANGGA.png")}
            style={styles.image}
          />

          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 200,
            }}
          >
            Alamat ng Mangga
          </Text>

          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Noong unang panahon, may isang haring kilala sa pagiging sobrang
              strikto at malupit sa kanyang mga nasasakupan. Isang araw, isang
              kawal ang nakatulog sa kanyang pagbabantay dahil sa matinding
              pagod at puyat sa pag-aalaga sa kanyang anak na may sakit, na
              naging dahilan ng pagtakas ng ilang bilanggo. Hindi pinakinggan ng
              hari ang pagsusumamo ng kawal at agad itong ipinatapon sa
              kulungan, na nag-iwan sa kanyang asawa at anak na lubos na
              naghihinagpis at walang maaasahan sa buhay.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Sa kabila ng kalungkutan, nabuhayan ng loob ang asawa ng kawal
              nang maglabas ang hari ng isang kautusan: ang sinumang
              makakapagbigay ng pinaka-kakaibang handog sa kanyang darating na
              kaarawan ay pagbibigyan sa isang kahilingan. Agad na naglakbay ang
              ina at ang kanyang anak upang maghanap ng bagay na hindi pa
              nakikita o natatanggap ng hari. Pagod at gutom silang naglakad sa
              kung saan-saang dako, ngunit hindi sila sumuko dahil ito na lamang
              ang tanging paraan upang mapalaya ang kanilang padre de pamilya.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Habang nagpapahinga sa ilalim ng isang puno, isang gusgusing
              matanda ang lumapit sa kanila at humingi ng pagkain. Bagaman
              kakarampot na lamang ang kanilang baon, hindi nag-atubili ang
              Ginang na ibahagi ang kanyang pagkain sa matanda dahil sa kanyang
              likas na kabutihan. Dahil sa kagandahang-loob na ito, biglang
              nagliwanag ang paligid at ang matanda ay nagbagong-anyo bilang
              isang napakagandang diwata. Bilang gantimpala, binigyan ng diwata
              ang Ginang ng dalawang hugis-pusong prutas na kulay berde na
              tinatawag na &quot;mangga,&quot; isang prutas na hindi pa
              nararanasan ng mga tao sa daigdig.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Pagdating ng kaarawan ng hari, ang mga mangga na itinago ng Ginang
              sa loob ng bigasan ay naging kulay ginto at naglabas ng
              napakabangong samyo. Nang ito ay iabot sa hari, labis na nabighani
              ang pinuno sa kakaibang hitsura at amoy ng prutas. Pagkatapos
              itong tikman, nasiyahan nang husto ang hari at tinanong ang Ginang
              kung ano ang kanyang kahilingan. Walang pag-aalinlangang hiningi
              ng Ginang ang kalayaan ng kanyang asawang kawal, at dahil sa
              katuwaan ng hari sa handog, agad niyang ipinagkaloob ang
              kapatawaran dito.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Dahil sa sarap ng mangga, iniutos ng hari na itanim ang mga buto
              nito sa loob ng palasyo upang muli niya itong matikman. Lumipas
              ang mga buwan at ang mga buto ay tumubo at namunga nang marami,
              hanggang sa ang prutas na ito ay kumalat sa iba&apos;t ibang dako
              ng kaharian at maging sa ibang mga lugar. Ito ang naging simula ng
              pagdami ng mangga sa mundo, na nagsilbing paalala ng kabutihan ng
              puso ng isang asawa at ang mahiwagang regalo ng isang diwata.
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
