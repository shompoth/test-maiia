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
            <Text style={styles.welcomeText}>Bienvenue sur l'application</Text>
            <View style={styles.separator}></View>
            <Text style={styles.detailsText}>
                Pour accéder aux posts veuillez cliquer sur le boutton ci-dessous
            </Text>
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
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.secondary,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 9,
        borderRadius: 5,
    },
    welcomeText: {
        fontFamily: "InriaSans_700Bold",
        fontSize: 25,
        color: Colors.white,
        padding: 20,
    },
    detailsText: {
        fontSize: 12,
        color: Colors.white,
        paddingVertical: 10,
        fontFamily: "InriaSans_300Light",
    },
    btnText: {
        color: Colors.white,
        // fontFamily: "InriaSans_400Regular",
    },
    separator: {
        borderWidth: 1.1,
        borderColor: Colors.greyLight,
        width: "25%",
        marginTop: 5,
        marginBottom: 30,
    },
});

export default Home;
