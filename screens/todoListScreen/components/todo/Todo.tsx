import * as React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../../actions/sample";
import usePlayAudio from "../../../../hooks/usePlayAudio";
import { Todo as TodoProps } from "../../../../store";
import styles from "./styles";

const Todo = ({ id, text, audioUri }: TodoProps) => {
  const playAudio = usePlayAudio();
  const dispatch = useDispatch();
  const removeTodo = (id: number) => dispatch(deleteTodo(id));
  return (
    <View style={styles.todo}>
      <View style={styles.deleteIcon}>
        <Icon onPress={() => removeTodo(id)} name="delete" size={20} color="red" />
      </View>
      <View style={styles.todoDescriptionWrapper}>
        <Text style={styles.todoDescriptionLabel}>Todo description:</Text>
        <Text style={styles.todoDescriptionText}>{text}</Text>
      </View>
      {audioUri && (
        <View style={styles.audioWrapper}>
          <Text style={styles.audioLabel}>Audio:</Text>
          <Icon name="play" onPress={() => playAudio(audioUri!)} color="blue" size={20} />
        </View>
      )}
    </View>
  );
};

export default Todo;
