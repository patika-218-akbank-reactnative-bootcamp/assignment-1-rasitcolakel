import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

export default function PostHeader({ post }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.user.avatar }} style={styles.image} />
      <Text style={styles.text}>{post.user.name}</Text>
      <Feather name="more-horizontal" size={24} color="black" />
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
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  text: {
    flex: 1,
    fontSize: 12,
    paddingHorizontal: 9,
    color: "black",
    fontWeight: "bold",
  },
});
