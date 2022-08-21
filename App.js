import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { posts } from "./src/assets/mockData";
import Post from "./src/components/Post";
import Stories from "./src/components/Stories";
import HomeHeader from "./src/layouts/HomeHeader";

export default function App() {
  const renderItem = ({ item }) => {
    if (item.id === 0) return <Stories />;
    return <Post post={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        ListHeaderComponent={HomeHeader}
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
