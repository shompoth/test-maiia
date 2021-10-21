// Librairies
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Composant
import Colors from "../../styles/Colors";

const Button = ({ handlePress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={handlePress} activeOpacity={0.3}>
            <Text style={styles.btnText}>Accéder aux Posts</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 9,
        borderRadius: 5,
    },
    btnText: {
        color: Colors.white,
    },
});

export default Button;
