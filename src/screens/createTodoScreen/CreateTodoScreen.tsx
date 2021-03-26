import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { Recording } from "expo-av/build/Audio/Recording";
import { useCallback, useEffect } from "react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { createTodoSaga } from "src/actions/todo";
import usePlayAudio from "src/hooks/usePlayAudio";
import styles from "./styles";

interface CreateTodoForm {
  text: string;
  audioUri: string;
}

const CreateTodoScreen = () => {
  const [recording, setRecording] = React.useState<Recording>();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const playAudio = usePlayAudio();
  const { top, left, bottom, right } = useSafeAreaInsets();
  const rootStyle = {
    paddingTop: top,
    paddingLeft: left,
    paddingBottom: bottom,
    paddingRight: right,
    flex: 1,
  };
  const { register, watch, setValue } = useForm<CreateTodoForm>({
    defaultValues: {
      text: "",
      audioUri: "",
    },
  });
  const { text, audioUri } = watch();
  useEffect(() => {
    register("text");
    register("audioUri");
  }, []);

  const onChange = useCallback(value => setValue("text", value), []);
  const addTodo = useCallback(() => dispatch(createTodoSaga({ text, id: Date.now(), audioUri })), [text, audioUri]);

  const toTodoListScreen = useCallback(() => navigation.navigate("TodoListScreen"), []);
  const saveTodo = () => {
    addTodo();
    toTodoListScreen();
  };

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording?.stopAndUnloadAsync();
    const uri = recording?.getURI();
    setValue("audioUri", uri);
  }

  return (
    <View style={rootStyle}>
      <View style={styles.header}>
        <Button onPress={toTodoListScreen} type="clear" title="Cancel" />
        <Button onPress={saveTodo} type="clear" title="Add" />
      </View>
      <View style={styles.inputWrapper}>
        <Input
          onChangeText={onChange}
          value={text}
          multiline
          placeholder="What do you want to do?"
          numberOfLines={10}
          style={styles.input}
        />
      </View>
      {audioUri ? (
        <Button title="play audio" onPress={() => playAudio(audioUri)} />
      ) : (
        <Button
          title={recording ? "Stop Recording" : "Start Recording"}
          onPress={recording ? stopRecording : startRecording}
        />
      )}
    </View>
  );
};

export default CreateTodoScreen;
