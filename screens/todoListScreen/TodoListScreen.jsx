"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var editScreenInfo_1 = require("../../components/editScreenInfo");
var Themed_1 = require("../../components/Themed");
var react_redux_1 = require("react-redux");
var sample_1 = require("../../actions/sample");
function TodoListScreen() {
    var dispatch = react_redux_1.useDispatch();
    var sampleList = react_1.useCallback(function () { return dispatch(sample_1.fetchSampleList(undefined)); }, []);
    var smaples = react_redux_1.useSelector(function (state) { return state.samples; });
    react_1.useEffect(function () {
        sampleList();
    }, []);
    // tslint:disable-next-line:no-console
    react_1.useEffect(function () { return console.log(smaples, "smaples"); }, [smaples]);
    return (<Themed_1.View style={styles.container}>
      <Themed_1.Text style={styles.title}>Todo List</Themed_1.Text>
      <Themed_1.View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <editScreenInfo_1.default path="/screens/TodoListScreen.tsx"/>
    </Themed_1.View>);
}
exports.default = TodoListScreen;
var styles = react_native_1.StyleSheet.create({
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
