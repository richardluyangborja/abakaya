import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MusicProvider } from "./lib/music-context";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <MusicProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </MusicProvider>
    </GestureHandlerRootView>
  );
}
