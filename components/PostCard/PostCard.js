import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const PostCard = ({ item }) => {
    // Fonction
    const renderProfilPicture = id => {
        switch (id) {
            case 1:
                return require("../../assets/1.jpeg");
            case 2:
                return require("../../assets/2.jpeg");
            case 3:
                return require("../../assets/3.jpeg");
            case 4:
                return require("../../assets/4.jpeg");
            case 5:
                return require("../../assets/5.jpeg");
            case 6:
                return require("../../assets/6.jpeg");
            case 7:
                return require("../../assets/7.jpeg");
            case 8:
                return require("../../assets/8.jpeg");
            default:
                break;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Image source={renderProfilPicture(item.userId)} style={styles.userPic} />
            </View>
            <View style={styles.bodyTextContainer}>
                <Text style={styles.bodyText}>{item.body}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 0.5,
        padding: 10,
        marginBottom: 20,
    },
    bodyTextContainer: {
        width: "100%",
        paddingBottom: 15,
    },
    titleText: {
        fontFamily: "InriaSans_700Bold",
        fontSize: 18,
        width: "75%",
    },
    bodyText: {
        fontSize: 13,
    },
    userContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 25,
    },
    userPic: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginBottom: 10,
        alignSelf: "flex-start",
    },
});

export default PostCard;
