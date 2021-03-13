import { useNavigation, useTheme } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import Todo from "./components/todo";
import styles from "./styles";

const TodoListScreen = () => {
  const navigation = useNavigation();
  const todos = useSelector((state: AppState) => state.todos);
  const { top, left, bottom, right } = useSafeAreaInsets();
  const { colors } = useTheme();

  const rootStyle = {
    paddingTop: top,
    paddingLeft: left,
    paddingBottom: bottom,
    paddingRight: right,
    flex: 1,
  };

  return (
    <>
      <ScrollView style={{ ...rootStyle, ...styles.scrollView, backgroundColor: colors.background }}>
        {todos.map(item => {
          return <Todo key={item.id} {...item} />;
        })}
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Icon
          name="pluscircle"
          size={50}
          color="white"
          style={styles.icon}
          onPress={() => navigation.navigate("CreateTodoScreen")}
        />
      </View>
    </>
  );
};

export default TodoListScreen;
