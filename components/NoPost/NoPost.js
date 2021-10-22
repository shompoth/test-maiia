import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NoPost = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text>{children}</Text>
        </View>
    );
};

export default NoPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        marginTop: 20,
        alignItems: "center",
    },
});
