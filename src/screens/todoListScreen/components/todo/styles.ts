import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  deleteIcon: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 2,
  },
});
