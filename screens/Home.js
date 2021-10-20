import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

const Home = ({ navigation }) => {
    // Fonction
    const handlePress = () => {
        navigation.navigate("Posts");
    };
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            {/* <Button title="Accéder aux posts" onPress={handlePress} /> */}
            <Pressable
                style={({ pressed }) => ({
                    backgroundColor: pressed ? "lightseagreen" : "rebeccapurple",
                })}
                onPress={handlePress}
            >
                <Text style={styles.btn}>Accéder aux Posts</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Home;
