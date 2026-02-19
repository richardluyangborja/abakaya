import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View, StyleSheet, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function AlamatNgMakahiya() {
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
            source={require("../../../../assets/images/MAKAHIYA.png")}
            style={styles.image}
          />

          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 200,

            }}
          >
            Alamat ng Makahiya
          </Text>

          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Noong unang panahon, may isang mayamang mag-asawa na sina Mang
              Dondong at Aling Iska na may isang kaisa-isang anak na
              nagngangalang Maria. Si Maria ay kilala sa pagiging responsable,
              masunurin, at napakabait na bata, kaya naman labis siyang
              minamahal ng kanyang mga magulang. Gayunpaman, si Maria ay may
              isang natatanging katangian—siya ay labis na mahiyain. Dahil dito,
              madalas niyang kinukulong ang kanyang sarili sa kanyang silid o sa
              kanyang hardin ng mga bulaklak upang maiwasang makipag-usap o
              makisalamuha sa ibang tao.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Isang araw, nabalot ng takot ang kanilang bayan dahil sa balita
              tungkol sa isang malupit na grupo ng mga bandido na sumasalakay sa
              mga karatig-pook upang pumatay at magnakaw ng salapi. Nang
              dumating ang mga bandido sa kanilang tahanan, nagmadaling nagpasya
              sina Mang Dondong at Aling Iska na itago si Maria sa gitna ng
              kanyang hardin upang masiguro ang kanyang kaligtasan. Habang pilit
              na binubuksan ng mga bandido ang kanilang tarangkahan, taimtim na
              nanalangin si Aling Iska sa Panginoon na sana ay iligtas ang
              kanilang anak mula sa anumang panganib.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Tuluyang nakapasok ang mga bandido at marahas na pinukpok sa ulo
              sina Mang Dondong at Aling Iska hanggang sa mawalan ang mga ito ng
              malay. Ginalugad ng mga salarin ang buong kabahayan at kinuha ang
              lahat ng mahahalagang alahas at salapi. Pilit din nilang hinanap
              si Maria sa loob at labas ng bahay, ngunit kahit anong gawin nila
              ay hindi nila ito natagpuan. Dahil sa kabiguang mahanap ang
              dalaga, umalis na lamang ang mga bandido upang magtungo sa ibang
              bayan.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Nang magkamalay ang mag-asawa, agad silang nagmadali patungo sa
              hardin upang hanapin ang kanilang anak, ngunit laking gulat at
              panlulumo nila nang hindi nila makita si Maria. Sa gitna ng
              kanilang pagtangis at pag-aakalang tinangay si Maria ng mga
              bandido, may naramdaman si Mang Dondong na tumutusok sa kanyang
              mga paa. Doon niya natuklasan ang isang maliit at kakaibang
              halaman na mabilis na tumitiklop ang mga dahon sa tuwing ito ay
              nahahawakan, isang bagay na noon lamang nila nakita.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Napagtanto ng mag-asawa na ang halamang iyon ay si Maria, na
              himalang ginawang halaman ng Panginoon upang mailigtas sa
              kapahamakan. Ang bawat luhang pumatak mula sa mga magulang ay
              naging maliliit at kulay-rosas na bulaklak sa halaman. Mula noon,
              buong pagmamahal nilang inalagaan ang halaman at tinawag itong
              &quot;Makahiya&quot; dahil sa katangian nitong tila nahihiya at
              tumitiklop, gaya na lamang ng kanilang minamahal na si Maria.
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
