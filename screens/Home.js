import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../styles/Colors";

const Home = ({ navigation }) => {
    // Fonction
    const handlePress = () => {
        navigation.navigate("Posts");
    };
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            {/* <Button title="Accéder aux posts" onPress={handlePress} /> */}
            {/* <Pressable
                style={({ pressed }) => ({
                    backgroundColor: pressed ? "lightseagreen" : "rebeccapurple",
                })}
                onPress={handlePress}
            >
                <Text style={styles.btn}>Accéder aux Posts</Text>
            </Pressable> */}
            <TouchableOpacity
                style={styles.btn}
                onPress={handlePress}
                activeOpacity={0.3}
            >
                <Text style={styles.btnText}>Accéder aux Posts</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.secondary,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 9,
        borderRadius: 5,
    },
    btnText: {
        color: Colors.white,
    },
});

export default Home;
