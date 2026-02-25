import { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Modal,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

const prutas = [
  {
    id: 1,
    name: "Saging",
    image: require("../../../assets/images/manggo.png"),
  },
  {
    id: 2,
    name: "Mangga",
    image: require("../../../assets/images/letchon.png"),
  },
  {
    id: 3,
    name: "Mansanas",
    image: require("../../../assets/images/apple.png"),
  },
  {
    id: 4,
    name: "Pinya",
    image: require("../../../assets/images/sorbetes.png"),
  },
  {
    id: 5,
    name: "Orange",
    image: require("../../../assets/images/cray.png"),
  },
];

const feedbacks = [
  { score: 1, label: "1 Star", image: null },
  { score: 2, label: "2 Stars", image: null },
  { score: 3, label: "3 Stars", image: null },
  { score: 4, label: "4 Stars", image: null },
  { score: 5, label: "5 Stars", image: null },
];

const maxTurns = 5;
const turnTime = 20;

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateChoices(correct: number) {
  const choices = new Set<number>();
  choices.add(correct);

  while (choices.size < 3) {
    const random = getRandomNumber(1, 10);
    choices.add(random);
  }

  return Array.from(choices).sort(() => Math.random() - 0.5);
}

export default function MadaliPagsusulitNumero() {
  const router = useRouter();

  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(turnTime);
  const [gameOver, setGameOver] = useState(false);

  const [fruit, setFruit] = useState(prutas[0]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [choices, setChoices] = useState<number[]>([]);

  const setupTurn = () => {
    const randomFruit = prutas[getRandomNumber(0, prutas.length - 1)];
    const randomNumber = getRandomNumber(1, 10);

    setFruit(randomFruit);
    setCorrectAnswer(randomNumber);
    setChoices(generateChoices(randomNumber));
    setTimeLeft(turnTime);
  };

  useEffect(() => {
    setupTurn();
  }, []);

  useEffect(() => {
    if (gameOver) return;

    if (timeLeft === 0) {
      handleNextTurn();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameOver]);

  const handleAnswer = (selected: number) => {
    if (selected === correctAnswer) {
      setScore((prev) => prev + 1);
    }
    handleNextTurn();
  };

  const handleNextTurn = () => {
    if (turn >= maxTurns) {
      setGameOver(true);
      return;
    }

    setTurn((prev) => prev + 1);
    setupTurn();
  };

  const handleRestart = () => {
    setTurn(1);
    setScore(0);
    setGameOver(false);
    setupTurn();
  };

  const feedback = feedbacks.find((r) => r.score === score) ?? {
    label: "0 Star",
    image: null,
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E3BD72",
      }}
    >
      <View style={styles.navbar}>
        <Pressable onPress={() => router.back()}>
          <Ionicons style={{ color: "#fff" }} name="chevron-back" size={24} />
        </Pressable>
        <Text style={{ color: "#fff", marginTop: 3 }}>Madali Level</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 24,
          }}
        >
          <Text style={{ color: "#fff", top: 3, marginLeft: 110 }}>Avatar</Text>
          <Feather
            style={{ color: "#ff0000", position: "absolute", marginLeft: 180 }}
            name="settings"
            size={24}
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#EEB311",
          alignSelf: "center",
        }}
      >
        Numero
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "semibold",
          color: "#023D7A",
          alignSelf: "center",
        }}
      >
        Turn {turn} / {maxTurns}
      </Text>
      <Image
        source={require("../../../assets/images/num_quiztree.png")}
        style={styles.quiztree}
      />

      <Text
        style={{
          fontSize: 16,
          fontWeight: "semibold",
          color: "#CC0001",
          alignSelf: "center",
          top: 80,
        }}
      >
        Time Left: {timeLeft}s
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "semibold",
          color: "#000",
          alignSelf: "center",
          top: 150,
        }}
      >
        Bilangin at piliin ang tamang sagot.
      </Text>

      {/* text muna wala pa image */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 8,
          marginVertical: 48,
          paddingHorizontal: 16,
          top: 200,
        }}
      >
        {Array.from({ length: correctAnswer }).map((_, index) => (
          <View key={index}>
            {fruit.image ? (
              <Image
                source={fruit.image}
                style={{
                  width: 70,
                  height: 70,
                }}
              /> // dito style boy
            ) : (
              <Text style={{ fontSize: 16 }}>{fruit.name}</Text>
            )}
          </View>
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          gap: 28,
          marginBottom: 20,
        }}
      >
        {choices.map((choice) => (
          <Pressable
            key={choice}
            style={{
              backgroundColor: "#eee",
              padding: 16,
              borderRadius: 20,
              top: 190,
            }}
            onPress={() => handleAnswer(choice)}
          >
            <Text style={{ fontSize: 36, fontWeight: "bold" }}>{choice}</Text>
          </Pressable>
        ))}
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "semibold",
          marginLeft: 16,
          top: 200,
        }}
      >
        Score: {score}
      </Text>
      <Modal visible={gameOver} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: 24,
              alignItems: "center",
            }}
          >
            <View style={{ marginBottom: 20 }}>
              {feedback.image ? (
                <Image
                  source={feedback.image}
                  style={{ width: 80, height: 80 }}
                />
              ) : (
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#EEB311",
                  }}
                >
                  {feedback.label}
                </Text>
              )}
            </View>

            <Pressable
              style={{
                backgroundColor: "#EEB311",
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 16,
                marginBottom: 12,
              }}
              onPress={handleRestart}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Play Again
              </Text>
            </Pressable>

            <Pressable onPress={() => router.back()}>
              <Text
                style={{
                  fontSize: 16,
                  color: "red",
                }}
              >
                Exit
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 35,
    marginTop: 0,
    backgroundColor: "#01254C",
    gap: 16,
  },
  quiztree: {
    position: "absolute",
    width: 380,
    height: 300,
    left: -18,
    top: 80,
  },
});

