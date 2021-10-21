import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PostCard = ({ item }) => {
    return (
        <View>
            <Text>{item.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default PostCard;
