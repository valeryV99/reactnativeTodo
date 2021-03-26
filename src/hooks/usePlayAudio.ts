import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import * as React from "react";

export default function usePlayAudio() {
  const [sound, setSound] = React.useState<Sound>();

  async function playSound(uri) {
    const { sound } = await Audio.Sound.createAsync({ uri });
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return playSound;
}
