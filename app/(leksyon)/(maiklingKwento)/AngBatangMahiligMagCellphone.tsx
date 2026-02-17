import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AngBatangMahiligMagCellphone() {
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
            Ang Batang Mahilig Mag-Cellphone
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
              Si Gabriel ay isang pitong taong gulang na batang laki sa yaman sa
              Calamba, Laguna. Dahil nakukuha niya ang lahat ng kanyang
              magustuhan, nalulong siya sa paggamit ng cellphone at napabayaan
              na ang kanyang pag-aaral at pakikipagkapwa-tao. Isang araw, sa
              sobrang galit nang kunin ng kanyang ina ang gadget, nakagawa si
              Gabriel ng masama—kinagat niya ang kamay ng kanyang ina at
              itinulak ito upang makuha muli ang cellphone.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Dahil sa kanyang masamang asal, nagpakita ang diwatang si Sell,
              ang diwata ng inobasyon. Pinarusahan niya si Gabriel sa
              pamamagitan ng pag-aalis ng kanyang marangyang buhay, teknolohiya,
              at maging ang pagkilala ng kanyang sariling pamilya. Biglang
              nahanap ni Gabriel ang sarili na nag-iisa sa lansangan, gutom, at
              walang matuluyan, habang pilit na nagmamakaawa sa kanyang mga
              magulang na hindi na siya muling makilala.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Sa gitna ng kanyang paghihirap, natulungan siya ng isang batang
              nagngangalang Angelo. Kahit mahirap lamang at nakatira sa isang
              tagping barung-barong, malugod na tinanggap nina Angelo si
              Gabriel. Dito namulat ang mga mata ni Gabriel sa tunay na
              kalagayan ng buhay; nakita niya ang saya ng isang pamilya kahit
              walang gadget at ang pagsusumikap ng kanyang kaibigan na
              makapag-aral sa kabila ng kakulangan sa pera.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Matapos ang isang malaking sunog na tumupok sa tahanan nina
              Angelo, lalong naging matatag si Gabriel at natutong magtrabaho sa
              pamamagitan ng pangangalakal ng basura. Ang karanasang ito ang
              nagturo sa kanya ng tunay na halaga ng pagpapakumbaba, pag-aaral,
              at pagmamahal sa kapwa. Dahil sa nakitang pagbabago sa kanyang
              puso, muling nagpakita ang diwata at ibinalik siya sa kanyang
              dating buhay bilang gantimpala sa kanyang mga natutunan.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Nagising si Gabriel sa kanyang sariling silid at agad na humingi
              ng tawad at yumakap sa kanyang mga magulang. Hindi niya
              kinalimutan ang aral ng nakaraan; hinanap niya si Angelo at
              tinulungan ang pamilya nito sa tulong ng kanyang mga magulang. Sa
              huli, naging magkaibigang muli ang dalawa, at namuhay si Gabriel
              nang may balanse sa paggamit ng teknolohiya habang pinahahalagahan
              ang mga tunay na koneksyon sa mga tao sa kanyang paligid.
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
