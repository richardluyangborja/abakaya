import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AngBatangMabaitAtMagalang() {
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
            Ang Batang Mabait at Magalang
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
