import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View, StyleSheet, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AlamatNgBulkangMayon() {
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
            source={require("../../../../assets/images/MAYON.png")}
            style={styles.image}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 200,
            }}
          >
            Alamat ng Bulkang Mayon
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 24,
            }}
          >
          </View>
          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Noong unang panahon sa rehiyon ng Bicol, may isang raha na
              nagngangalang Raha Makusog na may kaisa-isang anak, si Daragang
              Magayon. Ang kanyang pangalan ay nangangahulugang &quot;magandang
              dalaga,&quot; at ang balita tungkol sa kanyang angking kagandahan
              ay kumalat hanggang sa malalayong dako. Maraming manliligaw ang
              nagnais makuha ang kanyang loob, kabilang na ang mapagmataas at
              sakim na mandirigmang si Pagtuga, ngunit hindi siya iniibig ng
              dalaga dahil sa masamang ugali nito.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Nakarating ang balita ng kagandahan ni Magayon kay Alapaap, isang
              matalino at magalang na binata mula sa Katagalugan. Naglakbay siya
              patungong Bicol upang makita ang dalaga, at isang araw ay nagtagpo
              ang kanilang landas nang iligtas niya si Magayon mula sa
              pagkakahulog sa ilog. Dahil sa pangyayaring iyon, nahulog ang loob
              nila sa isa’t isa at nagkasundong magpakasal, kaya naman umuwi
              muna si Alapaap upang sunduin ang kanyang mga magulang para sa
              pormal na paghingi ng kamay ng dalaga.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Sa kasamaang palad, nalaman ni Pagtuga ang plano ng magkasintahan
              at gumawa siya ng masamang balak upang pigilan ito. Binihag niya
              si Raha Makusog at pinagbantaang papatayin kung hindi papayag si
              Magayon na magpakasal sa kanya. Upang iligtas ang buhay ng kanyang
              ama, napilitang sumang-ayon ang dalaga, ngunit agad na nakarating
              ang balita kay Alapaap kaya lumusob siya kasama ang kanyang mga
              tauhan bago pa man matuloy ang kasalan.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Naging madugo ang labanan sa pagitan ng grupo ni Alapaap at
              Pagtuga. Nasawi ni Alapaap si Pagtuga, ngunit sa gitna ng
              kaguluhan ay aksidenteng tinamaan ng ligaw na pana si Daragang
              Magayon. Habang sinusubukang saklolohan ni Alapaap ang kanyang
              iniibig, siya naman ay tinaksil at sinaksak ng isa sa mga tauhan
              ni Pagtuga. Sabay na nalagutan ng hininga ang magkasintahan at
              sila ay inilibing nang magkasama sa isang malawak na bukirin.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Pagkalipas ng ilang gabi, niyanig ang lupa ng malakas na lindol at
              nagkaroon ng mga kulog at kidlat. Kinabukasan, laking gulat ng
              lahat nang makitang tumaas ang lupa sa pinaglibingan sa kanila at
              naging isang bundok na may perpektong hugis. Ayon sa mga
              matatanda, ang bulkan ay si Daragang Magayon at ang maitim na usok
              ay ang masamang espiritu ni Pagtuga. Tinawag itong Bulkang Mayon,
              at ang bayan sa paligid nito ay pinangalanang Daraga bilang
              pagpupugay sa magandang prinsesa.
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