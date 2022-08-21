import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
export default function AddStory() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/user.jpeg")}
          style={styles.image}
        />
        <View style={styles.floatingIcon}>
          <Feather name="plus" size={15} color="#fff" />
        </View>
      </View>
      <Text style={styles.text}>Your Story</Text>
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
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#fff",
  },
  floatingIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#0393f9",
    borderRadius: 30,
    padding: 2.5,
    borderColor: "#fff",
    borderWidth: 1,
  },
});
