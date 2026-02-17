import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AlamatNgPalay() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          marginTop: 24,
          flexDirection: "row",
          gap: 16,
          padding: 16,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Text>Back</Text>
        </Pressable>
        <Text>ABAKAYA</Text>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 16,
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Alamat ng Palay
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 24,
            }}
          >
            <Pressable
              style={{
                borderColor: "#333",
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 20,
              }}
            >
              <Text>Pakinggan</Text>
            </Pressable>
            <Pressable
              style={{
                borderColor: "#333",
                borderWidth: 1,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 20,
              }}
            >
              <Text>Panoorin</Text>
            </Pressable>
          </View>
          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Noong unang panahon, ang mga tao ay hindi pa marunong magtanim ng
              halaman o mag-alaga ng hayop upang may makain. Sila ay umaasa
              lamang sa biyaya ng kalikasan, kaya naman sila ay palipat-lipat ng
              tirahan kung saan may matatagpuang mga bungang-kahoy o isda.
              Kasama sa mga taong ito ang mag-asawang Banag at Danas na pagod na
              sa ganitong uri ng pamumuhay. Nais ni Banag na manirahan na lamang
              sa isang permanenteng pook upang doon ay mapayapang maisilang at
              mapalaki ang kanilang magiging anak.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Nagpasya ang mag-asawa na manirahan sa isang tahimik na bahagi ng
              bundok kung saan masagana ang mga prutas at hayop. Gayunpaman,
              dumating ang isang matinding tagtuyot na nagdulot ng pagkamatay ng
              mga halaman at punong-kahoy, at ang mga batis ay natuyo rin. Sa
              desperasyong makahanap ng makakain para sa asawa, naglakbay si
              Danas nang malayo hanggang sa marating niya ang isang malapad na
              parang. Dahil sa tindi ng pagod at gutom, nahiga siya sa damuhan
              at doon ay mahimbing na nakatulog.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Habang natutulog, nagising si Danas sa isang mahiwagang awit na
              nagmumula sa mga damo sa kanyang paligid. Inutusan siya ng mga
              damo na pulutin ang kanilang mga gintong butil dahil ito raw ang
              magiging pag-asa ng tao. Tinuruan siya kung paano bayuhin ang mga
              ito upang maalis ang gintong balat at iluto ang puting laman
              hanggang sa lumambot. Sinunod ni Danas ang utos, pumitas ng
              maraming uhay, at nagmamadaling umuwi upang ipakain ang masarap na
              butil sa kanyang asawang si Banag.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Nang sumunod na araw, bumalik si Danas sa parang at muling umawit
              ang mga damo upang ibigay ang susunod na hakbang. Binilinan siya
              na itanim ang mga butil sa lupang pinalambot ng ulan at alagaan
              ang mga tutubong pananim nang may tiyaga. Pinayuhan din siya na sa
              bawat pag-aani ay maglaan ng mga butil na muling itatanim para sa
              susunod na panahon. Ito ang naging simula ng kaalaman ni Danas sa
              pagsasaka, ang sining na magbibigay sa kanila ng permanenteng
              ikabubuhay.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Kasabay ng pagbuhos ng malakas na ulan, binigyan ng mga damo ang
              kanilang sarili ng pangalang &quot;Palay.&quot; Inutusan nila si
              Danas na ibalita at ituro sa lahat ng tao ang sining ng pag-aalaga
              ng palay upang wala nang magutom pa. Sinunod ni Danas ang lahat ng
              bilin: gumawa siya ng malawak na bukid at ibinahagi ang kanyang
              kaalaman sa iba. Mula noon, naging mga magsasaka na ang mga tao,
              nagkaroon sila ng permanenteng tahanan, at naging sapat ang
              kanilang pagkain dahil sa pagtatanim ng palay.
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
