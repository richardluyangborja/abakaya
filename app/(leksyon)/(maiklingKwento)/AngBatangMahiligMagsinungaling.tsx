import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function AngBatangMahiligMagsinungaling() {
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
            Ang Batang Mahilig Magsinungaling
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
              Si Elisa ay isang batang babae na naninirahan sa isang malayong
              nayon. Kilala siya sa kanilang lugar, hindi dahil sa kabutihan,
              kundi dahil sa kanyang pagiging mahilig magsinungaling. Madalas
              siyang gumagawa ng mga kuwento, gaya ng pagdadahilan na siya ay
              may sakit upang makaiwas sa pagpasok sa paaralan at makapaglaro
              lamang maghapon. Dahil sa kanyang bisyo, madalas siyang nagdudulot
              ng kalituhan at kawalan ng unawaan sa kanyang mga kapatid at
              kalaro.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Umabot pa ang kanyang pagsisinungaling sa kanyang pag-aaral.
              Minsan ay ibinalita niya sa kanyang pamilya na siya ay nakapasa sa
              isang pagsusulit, kahit ang totoo ay bumagsak siya rito. Ang
              kawalan niya ng katapatan ay naging bahagi na ng kanyang
              pang-araw-araw na buhay, hanggang sa hindi na niya namamalayan ang
              bigat ng epekto nito sa mga tao sa kanyang paligid.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Isang gabi, habang naglalakad si Elisa, may nakasalubong siyang
              isang matanda na nagtatanong ng direksyon. Sa halip na tumulong
              nang tapat, sinagot niya ito ng mga maling direksyon at puro
              kasinungalingan. Hindi alam ni Elisa na ang matanda pala ay isang
              engkantada na may kapangyarihang bumasa ng puso. Dahil sa galit ng
              engkantada sa kanyang pag-uugali, pinarusahan niya si Elisa: sa
              bawat kasinungalingang bibitawan ng bata, unt-unting mawawala ang
              kanyang boses.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Noong una ay hindi naniwala si Elisa, ngunit habang tumatagal ay
              unti-unti ngang naglaho ang kanyang tinig hanggang sa maging ganap
              siyang pipi. Sa puntong ito, napuno ng takot at pagsisisi ang
              bata. Wala siyang magawa kundi ang umiyak at magsumamo sa
              engkantada sa loob ng kanyang puso, dahil wala nang tunog na
              lumalabas sa kanyang bibig sa tuwing susubukan niyang magsalita.
            </Text>
            <Text style={{ fontSize: 16, textAlign: "justify" }}>
              Dahil sa tapat na pagsisisi ni Elisa, naulinigan ng engkantada ang
              tibok ng kanyang puso at muling ibinalik ang kanyang boses. Labis
              ang tuwa ni Elisa at nangakong hinding-hindi na muling
              magsisinungaling sa kanyang kapwa. Mula noon, naging huwaran siya
              ng katapatan sa kanilang nayon, at ang kanyang kuwento ay
              nagsilbing paalala sa lahat na ang pagsisinungaling ay nagdudulot
              lamang ng kapahamakan sa sarili at sa iba.
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
