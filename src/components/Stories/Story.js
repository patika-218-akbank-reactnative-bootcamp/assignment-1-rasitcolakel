import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StoryImage from "./StoryImage";

export default function Story({ story }) {
  return (
    <View style={styles.container}>
      <StoryImage uri={story.user.avatar} />
      <Text style={styles.text}>{story.user.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    marginVertical: 5,
  },
});
