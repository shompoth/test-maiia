// Librairies
import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Composant
import Colors from "../../styles/Colors";

const SearchBar = () => {
    // States
    const [search, setSearch] = useState("");
    const [placeHolder, setPlaceHolder] = useState("Rechercher");

    return (
        <View style={styles.searchBarContainer}>
            <View style={styles.searchIconContainer}>
                <Ionicons name="search" size={20} color={Colors.grey} />
            </View>

            <TextInput
                style={styles.textInputStyles}
                value={search}
                placeholder={placeHolder}
                placeholderTextColor={Colors.grey}
                underlineColorAndroid="transparent"
                onChangeText={text => setSearch(text)}
                autoCorrect={false}
            />
            <View style={styles.closeIconContainer}>
                {search ? (
                    <TouchableOpacity onPress={() => setSearch("")} activeOpacity={0.7}>
                        <Ionicons
                            name="md-close-circle-outline"
                            size={20}
                            color={Colors.grey}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        backgroundColor: Colors.secondary,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: Colors.secondary,
    },
    searchIconContainer: {
        height: 35,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8,
    },
    closeIconContainer: {
        height: 35,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 8,
    },
    textInputStyles: {
        flex: 1,
        height: 35,
        fontSize: 12,
        backgroundColor: Colors.white,
        color: Colors.greyDark,
    },
    loupeStyle: {
        height: 13,
        width: 13,
        backgroundColor: Colors.white,
        marginLeft: 10,
        marginRight: 3,
    },
});

export default SearchBar;
