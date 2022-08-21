import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import PostActions from "./PostActions";

export default function PostDetail({ post }) {
  return (
    <View style={styles.container}>
      <PostActions post={post} />
      <Text style={styles.likeStyle}>{post.likes} Likes</Text>
      <Text style={styles.text}>
        <Text style={styles.usernameStyle}>
          {post.user.username}
          {`  `}
        </Text>
        {post.content}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  text: {
    flex: 1,
    fontSize: 13,
    color: "black",
    fontWeight: "300",
    marginTop: 10,
  },
  usernameStyle: {
    fontWeight: "bold",
  },
  likeStyle: {
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 10,
  },
});
