"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("@react-navigation/native");
var React = require("react");
var react_native_1 = require("react-native");
var react_native_elements_1 = require("react-native-elements");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var react_redux_1 = require("react-redux");
var sample_1 = require("../../actions/sample");
var usePlayAudio_1 = require("../../hooks/usePlayAudio");
var styles_1 = require("./styles");
var TodoListScreen = function () {
    var navigation = native_1.useNavigation();
    var todos = react_redux_1.useSelector(function (state) { return state.todos; });
    var dispatch = react_redux_1.useDispatch();
    var playAudio = usePlayAudio_1.default();
    var removeTodo = function (id) { return dispatch(sample_1.deleteTodo(id)); };
    return (<react_native_1.SafeAreaView style={styles_1.default.container}>
      <react_native_1.ScrollView style={styles_1.default.scrollView}>
        {todos.map(function (item) {
            return (<react_native_1.View key={item.id} style={styles_1.default.todo}>
              <react_native_1.View style={{ position: "absolute", right: 10, top: 10, zIndex: 2 }}>
                <AntDesign_1.default onPress={function () { return removeTodo(item.id); }} name="delete" size={20} color="red"/>
              </react_native_1.View>
              <react_native_1.View style={styles_1.default.todoDescriptionWrapper}>
                <react_native_elements_1.Text style={styles_1.default.todoDescriptionLabel}>Todo description:</react_native_elements_1.Text>
                <react_native_elements_1.Text style={styles_1.default.todoDescriptionText}>{item.text}</react_native_elements_1.Text>
              </react_native_1.View>
              {(item === null || item === void 0 ? void 0 : item.audioUri) && (<react_native_1.View style={styles_1.default.audioWrapper}>
                  <react_native_elements_1.Text style={styles_1.default.audioLabel}>Audio:</react_native_elements_1.Text>
                  <AntDesign_1.default name="play" onPress={function () { return playAudio(item.audioUri); }} color="blue" size={20}/>
                </react_native_1.View>)}
            </react_native_1.View>);
        })}
      </react_native_1.ScrollView>
      <react_native_1.View style={styles_1.default.buttonWrapper}>
        <AntDesign_1.default name="pluscircle" size={50} color="white" style={styles_1.default.icon} onPress={function () { return navigation.navigate("CreateTodoScreen"); }}/>
      </react_native_1.View>
    </react_native_1.SafeAreaView>);
};
exports.default = TodoListScreen;
