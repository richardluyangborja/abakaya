import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AlamatNgAso() {
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
            Alamat ng Aso
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
              Noong unang panahon, may dalawang magkaibigan na nagngangalang
              Masong at Lito. Sila ay laging magkasama sa lahat ng laro at
              galaan, at walang makapaghihiwalay sa kanilang dalawa. Napakatapat
              nila sa isa&apos;t isa at laging handang tumulong sa oras ng
              pangangailangan.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Ngunit isang araw, dinapuan ng malubhang karamdaman si Masong. Sa
              kabila ng pag-aalaga ni Lito at ng mga doktor, hindi nagtagal at
              pumanaw si Masong. Labis na nagluksa si Lito sa pagkawala ng
              kanyang matalik na kaibigan. Araw-araw siyang pumupunta sa puntod
              ni Masong, dinadalhan ito ng mga bulaklak, at kinakausap na parang
              buhay pa ang kaibigan.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Dahil sa sobrang pangungulila at pag-iyak, nanghina ang katawan ni
              Lito hanggang sa siya rin ay nagkasakit. Pinagbawalan siya ng
              kanyang ina na lumabas ng bahay upang makapagpahinga. Habang
              nagpapagaling, napansin ni Lito ang isang maliit na hayop na may
              apat na paa at mabalahibo na laging nagbabantay sa labas ng
              kanyang bintana. Tila ba nakikiramay ito sa kanyang nararamdaman.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Nang tuluyan nang gumaling si Lito, agad siyang nagpunta sa
              sementeryo upang dalawin ang puntod ni Masong. Laking gulat niya
              nang makitang nandoon na ang maliit na hayop at tila nagbabantay
              sa puntod. Mula noon, saanman magpunta si Lito ay nakabuntot ang
              hayop na ito. Dahil sa presensya ng hayop, unti-unting nawala ang
              lungkot ni Lito.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Dahil sa katapatan at pagiging mabuting kasama ng hayop, naisip ni
              Lito na ito ay parang si Masong. Tinawag niya itong
              &quot;Masong,&quot; hanggang sa kalaunan ay naging &quot;Aso&quot;
              na ang tawag ng lahat sa hayop na ito bilang simbolo ng katapatan
              ng isang kaibigan.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Aral: Ang tunay na pagkakaibigan ay hindi natatapos sa kamatayan.
              Ang katapatan at pagmamahal sa kapwa ay isang kayamanang dapat
              nating pakaingatan.
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
