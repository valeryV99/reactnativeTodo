import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import CreateTodoScreen from "src/screens/createTodoScreen";

import TodoListScreen from "src/screens/todoListScreen";
import { RootStackParamList } from "src/types";
import LinkingConfiguration from "./LinkingConfiguration";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="TodoListScreen"
      component={TodoListScreen}
      options={{ headerTitle: "Todo List", headerShown: true }}
    />
    <Stack.Screen
      name="CreateTodoScreen"
      component={CreateTodoScreen}
      options={{ headerTitle: "Create Todo", headerShown: false, headerBackTitle: "cancel" }}
    />
  </Stack.Navigator>
);

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;
