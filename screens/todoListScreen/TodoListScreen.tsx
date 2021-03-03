import React, { useCallback, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchSampleList } from "../../actions/sample";
import { AppState } from "../../store";
import Todo from "./components/todo/Todo";

export default function TodoListScreen() {
  const dispatch = useDispatch();
  const sampleList = useCallback(() => dispatch(fetchSampleList(undefined)), []);
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "pink",
  },
  text: {
    fontSize: 42,
  },
});
