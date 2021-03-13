"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var react_redux_1 = require("react-redux");
var sample_1 = require("../../../../actions/sample");
var usePlayAudio_1 = require("../../../../hooks/usePlayAudio");
var styles_1 = require("./styles");
var Todo = function (_a) {
    var id = _a.id, text = _a.text, audioUri = _a.audioUri;
    var playAudio = usePlayAudio_1.default();
    var dispatch = react_redux_1.useDispatch();
    var removeTodo = function (id) { return dispatch(sample_1.deleteTodo(id)); };
    return (<react_native_1.View style={styles_1.default.todo}>
      <react_native_1.View style={styles_1.default.deleteIcon}>
        <AntDesign_1.default onPress={function () { return removeTodo(id); }} name="delete" size={20} color="red"/>
      </react_native_1.View>
      <react_native_1.View style={styles_1.default.todoDescriptionWrapper}>
        <react_native_1.Text style={styles_1.default.todoDescriptionLabel}>Todo description:</react_native_1.Text>
        <react_native_1.Text style={styles_1.default.todoDescriptionText}>{text}</react_native_1.Text>
      </react_native_1.View>
      {audioUri && (<react_native_1.View style={styles_1.default.audioWrapper}>
          <react_native_1.Text style={styles_1.default.audioLabel}>Audio:</react_native_1.Text>
          <AntDesign_1.default name="play" onPress={function () { return playAudio(audioUri); }} color="blue" size={20}/>
        </react_native_1.View>)}
    </react_native_1.View>);
};
exports.default = Todo;
