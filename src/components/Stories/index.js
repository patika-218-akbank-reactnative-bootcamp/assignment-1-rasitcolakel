import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import Story from "./Story";
import { stories } from "../../assets/mockData";
import AddStory from "./AddStory";

export default function Stories() {
  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      <AddStory />
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 8,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
});
