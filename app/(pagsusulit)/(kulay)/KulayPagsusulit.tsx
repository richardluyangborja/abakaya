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

/* BOY DAGDAGAN MO NALANG KULAY KUNG MERON SA ASSET */

const kulayList = [
  { name: "Pula", value: "red" },
  { name: "Dilaw", value: "yellow" },
  { name: "Luntian", value: "green" },
  { name: "Asul", value: "blue" },
  { name: "Kahel", value: "orange" },
];

const prutas = [
  { id: 1, name: "Mansanas", color: "red", image: require("../../../assets/images/1rd.png"),},
  { id: 2, name: "Saging", color: "yellow", image: require("../../../assets/images/2ylw.png"), },
  { id: 3, name: "Ubas", color: "green", image: require("../../../assets/images/5grn.png"), }, // bat green ubas gago ahahah ano yan hilaw
  { id: 4, name: "Blueberry", color: "blue", image: require("../../../assets/images/4blu.png"), },
  { id: 5, name: "Orange", color: "orange", image: require("../../../assets/images/2orng.png"),},
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

/* ================= HELPERS ================= */

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateChoices(correctFruit: any) {
  const choices = new Set<any>();
  choices.add(correctFruit);

  while (choices.size < 3) {
    const random = prutas[getRandomNumber(0, prutas.length - 1)];
    choices.add(random);
  }

  return Array.from(choices).sort(() => Math.random() - 0.5);
}

/* ================= COMPONENT ================= */

export default function MadaliPagsusulitKulay() {
  const router = useRouter();

  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(turnTime);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);

  const [progress] = useState(new Animated.Value(1));

  const [targetColor, setTargetColor] = useState(kulayList[0]);
  const [correctFruit, setCorrectFruit] = useState<any>(null);
  const [choices, setChoices] = useState<any[]>([]);

  const setupTurn = () => {
    const randomColor = kulayList[getRandomNumber(0, kulayList.length - 1)];

    const correct = prutas.find((p) => p.color === randomColor.value);

    setTargetColor(randomColor);
    setCorrectFruit(correct);
    setChoices(generateChoices(correct));
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

  const handleAnswer = (selected: any) => {
    if (selected.id === correctFruit.id) {
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
    setPaused(false);
    setupTurn();
  };

  const feedback = feedbacks.find((r) => r.score === score) ?? {
    label: "0 Star",
    image: require("../../../assets/images/timer.png"),
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#E3BD72" }}>
      {/* NAVBAR */}
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
      <Text style={styles.title}>Kulay</Text>

      <Image
      
              source={require("../../../assets/images/bird.png")}
              style={styles.bird}
            />

      <Image
              source={require("../../../assets/images/rainbow.png")}
              style={styles.rainbow_image}
            />

            
      
      <Text style={styles.title}>Kulay</Text>
      <Text style={styles.turn}>
        Turn {turn} / {maxTurns}
      </Text>

      {/* TIMER BAR */}
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
      <Text style={styles.question_bird}>
        Piliin ang {"\n"}
        prutas na kulay
      </Text>
      <Text style={styles.question}>
        {" "}
        <Text style={{ fontWeight: "bold" }}>{targetColor.name}</Text>
      </Text>

      {/* CHOICES */}
      <View style={styles.choicesContainer}>
        {choices.map((item) => (
          <Pressable
            key={item.id}
            style={styles.choice}
            onPress={() => handleAnswer(item)}
          >
            {item.image ? (
              <Image source={item.image} style={{ width: 80, height: 80,}} />
            ) : (
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
            )}
          </Pressable>
        ))}
      </View>

      <Text style={styles.score}>Score: {score}</Text>

      {/* GAME OVER */}
      <Modal
      visible={gameOver} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Image
              source={feedback.image}
              style={{ width: 150, height: 150 }}
            />

            <Pressable
            style={{
                  top: 180,
                  position: "absolute",
                  left: 110,
            }}
            onPress={handleRestart}>
              <MaterialIcons name="replay" size={28} color="#fff" />
            </Pressable>

            <Pressable
            style={{
                  top: 180,
                  position: "absolute",
                  marginLeft: 30,
                }}
            onPress={() => router.back()}>
              <Entypo name="home" size={28} color="#fff" />
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* PAUSE */}
      <Modal visible={paused} transparent animationType="fade">
        <View style={styles.modalOverlay}>
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

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#01254C",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0000",
    top: 110,
    position: "absolute",
    right: 30,

  },
  turn: {
    color: "#023D7A",
    top: 40,
    left: 230,
    fontWeight: "bold",
  },
  question: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 18,
  },
  question_bird: {
    top: 280,
    left: 25,
    fontSize: 18,
    position: "absolute",
    textAlign: "center",
    fontWeight: "bold",
  },
  choicesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 60,
  },
  choice: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 20,
  },
  score: {
    marginTop: 60,
    marginLeft: 20,
    fontSize: 18,
  },
  progressBarContainer: {
    height: 15,
    width: "50%",
    backgroundColor: "#FFE18B",
    borderRadius: 5,
    marginTop: 90,
    alignSelf: "center",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#CC0001",
    borderRadius: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
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
  rainbow_image: {
    width: "120%",
    height: 300,
    top: 57,
    position: "absolute",
    flex: 1,
  },
  bird: {
    width: "45%",
    height: 190,
    top: 80,
  }
});
