// Librairies
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Composants
import Button from "../components/Button/Button";
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
                Pour accéder aux posts veuillez cliquer sur le bouton ci-dessous
            </Text>
            <Button handlePress={handlePress} />
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
    welcomeText: {
        fontFamily: "InriaSans_700Bold",
        fontSize: 25,
        color: Colors.white,
        padding: 20,
    },
    detailsText: {
        fontSize: 12,
        color: Colors.white,
        paddingVertical: 18,
        fontFamily: "InriaSans_300Light",
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
