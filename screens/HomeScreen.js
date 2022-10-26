import { View, Text } from "react-native";
import React from "react";
import { auth } from "../firebase/firebase.config";

const HomeScreen = () => {
  return (
    <View>
      <Text>{auth.currentUser?.email}</Text>
    </View>
  );
};

export default HomeScreen;
