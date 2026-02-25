import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Modal,
  Image,
} from "react-native";

const TIME_PER_QUESTION = 20;

const QUESTIONS = [
  {
    id: 1,
    question: "Sino ang mag-asawang nasa kwento?",
    choices: ["Banag at Danas", "Mang Dondong at Aling Iska", "Juan at Maria"],
    answerIndex: 0,
  },
  {
    id: 2,
    question:
      "Ano ang pangunahing problema ng mag-asawa bago natutunan ang pagtatanim?",
    choices: [
      "Walang makain at palipat-lipat ng tirahan",
      "May maraming hayop sa kanilang tahanan",
      "Napakaabala sa pagtuturo ng iba",
    ],
    answerIndex: 0,
  },
  {
    id: 3,
    question: "Sino ang nagturo kay Danas kung paano gamitin ang mga butil?",
    choices: [
      "Ang kanyang asawa, Banag",
      "Ang mga damo sa parang",
      "Ang mga kapitbahay",
    ],
    answerIndex: 1,
  },
  {
    id: 4,
    question:
      "Ano ang ginawa ni Danas matapos matutunan ang sining ng pagtatanim?",
    choices: [
      "Nagtayo siya ng malaking bahay",
      "Gumawa siya ng malawak na bukid at itinuro sa iba",
      "Nagtago sa bundok",
    ],
    answerIndex: 1,
  },
  {
    id: 5,
    question:
      "Ano ang pangalang ibinigay sa mga damo na nagbigay ng kaalaman sa palay?",
    choices: ["Palay", "Munga", "Mais"],
    answerIndex: 0,
  },
];

const feedbacks = [
  { score: 1, label: "1 Star", image: null },
  { score: 2, label: "2 Stars", image: null },
  { score: 3, label: "3 Stars", image: null },
  { score: 4, label: "4 Stars", image: null },
  { score: 5, label: "5 Stars", image: null },
];

export default function AlamatNgPalayPagsusulit() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];

  useEffect(() => {
    if (finished) return;

    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 24,
        }}
      >
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Pressable onPress={() => router.back()}>
            <Text>Back</Text>
          </Pressable>
          <Text>Avatar logo</Text>
        </View>
        <Pressable>
          <Text>Settings</Text>
        </Pressable>
      </View>

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

      <Text
        style={{
          fontSize: 22,
          alignSelf: "center",
          marginBottom: 16,
        }}
      >
        {timeLeft}
      </Text>

      <View style={{ paddingHorizontal: 24 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 20,
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
              }}
              onPress={() => handleChoice(index)}
            >
              <Text style={{ fontSize: 18 }}>{choice}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
