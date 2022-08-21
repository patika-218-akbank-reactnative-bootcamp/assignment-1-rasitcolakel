import { View, Image, StyleSheet } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} />
      <View style={styles.rightContainer}>
        <Feather
          name="plus-square"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Feather
          name="heart"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Fontisto
          name="messenger"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 3,
    backgroundColor: "#fff",
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    marginLeft: 20,
  },
});
