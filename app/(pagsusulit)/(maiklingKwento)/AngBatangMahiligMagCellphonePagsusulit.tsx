import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  Image,
  StyleSheet,
  ImageBackground,
  Animated,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { AvatarHeader } from "@/app/lib/avatar-header";
import { useMusic } from "@/app/lib/music-context";

const TIME_PER_QUESTION = 20;

const QUESTIONS = [
  {
    id: 1,
    question: "Mahilig si Gabriel sa cellphone.",
    choices: ["Tama", "Mali"],
    answerIndex: 0,
  },
  {
    id: 2,
    question: "Kumagat si Gabriel sa kamay ng ina.",
    choices: ["Tama", "Mali"],
    answerIndex: 0,
  },
  {
    id: 3,
    question: "Hindi tinulungan ni Angelo si Gabriel.",
    choices: ["Tama", "Mali"],
    answerIndex: 1,
  },
  {
    id: 4,
    question: "Natutunan ni Gabriel ang pagpapakumbaba at pagmamahal sa kapwa.",
    choices: ["Tama", "Mali"],
    answerIndex: 0,
  },
  {
    id: 5,
    question:
      "Hindi nagbago si Gabriel at patuloy sa labis na paggamit ng cellphone.",
    choices: ["Tama", "Mali"],
    answerIndex: 1,
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
export default function AngBatangMahiligMagCellphonePagsusulit() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [paused, setPaused] = useState(false);
  const { playMusic, stopMusic } = useMusic();

  useEffect(() => {
    playMusic(require("../../../assets/bgm2.mp3"));

    return () => {
      stopMusic();
    };
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(1));

  const currentQuestion = QUESTIONS[currentIndex];

  useEffect(() => {
    if (finished || paused) return;

    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);

    Animated.timing(progress, {
      toValue: timeLeft / TIME_PER_QUESTION,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    return () => clearTimeout(timer);
  }, [timeLeft, finished]);

  const handleChoice = (index: number) => {
    if (selected !== null) return;

    setSelected(index);

    if (index === currentQuestion.answerIndex) {
      setScore((s) => s + 1);
    }

    setTimeout(handleNext, 800);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= QUESTIONS.length) {
      setFinished(true);
      return;
    }

    setCurrentIndex((i) => i + 1);
    setSelected(null);
    setTimeLeft(TIME_PER_QUESTION);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setPaused(false);
    setTimeLeft(TIME_PER_QUESTION);
    setFinished(false);
  };

  const feedback = feedbacks.find((f) => f.score === score) || {
    label: "Try Again!",
    image: require("../../../assets/images/timer.png"),
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/quiz_bg.png")}
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flex: 1 }}>
        <Modal visible={finished} transparent animationType="fade">
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
                onPress={() => restartQuiz()}
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

        {/* HEADER */}
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

        <Image
          source={require("../../../assets/images/ANG BATANG MAHILIG MAG CELLPHONE.png")}
          style={{
            height: 160,
            width: 280,
            position: "absolute",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            top: 250,
            opacity: 0.8,
          }}
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#EEB311",
            alignSelf: "center",
            marginVertical: 12,
          }}
        >
          Maikling Kwento
        </Text>

        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
          }}
        >
          {currentIndex + 1}/{QUESTIONS.length}
        </Text>

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

        <View style={{ paddingHorizontal: 24 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 20,
              top: 100,
              width: 280,
              textAlign: "center",
              left: 18,
              color: "#FFE18B",
            }}
          >
            {currentQuestion.question}
          </Text>

          {currentQuestion.choices.map((choice, index) => {
            const isSelected = selected === index;
            const isCorrect = index === currentQuestion.answerIndex;

            let bg = "#fff";

            if (selected !== null) {
              if (isCorrect) bg = "#4CAF50";
              else if (isSelected) bg = "#F44336";
            }

            return (
              <TouchableOpacity
                key={index}
                style={{
                  padding: 16,
                  borderRadius: 10,
                  marginBottom: 12,
                  backgroundColor: bg,
                  top: 200,
                }}
                onPress={() => handleChoice(index)}
              >
                <Text style={{ fontSize: 18 }}>{choice}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
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

            <Pressable onPress={restartQuiz}>
              <Text style={styles.pauseBtn}>Ulitin</Text>
            </Pressable>

            <Pressable onPress={() => router.back()}>
              <Text style={styles.pauseBtn}>Itigil</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ImageBackground>
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
  progressBarContainer: {
    height: 15,
    width: "80%",
    backgroundColor: "#FFE18B",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
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
