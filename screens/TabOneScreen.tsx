import React, { useCallback, useEffect } from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/editScreenInfo";
import { Text, View } from "../components/Themed";

import { useDispatch, useSelector } from "react-redux";
import { fetchSampleList } from "../actions/sample";
import { AppState } from "../store";

export default function TabOneScreen() {
  const dispatch = useDispatch();
  const sampleList = useCallback(() => dispatch(fetchSampleList(undefined)), []);
  const smaples = useSelector((state: AppState) => state.samples);
  useEffect(() => {
    sampleList();
  }, []);
  // tslint:disable-next-line:no-console
  useEffect(() => console.log(smaples, "smaples"), [smaples]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
