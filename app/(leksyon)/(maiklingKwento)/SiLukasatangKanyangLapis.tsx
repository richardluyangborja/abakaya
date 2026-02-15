import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function SiLukasatangKanyangLapis() {
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
            Si Lukas at ang Kanyang Lapis
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
            Andy space story time. Si Lucas at ang kanyang lapis. Pagkukwento ni
            Etel R. Burgos. Sa isang maliit na nayon ng gara, naninirahan ang
            mag-asawang Sina Lina at Mario kasama si Lucas. Ang kanilang
            nag-iisang anak. Si Lucas ay isang matalino at mahusay na bata. Sa
            murang edad na Siam, palagi niyang dala-dala ang kanyang lapis at
            papel upang iguhit ang kanyang mga nakikita. Napansin ng kanyang mga
            magulang ang hilig niya sa pagguhit. Kung kaya nagsikap ang mga ito
            na suportahan si Lucas sa pamamagitan ng pagbili ng mga gamit
            pangsining. Para maipadama sa anak ang kanilang suporta, palagi
            silang naglalaan ng oras upang pag-usapan ang mga gawang sining ni
            Lucas at kung paano sila makatulong na mapaunlad pa ito.
            Sinasalaysay naman ng kanyang nanay ang mga kwento tungkol sa mga
            kilalang artista sa larangan ng sining na may pinagdaanang hirap at
            tagumpay. Ang mga kwentong ito ng ina ay nagbibigay sa kanya ng
            determinasyon. Maraming mga pagsubok ang hinarap si Lucas dahil sa
            hirap din ng buhay kung minsan ay hindi niya mabili ang mga bagay na
            angkop para sa kanyang hilig sa pagguhit. May mga pagkakataon na
            kailangan niyang magtipid ng kanyang baong pera para may maitabi
            para sa mga kagamitang kailangan niya sa kanyang pagguhit. Dumating
            din ang mga sandaling naging mababa ang kanyang tiwala sa sarili.
            Ngunit ang kanyang mga magulang ay laging narian upang ipaalam sa
            kanya ang kahalagahan ng kanyang talento at ang pagmamahal nila sa
            kanya. Ano man ang kaniyang marating. Ang hindi matitinag na suporta
            na ito ay nagbigay lakas at tapang na magpatuloy. Habang lumaki si
            Lucas, patuloy na umuunlad ang kanyang hilig at talento sa pagbuhit.
            Dahil dito naipagkaloob sa kanya ang isang scholarship sa isang
            prestihiyosong paaralan ng sining sa America. Masayang-masaya ang
            kanyang mga magulang sa parangal na tinanggap niya. Lumipas ang
            maraming taon at nagsimulang kilalanin ang sining ni Lucas. Ang
            kanyang mga likha ay naging bahagi ng mga iba&apos;t ibang exhibit
            at siya ay naging isang kilalang mangguguhit. Nanatili naman sa
            kanyang tabi ang kanyang mga magulang sa buong paglalakbay niya.
            Siya ay nagtagumpay dahil sa kanyang kahusayan at sa tulong, gabay
            at pagmamahal ng kanyang pamilya. Mga bata, halina at sagutin natin.
            Ang tanong. Ano-ano ang mga hilig, talento at kakayahan ang
            tinutukoy sa kwento? [Musika] Ano ang iyong naramdaman matapos mong
            matukoy ang mga ito? [Musika] Ano ang kahalagahan na alam natin ang
            ating mga hilig, talento at kakayahan. Bilang isang bata, ano ang
            kinakailangan mong isa isipang mapaunad mo pa ang iyong mga hilig,
            talento at kakayahan? [Musika] Paano mo pa maaaring mapaunlad ang
            mga ito? Magaling mga unle space kids. Naway may aral kayong
            natutunan. Hanggang sa muli. [Musika]
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
