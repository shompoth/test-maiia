import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Posts</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
});

export default Home;
