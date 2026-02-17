import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AlamatNgButiki() {
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
            Alamat ng Butiki
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
              Noong unang panahon, may isang bata na ang pangalan ay Kiko.
              Sobrang kulit niya at mahilig makialam sa mga bagay-bagay, kaya
              lagi siyang napapagalitan ng kanyang mga magulang. Ang masama pa
              rito, hindi siya natututo at lalong nagiging bastos habang
              lumalaki. Dahil walang gustong makipaglaro sa kanya,
              pinagdidiskitahan niya ang mga hayop at palihim na sinisira ang
              mga tanim ng kanilang kapitbahay.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Isang araw, habang naglilinis ang nanay niya sa bakuran, biglang
              sinipa at sinira ni Kiko ang isang punso. Galit na galit ang
              kanyang ina at agad humingi ng tawad sa nuno na naninirahan doon.
              &quot;Nuno, patawarin niyo po ang anak ko, hindi na po
              mauulit,&quot; pakiusap ng nanay niya. Pinagsabihan niya si Kiko
              na huwag nang uulitin iyon dahil baka magalit ang mga duwende,
              pero mukhang inaantok lang si Kiko at parang walang naririnig.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Kinabukasan, nakakita si Kiko ng mga itlog ng butiki habang
              naglalaro. Sa halip na pabayaan, pinaglaruan niya ang mga ito at
              isa-isang binasag. Bigla na lang lumitaw ang isang galit na
              duwende! &quot;Hoy, batang makulit! Bakit mo binabasag ang mga
              itlog na iyan? Hindi mo ba alam na may buhay sa loob niyan?&quot;
              sigaw ng duwende. Dahil sa dami ng kasalanan ni Kiko, nagpasya ang
              duwende na parusahan na siya at gawing kamag-anak ng mga butiki.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Nagmakaawa si Kiko at nangakong magbabago, pero hindi naniwala ang
              duwende dahil ilang beses na siyang nagsinungaling. Sabi ng
              duwende, &quot;Bilang parusa, gagawin kitang isang maliit na
              hayop. Hahalik ka sa lupa tuwing sasapit ang takipsilim para
              matuto ka ng respeto. At dahil tao ka dati, sa loob ka ng bahay
              titira at hindi sa gubat. Mula ngayon, tatawagin kang
              Butiki!&quot; Pagkasabi niyon ay bigla na lang naglaho ang
              duwende.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Kumaripas ng takbo si Kiko pauwi habang humihingi ng tulong sa
              kanyang ina, pero huli na ang lahat. Nakita ng kanyang nanay kung
              paano dahan-dahang lumiit at nagbago ang anyo ni Kiko hanggang sa
              maging isang ganap na butiki. Hanggang ngayon, makikita natin ang
              mga butiki na tila humahalik sa sahig tuwing hapon bilang tanda ng
              paggalang. Aral para sa mga bata: laging rumespeto sa magulang at
              huwag maging malupit sa kapaligiran.
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
