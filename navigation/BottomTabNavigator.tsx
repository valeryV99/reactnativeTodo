import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabTwoScreen from "../screens/TabTwoScreen";
import TodoListScreen from "../screens/todoListScreen";
import { BottomTabParamList, TabTwoParamList, TodoListParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const TabBarIcon = (props: { name: React.ComponentProps<typeof Ionicons>["name"]; color: string }) => (
  <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
);

const TodoListStack = createStackNavigator<TodoListParamList>();

const TodoListNavigator = () => (
  <TodoListStack.Navigator>
    <TodoListStack.Screen name="TodoListScreen" component={TodoListScreen} options={{ headerTitle: "Todo List" }} />
  </TodoListStack.Navigator>
);

const TabTwoStack = createStackNavigator<TabTwoParamList>();

const TabTwoNavigator = () => (
  <TabTwoStack.Navigator>
    <TabTwoStack.Screen name="TabTwoScreen" component={TabTwoScreen} options={{ headerTitle: "Tab Two Title" }} />
  </TabTwoStack.Navigator>
);

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName="TodoList" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen name="TodoList" component={TodoListNavigator} />

      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
