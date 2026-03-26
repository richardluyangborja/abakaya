// MusicContext.tsx
import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import { Audio } from "expo-av";

// Type for music context
type MusicContextType = {
  playMusic: (
    source: number | { uri: string },
    options?: { volume?: number; loop?: boolean },
  ) => Promise<void>;
  pauseMusic: () => Promise<void>;
  stopMusic: () => Promise<void>;
};

// Create context with default value (TS safe)
const MusicContext = createContext<MusicContextType | undefined>(undefined);

type MusicProviderProps = {
  children: ReactNode;
};

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const soundRef = useRef<Audio.Sound | null>(null);
  const currentTrackRef = useRef<number | { uri: string } | null>(null);

  const playMusic = async (
    source: number | { uri: string },
    options: { volume?: number; loop?: boolean } = { volume: 0.5, loop: true },
  ) => {
    // Only reload if the track changed
    if (currentTrackRef.current === source) {
      await soundRef.current?.playAsync();
      return;
    }

    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }

    const { sound } = await Audio.Sound.createAsync(source, {
      shouldPlay: true,
      isLooping: options.loop ?? true,
      volume: options.volume ?? 0.5,
    });

    soundRef.current = sound;
    currentTrackRef.current = source;
  };

  const pauseMusic = async () => {
    if (soundRef.current) await soundRef.current.pauseAsync();
  };

  const stopMusic = async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
      currentTrackRef.current = null;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    };
  }, []);

  return (
    <MusicContext.Provider value={{ playMusic, pauseMusic, stopMusic }}>
      {children}
    </MusicContext.Provider>
  );
};

// Hook for easy access
export const useMusic = (): MusicContextType => {
  const context = useContext(MusicContext);
  if (!context) throw new Error("useMusic must be used within a MusicProvider");
  return context;
};
