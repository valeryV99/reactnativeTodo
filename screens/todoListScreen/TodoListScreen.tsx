import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { fetchSampleList } from "../../actions/sample";
import { AppState } from "../../store";
import Todo from "./components/todo";
import styles from "./styles";

const TodoListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const sampleList = useCallback(() => dispatch(fetchSampleList()), []);
  const smaples = useSelector((state: AppState) => state.samples);
  useEffect(() => {
    sampleList();
  }, []);
  // tslint:disable-next-line:no-console
  useEffect(() => console.log(smaples, "smaples"), [smaples]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Todo />
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => navigation.navigate("CreateTodoScreen")}
          type="clear"
          icon={<Icon name="pluscircle" size={50} color="white" style={styles.icon} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default TodoListScreen;
