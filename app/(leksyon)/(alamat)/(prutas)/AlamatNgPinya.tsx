import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AlamatNgPinya() {
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
            Alamat ng Pinya
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
              Noong unang panahon, may isang mag-inang naninirahan sa isang
              malayong pook, si Aling Rosa at ang kanyang anak na si Pinang.
              Dahil nag-iisang anak, mahal na mahal ni Aling Rosa si Pinang kaya
              naman lumaki itong sunod sa layaw at naging labis na tamad.
              Bagaman nais ng ina na matuto ang anak ng mga gawaing bahay,
              laging idinadahilan ng bata na alam na niya ang mga ito, ngunit sa
              katotohanan ay lagi lamang siyang naghahanap ng paraan upang
              makaiwas sa trabaho.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Isang araw, dinapuan ng malubhang karamdaman si Aling Rosa kaya
              napilitan si Pinang na kumilos sa loob ng bahay. Inutusan siya ng
              kanyang inang magluto ng lugaw, ngunit dahil abala sa paglalaro,
              napabayaan niya ang kalan hanggang sa ang lugaw ay masunog at
              dumikit sa palayok. Sa kabila nito, nagpasensya pa rin si Aling
              Rosa dahil sa kaisipang kahit papaano ay sinubukan siyang
              paglingkuran ng kanyang anak sa gitna ng kanyang pagkakasakit.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Habang tumatagal ang sakit ng ina, lalong naging pabaya si Pinang
              sa mga utos nito. Sa bawat kagamitang kailangan niya sa pagluluto,
              gaya ng posporo o sandok, ay palagi siyang nagtatanong sa kanyang
              ina sa halip na hanapin ito nang maigi. Dahil sa matinding yamot
              at pagod ni Aling Rosa sa paulit-ulit na pag-uusisa ng anak,
              nawika niya sa galit: &quot;Naku Pinang, sana ay magkaroon ka ng
              maraming mata upang makita mo ang lahat ng bagay at hindi ka na
              tanong nang tanong sa akin!&quot;.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Dahil sa takot sa galit ng ina, tahimik na umalis si Pinang upang
              hanapin ang nawawalang sandok at hindi na muling bumalik pa. Nang
              sumapit ang gabi, nabahala si Aling Rosa dahil hindi na sumasagot
              ang kanyang anak sa kanyang mga tawag. Lumipas ang ilang araw at
              gumaling na ang ina, ngunit kahit anong paghahanap at pagtatanong
              niya sa mga kapitbahay ay hindi na niya nakita si Pinang—naglaho
              itong parang bula.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Isang araw, may napansin si Aling Rosa na isang kakaibang halaman
              na tumubo sa kanyang bakuran sa mismong lugar kung saan huling
              nakita si Pinang. Inalagaan niya itong mabuti hanggang sa ito ay
              magbunga ng isang hugis ulong prutas na napapalibutan ng maraming
              &quot;mata.&quot; Biglang naalala ni Aling Rosa ang huli niyang
              sumpa sa anak at labis siyang nagsisi habang nananangis. Tinawag
              niya ang halaman na &quot;Pinang,&quot; na sa kalaunan ay naging
              &quot;Pinya&quot; sa paglipat-lipat sa bibig ng mga tao.
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
