// Librairies
import React, { useState, useEffect } from "react";
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
} from "react-native";
import axios from "axios";

// Composant
import PostCard from "../components/PostCard/PostCard";
import Colors from "../styles/Colors";

const Posts = () => {
    // State
    const [postsArray, setPostsArray] = useState(null);

    // UseEffect
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                setPostsArray([...res.data.splice(1, 50)]);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // Fonction
    const renderCards = ({ item }) => {
        return <PostCard item={item} />;
    };

    return (
        <View style={styles.container}>
            {postsArray ? (
                <FlatList
                    data={postsArray}
                    keyExtractor={item => item.id}
                    renderItem={renderCards}
                />
            ) : (
                <ActivityIndicator size="large" color={Colors.primary} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 10 },
});

export default Posts;
