import { useRouter } from "expo-router"; 
import { Pressable, ScrollView, Text, View } from "react-native";

export default function PamilyangNagtutulungan() {
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
            Pamilyang Nagtutulungan
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
            [Musika] Halin&apos;t pakinggan ang ating kwento ngayong araw
            tungkol sa pamilyang nagtutulungan. Isinulat at iginuhit nina Evelyn
            S. Lazaro, Jovely. Odtohan, Gladis Beherman, Elba C. Aliposo,
            digitized by Eugene S. Ignacio. Araw ng Sabado. Maagang nagising ang
            pamilya Pere. [Musika] Abala ang buong mag-anak upang ipaghanda ang
            kaarawan ng kanilang bunso. [Musika] Si tatay ang nagkakatay ng
            manok. Si nanay ang nagluluto ng pagkain para sa handaan. Si ate ang
            katulong ni nanay sa kusina. Siya ang tagahugas ng mga kagamitan sa
            pagluluto. Si kuya naman ang tagaigib ng tubig na gagamitin sa
            paghuhugas. Habang si bunso ay masaya lang na naglalaro sa sala.
            Dahil sa kanilang pagtutulungan, masayang pinagsaluhan ng mag-anak
            ang handaan sa kaarawan ni bunso. Yey! Mga bata, sagutin ang mga
            tanong. Kaninong kaarawan ang ipagdiriwang ng pamilya Perez? Sino
            ang naghanda ng manok na uulamin? [Musika] Sino ang nagluto ng
            pagkain para sa handaan? [Musika] Sino ang katulong ni nanay sa
            kusina? Sino naman ang tagaigid ng tubig na gagamitin sa paghuhugas?
            [Musika] Sino ang masayang naglalaro sa sala? Magaling mga bata.
            Huwag kalimutang maging mabait at magalang sa ating pamilya.
            Hanggang sa muli mga unless kids. Paalam.
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
