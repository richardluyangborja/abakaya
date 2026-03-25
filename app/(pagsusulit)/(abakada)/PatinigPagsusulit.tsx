import { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

const words = [
  "bahay",
  "aso",
  "pusa",
  "bola",
  "keso",
  "gatas",
  "saging",
  "ulan",
  "ilaw",
  "lamesa",
];

const feedbacks = [
  { score: 1, image: require("../../../assets/images/one_star.png") },
  { score: 2, image: require("../../../assets/images/two_star.png") },
  { score: 3, image: require("../../../assets/images/three_star.png") },
  { score: 4, image: require("../../../assets/images/four_star.png") },
  { score: 5, image: require("../../../assets/images/five_star.png") },
];

const maxTurns = 5;
const turnTime = 20;

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function countVowels(word: string) {
  return word
    .toUpperCase()
    .split("")
    .filter((char) => ["A", "E", "I", "O", "U"].includes(char)).length;
}

function generateChoices(correct: number) {
  const choices = new Set<number>();
  choices.add(correct);

  while (choices.size < 3) {
    const random = getRandomNumber(1, 5);
    choices.add(random);
  }

  return Array.from(choices).sort(() => Math.random() - 0.5);
}

export default function PatinigQuiz() {
  const router = useRouter();

  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(turnTime);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);

  const [word, setWord] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [choices, setChoices] = useState<number[]>([]);

  const [feedbackText, setFeedbackText] = useState("");

  const [progress] = useState(new Animated.Value(1));

  const setupTurn = () => {
    const randomWord = words[getRandomNumber(0, words.length - 1)];
    const vowelCount = countVowels(randomWord);

    setWord(randomWord);
    setCorrectAnswer(vowelCount);
    setChoices(generateChoices(vowelCount));
    setTimeLeft(turnTime);
    setFeedbackText("");
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
      setFeedbackText("✔ Tama!");
    } else {
      setFeedbackText("✖ Mali!");
    }

    setTimeout(() => {
      handleNextTurn();
    }, 800);
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
    setPaused(false); // add this
    setupTurn();
  };

  const feedback =
    feedbacks.find((r) => r.score === score)?.image ??
    require("../../../assets/images/timer.png");

  return (
    <View style={{ flex: 1, backgroundColor: "#E3BD72" }}>
      {/* NAVBAR */}
      <View style={styles.navbar}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </Pressable>

        <Text style={{ color: "#fff" }}>Madali Level</Text>

        <View style={{ flexDirection: "row", gap: 16 }}>
          <Text style={{ color: "#fff" }}>Avatar</Text>
          <Pressable onPress={() => setPaused(true)}>
            <Feather name="pause" size={22} color="#fff" />
          </Pressable>
        </View>
      </View>

      {/* TITLE */}
      <Text style={styles.title}>Patinig</Text>
      <Text style={styles.turn}>
        Turn {turn} / {maxTurns}
      </Text>

      {/* TIMER */}
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

      {/* QUESTION */}
      <Text style={styles.question}>Ilan ang patinig sa salitang ito?</Text>

      <Text style={styles.word}>{word}</Text>

      {/* FEEDBACK */}
      {feedbackText !== "" && (
        <Text style={styles.feedback}>{feedbackText}</Text>
      )}

      {/* CHOICES */}
      <View style={styles.choices}>
        {choices.map((choice) => (
          <Pressable
            key={choice}
            style={styles.choiceBtn}
            onPress={() => handleAnswer(choice)}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </Pressable>
        ))}
      </View>

      {/* SCORE */}
      <Text style={styles.score}>Score: {score}</Text>

      {/* GAME OVER */}
      <Modal visible={gameOver} transparent animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalBox}>
            <Animated.Image
              source={feedback}
              style={{ width: 150, height: 150 }}
            />

            <Pressable onPress={handleRestart}>
              <MaterialIcons name="replay" size={24} color="#fff" />
            </Pressable>

            <Pressable onPress={() => router.back()}>
              <Entypo name="home" size={24} color="#fff" />
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal visible={paused} transparent animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalBox}>
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
    padding: 16,
    paddingTop: 35,
    backgroundColor: "#01254C",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EEB311",
    textAlign: "center",
    marginTop: 10,
  },
  turn: {
    textAlign: "center",
    color: "#023D7A",
  },
  progressBarContainer: {
    height: 15,
    width: "60%",
    backgroundColor: "#FFE18B",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#CC0001",
    borderRadius: 5,
  },
  question: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
  },
  word: {
    textAlign: "center",
    fontSize: 42,
    fontWeight: "bold",
    color: "#023D7A",
    marginTop: 20,
  },
  feedback: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
  choices: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 40,
  },
  choiceBtn: {
    backgroundColor: "#eee",
    padding: 16,
    borderRadius: 20,
  },
  choiceText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  score: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 18,
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#023D7A",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    gap: 20,
  },
  pauseBtn: {
    color: "#fff",
    fontSize: 18,
    marginVertical: 10,
  },
});
