import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import CreateTodoScreen from "../screens/createTodoScreen";

import NotFoundScreen from "../screens/notFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={BottomTabNavigator} />
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
    <Stack.Screen
      name="CreateTodoScreen"
      component={CreateTodoScreen}
      options={{ headerTitle: "Create Todo", headerShown: true, headerBackTitle: "back" }}
    />
  </Stack.Navigator>
);

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;
