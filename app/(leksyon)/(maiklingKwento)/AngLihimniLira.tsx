import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AngLihimniLira() {
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
            Ang Lihim ni Lira
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
          <Text style={{ fontSize: 16 }}>
            Ang lihim ni Lira. Kwento ni teacher Rison. Si Lira ay isang tahimik
            na batang babae sa ikatlong baytang. Mabait siya, matalino at may
            kakaibang talento. Napakahusay niyang gubuhit. Sa bawat pahina ng
            kanyang kwaderno, makikita ang makukulay na mundo ng kanyang
            imahinasyon. Mga kabayong may pakpak, kagubatang puno ng engkanto
            mga bayani sa pantasya. Ngunit kahit gaano kaganda ang kanyang mga
            likha, hindi niya ito ipinapakita sa iba. Mahiyain kasi si Lira.
            Takot siyang husgahan o pagtawanan. Kaya naman palihim lang siyang
            nagdo-drawing sa likod ng klase o sa bahay kapag walang nakakakita.
            [Musika] Isang araw, napansin ng kanilang guro na si Ginoong Ramos
            ang isang pahina ng sketchpad ni Lira na naiwan sa kanyang mesa.
            Namangha siya sa ganda ng guhit. Kinausap niya si Lira at hinimok
            itong sumali sa gaganaping art contest sa kanilang paaralan. Ayoko
            po. Hindi po ako magaling. Nahihiyang sagot ni Lira. Ngunit hindi
            sumuko si Ginoong Ramos. Hindi mo malalaman ang kaya mong marating
            kung hindi mo susubukan, Anya. Dahil sa tulong at suporta ng kanyang
            guro at mga magulang, unti-unting lumakas ang loob ni Lira. Sumali
            siya sa patimpalak at sa kabila ng kaba buong puso niyang ipininta
            ang kanyang obra. Sa huli, siya ang nanalo ng unang gantimpala.
            [Palakpakan] [Musika] [Palakpakan] Simula noon, hindi na niya
            ikinubli ang kanyang talento. Natutuhan niyang magtiwala sa kanyang
            sarili at hindi kailangang matakot ipakita ang totoo mong galing.
            aral mula sa ating kwento, lahat tayo ay may natatanging talento.
            Hindi mo kailangang itago ang iyong galing dahil sa hiya o takot.
            Kapag natutuhan mong maniwala sa sarili, mas marami kang maaabot at
            magiging inspirasyon ka sa iba. Hanggang sa muli mga bata. Salamat
            sa inyong pakikinig.
          </Text>
          <Pressable
            style={{
              padding: 16,
              backgroundColor: "#CC0000",
              borderRadius: 20,
              marginBottom: 24,
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
