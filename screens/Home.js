import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = ({ navigation }) => {
    // Fonction
    const handlePress = () => {
        navigation.navigate("Posts");
    };
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Accéder aux posts" onPress={handlePress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Home;
