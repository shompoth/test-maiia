import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Posts = () => {
    return (
        <View style={styles.container}>
            <Text>Posts</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Posts;
