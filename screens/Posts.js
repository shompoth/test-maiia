// Librairies
import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import axios from "axios";

// Composant
import PostCard from "../components/PostCard/PostCard";
import Colors from "../styles/Colors";
import SearchBar from "../components/SearchBar/SearchBar";

const Posts = () => {
    // State
    const [postsArray, setPostsArray] = useState([]);
    const [currentPage, SetCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    // UseEffect
    useEffect(() => {
        getPosts();
    }, [currentPage]);

    // Fonctions
    const getPosts = () => {
        setIsLoading(true);
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)
            .then(res => {
                const array = postsArray.concat([...res.data]);
                setPostsArray(array);
            })
            .catch(error => {
                console.log(error);
            });
        setIsLoading(false);
    };

    const renderCards = ({ item }) => {
        return <PostCard item={item} />;
    };

    const loadMorePosts = () => {
        if (currentPage === 5) {
            return null;
        }
        SetCurrentPage(prevState => prevState + 1);
    };

    const renderLoader = () => {
        return isLoading ? (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        ) : null;
    };

    return (
        <View style={styles.container}>
            <SearchBar />
            {postsArray.length ? (
                <FlatList
                    data={postsArray}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderCards}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMorePosts}
                    onEndReachedThreshold={0}
                />
            ) : (
                <ActivityIndicator size="large" color={Colors.primary} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: Colors.greyLight,
    },
    loader: {
        marginTop: 8,
        marginBottom: 16,
        alignItems: "center",
    },
});

export default Posts;
