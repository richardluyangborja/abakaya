import { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Modal,
  StyleSheet,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { AvatarHeader } from "@/app/lib/avatar-header";

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
  {
    score: 1,
    label: "1 Star",
    image: require("../../../assets/images/one_star.png"),
  },
  {
    score: 2,
    label: "2 Stars",
    image: require("../../../assets/images/two_star.png"),
  },
  {
    score: 3,
    label: "3 Stars",
    image: require("../../../assets/images/three_star.png"),
  },
  {
    score: 4,
    label: "4 Stars",
    image: require("../../../assets/images/four_star.png"),
  },
  {
    score: 5,
    label: "5 Stars",
    image: require("../../../assets/images/five_star.png"),
  },
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
  const [paused, setPaused] = useState(false);

  const [progress, setProgress] = useState(new Animated.Value(1));

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
    if (gameOver || paused) return;

    if (timeLeft === 0) {
      handleNextTurn();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    Animated.timing(progress, {
      toValue: timeLeft / turnTime,
      duration: 1000,
      useNativeDriver: false,
    }).start();

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
    setPaused(false); // important
    setupTurn();
  };

  const feedback = feedbacks.find((r) => r.score === score) ?? {
    label: "0 Star",
    image: require("../../../assets/images/timer.png"),
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
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </Pressable>

        <Text style={{ color: "#fff" }}>Madali Level</Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <Pressable onPress={() => setPaused(true)}>
            <Feather name="pause" size={24} color="#fff" />
          </Pressable>
          <AvatarHeader />
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

      {/* BAR ITU STAYL */}
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "semibold",
          color: "#000",
          alignSelf: "center",
          top: 70,
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
          top: 100,
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
              top: 100,
            }}
            onPress={() => handleAnswer(choice)}
          >
            <Text style={{ fontSize: 36, fontWeight: "bold" }}>{choice}</Text>
          </Pressable>
        ))}
      </View>

      <Text
        style={{
          position: "fixed",
          fontSize: 20,
          fontWeight: "semibold",
          marginLeft: 16,
          top: 100,
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
              backgroundColor: "#023D7A",
              borderRadius: 20,
              padding: 24,
              alignItems: "center",
            }}
          >
            <View style={{ marginBottom: 20 }}>
              {feedback.image ? (
                <Image
                  source={feedback.image}
                  style={{ width: 150, height: 150 }}
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
                top: 180,
                position: "absolute",
                left: 110,
              }}
              onPress={() => handleRestart()}
            >
              <MaterialIcons name="replay" size={24} color="white" />
            </Pressable>

            <Pressable
              style={{
                top: 180,
                position: "absolute",
                marginLeft: 30,
              }}
              onPress={() => router.back()}
            >
              <Entypo name="home" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal visible={paused} transparent animationType="fade">
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
              backgroundColor: "#023D7A",
              borderRadius: 20,
              padding: 24,
              alignItems: "center",
            }}
          >
            <Pressable onPress={() => setPaused(false)}>
              <Text style={styles.pauseBtn}>Ituloy</Text>
            </Pressable>

            <Pressable onPress={handleRestart}>
              <Text style={styles.pauseBtn}>Ulitin</Text>
            </Pressable>

            <Pressable onPress={() => router.back()}>
              <Text style={styles.pauseBtn}>Itigil</Text>
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
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#01254C",
  },
  quiztree: {
    position: "absolute",
    width: 380,
    height: 300,
    left: -18,
    top: 80,
  },
  progressBarContainer: {
    height: 15,
    width: "50%",
    backgroundColor: "#FFE18B",
    borderRadius: 5,
    marginTop: 80,
    marginLeft: 15,
    alignSelf: "center",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#CC0001",
    borderRadius: 5,
  },
  modalBox: {
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#023D7A",
    alignItems: "center",
    padding: 24,
  },
  pauseBtn: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    borderRadius: 5,
    backgroundColor: "#15E80E",
    width: 180,
    padding: 10,
    textAlign: "center",
    marginBottom: 10,
  },
});
