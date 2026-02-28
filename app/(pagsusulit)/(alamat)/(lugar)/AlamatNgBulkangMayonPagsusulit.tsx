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

const TIME_PER_QUESTION = 20;

const QUESTIONS = [
  {
    id: 1,
    question: "Ano ang pangalan ng dalagang anak ni Raha Makusog?",
    choices: ["A. Pinang", "B. Elisa", "C. Magayon"],
    answerIndex: 2,
  },
  {
    id: 2,
    question: "Sino ang binatang umibig kay Magayon?",
    choices: ["A. Pagtuga", "B. Alapaap", "C. Gabriel"],
    answerIndex: 1,
  },
  {
    id: 3,
    question: "Bakit napilitan si Magayon na sumang-ayon kay Pagtuga?",
    choices: [
      "A. Para iligtas ang kanyang ama",
      "B. Para makapaglaro",
      "C. Para makakuha ng kayamanan",
    ],
    answerIndex: 0,
  },
  {
    id: 4,
    question: "Ano ang nangyari sa magkasintahan sa huli?",
    choices: [
      "A. Namatay sila at inilibing nang magkasama",
      "B. Nakatakas sila sa bundok",
      "C. Nagpakasal sila at namuhay nang masaya",
    ],
    answerIndex: 0,
  },
  {
    id: 5,
    question: "Ano ang naging simbolo ng Bulkang Mayon?",
    choices: [
      "A. Ang kagubatan sa Bicol",
      "B. Ang bundok ay si Magayon at usok ni Pagtuga",
      "C. Ang ilog sa nayon",
    ],
    answerIndex: 1,
  },
];

const feedbacks = [
  { score: 1, label: "1 Star", image: null },
  { score: 2, label: "2 Stars", image: null },
  { score: 3, label: "3 Stars", image: null },
  { score: 4, label: "4 Stars", image: null },
  { score: 5, label: "5 Stars", image: null },
];

export default function AlamatNgBulkangMayonPagsusulit() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const [progress, setProgress] = useState(new Animated.Value(1));

  const currentQuestion = QUESTIONS[currentIndex];

  useEffect(() => {
    if (finished) return;

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
    setTimeLeft(TIME_PER_QUESTION);
    setFinished(false);
  };

  const feedback = feedbacks.find((f) => f.score === score) || {
    label: "Try Again!",
    image: null,
  };

  return (
    <ImageBackground
      source={require("../../../../assets/images/quiz_bg.png")}
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
                onPress={() => restartQuiz()}
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

        {/* HEADER */}
        <View style={styles.navbar}>
          <Pressable onPress={() => router.back()}>
            <Ionicons style={{ color: "#fff" }} name="chevron-back" size={24} />
          </Pressable>
          <Text style={{ color: "#fff", marginTop: 3 }}>Avatar</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 24,
            }}
          >
            <Text style={{ color: "#fff", top: 3, marginLeft: 170 }}>Madali</Text>
            <Feather
              style={{ color: "#ff0000", position: "absolute", marginLeft: 220 }}
              name="settings"
              size={24}
            />
          </View>
        </View>

        <Image
          source={require("../../../../assets/images/MAYON.png")}
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
          Alamat
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
                <Text style={{ fontSize: 18, textAlign: "center" }}>{choice}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ImageBackground>
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
});