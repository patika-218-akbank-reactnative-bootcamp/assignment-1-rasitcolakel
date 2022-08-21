import { View, Image } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostDetail from "./PostDetail";

export default function Post({ post }) {
  return (
    <View>
      <PostHeader post={post} />
      <Image
        source={{ uri: post.image }}
        style={{ width: "100%", height: 375 }}
      />
      <PostDetail post={post} />
    </View>
  );
}
