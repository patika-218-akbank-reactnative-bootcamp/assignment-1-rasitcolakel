import { View, StyleSheet } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PostActions() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Feather
          name="heart"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          color="black"
          style={styles.iconStyle}
        />
        <Feather name="send" size={24} color="black" style={styles.iconStyle} />
      </View>
      <View>
        <Feather name="bookmark" size={24} color="black" />
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
  },
  leftContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  iconStyle: {
    marginRight: 14,
  },
});
