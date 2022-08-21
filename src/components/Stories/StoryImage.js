import { Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function StoryImage({ uri }) {
  return (
    <LinearGradient
      colors={["#F58529", "#F7A34B", "#DE0046"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={styles.container}
    >
      <Image source={{ uri }} style={styles.image} />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 2.5,
    overflow: "hidden",
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#fff",
  },
});
