import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";

const HomeScreen = ({navigation}) => {
useEffect(() =>{
    setTimeout(() => {
        navigation.navigate("Details")
    }, 3000);
})
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
