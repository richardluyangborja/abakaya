import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AlamatNgAmpalaya() {
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
            Alamat ng Ampalaya
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
              Noong unang panahon sa Bayan ng Sariwa, masayang naninirahan ang
              lahat ng uri ng mga gulay. Makikita rito ang paglalaro at
              paghahabulan nina Labanos, Mustasa, Bawang, Sibuyas, at marami
              pang iba. Ngunit sa gitna ng kanilang kasayahan, may isang
              kakaibang gulay na umusbong—si Ampalaya. Siya ay may maputlang
              balat at walang anumang lasa, kaya naman unti-unting namahay ang
              inggit sa kanyang puso. Naging bugnutin siya at itinaboy ang lahat
              ng gulay na nagtatangkang lumapit sa kanya.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Dahil sa matinding inggit, bumuo ng isang maitim na balak si
              Ampalaya upang magkaroon din siya ng ganda at lasa tulad ng iba.
              Isang gabi, habang mahimbing na natutulog ang mga gulay,
              dahan-dahan siyang gumapang at ninakaw ang kanilang mga katangian.
              Kinuha niya ang tamis ni Kalabasa, ang asim ni Kamatis, ang
              anghang ni Luya, ang kaputian ni Labanos, ang lila na kulay ni
              Talong, at ang gaspang ni Patola. Kampante si Ampalaya na siya na
              ang magiging pinakahanga-hangang gulay sa lahat.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Kinabukasan, nagulantang ang buong bayan sa naganap na nakawan,
              ngunit biglang dumating ang isang dayuhang gulay na may iba’t
              ibang kulay at lasa. Bagama&apos;t namangha ang marami, nagduda si
              Kamatis kaya tinipon niya ang mga kasama upang manubok. Nahuli
              nila sa akto ang dayuhang gulay sa harap ng salamin habang
              isa-isang hinuhubad ang mga ninakaw na katangian, at doon ay
              nabunyag na ito ay walang iba kundi ang maputlang si Ampalaya.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Dinala si Ampalaya sa harap ng hukumang pinamumunuan ng mga diwata
              ng Araw, Lupa, Tubig, at Hangin. Bilang parusa sa kanyang
              pagnanakaw at paglabag sa batas ng kalikasan, iniutos ng mga
              diwata na mananatili sa kanyang katawan ang lahat ng lasa, kulay,
              at gandang kanyang kinuha. Sa gabi ring iyon, nagkaroon ng
              kagila-gilalas na pangyayari sa loob ng kanyang katawan:
              nag-away-away ang lahat ng ninakaw niyang katangian hanggang sa
              maghalo-halo ang mga ito.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Dahil sa labanang ito, ang balat ni Ampalaya ay naging madilim na
              lungtian at naging kulubot dahil sa pagsasagupaan ng kinis at
              gaspang. Ang paghahalo naman ng tamis, asim, at anghang ay
              nagbunga ng isang matinding pait. Mula noon, naging mapait na ang
              lasa ni Ampalaya, ngunit natuto na siyang magsisi sa kanyang
              kasalanan. Ang alamat na ito ay nagtuturo sa atin na ang
              pagkainggit ay nagdudulot ng masama at dapat nating tanggapin ang
              sarili nating katangian.
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
