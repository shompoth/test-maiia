import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NoPost = () => {
    return (
        <View style={styles.container}>
            <Text>Pas d'article disponible avec le titre recherché</Text>
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
