"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: "white",
    },
    text: {
        fontSize: 42,
    },
    icon: {
        color: "#f66",
    },
    buttonWrapper: {
        position: "absolute",
        bottom: 10,
        alignSelf: "center",
    },
    todo: {
        paddingLeft: 10,
        paddingBottom: 10,
        flex: 1,
        margin: 10,
        backgroundColor: "gray",
        borderRadius: 10,
        position: "relative",
    },
    todoDescriptionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    todoDescriptionLabel: {
        color: "white",
    },
    todoDescriptionText: {
        fontSize: 18,
        marginLeft: 10,
        color: "white",
    },
    audioWrapper: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    audioLabel: {
        fontSize: 18,
        paddingRight: 10,
        color: "white",
    },
});
