import * as React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import { deleteTodoSaga } from "src/actions/todo";
import usePlayAudio from "src/hooks/usePlayAudio";
import { Todo as TodoProps } from "src/store";
import styles from "./styles";

const Todo = ({ id, text, audioUri }: TodoProps) => {
  const playAudio = usePlayAudio();
  const dispatch = useDispatch();
  const deleteTodo = (id: number) => dispatch(deleteTodoSaga(id));
  return (
    <View style={styles.todo}>
      <View style={styles.deleteIcon}>
        <Icon onPress={() => deleteTodo(id)} name="delete" size={20} color="red" />
      </View>
      <View style={styles.todoDescriptionWrapper}>
        <Text style={styles.todoDescriptionLabel}>Todo description:</Text>
        <Text style={styles.todoDescriptionText}>{text}</Text>
      </View>
      {audioUri ? (
        <View style={styles.audioWrapper}>
          <Text style={styles.audioLabel}>Audio:</Text>
          <Icon name="play" onPress={() => playAudio(audioUri!)} color="blue" size={20} />
        </View>
      ) : null}
    </View>
  );
};

export default Todo;
