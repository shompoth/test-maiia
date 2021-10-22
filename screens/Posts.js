// Librairies
import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import axios from "axios";

// Composant
import PostCard from "../components/PostCard/PostCard";
import Colors from "../styles/Colors";
import SearchBar from "../components/SearchBar/SearchBar";
import NoPost from "../components/NoPost/NoPost";

const Posts = () => {
    // State
    const [postsFilteredArray, setPostsFilteredArray] = useState([]);
    const [postsMasterArray, setPostsMasterArray] = useState([]);
    const [postsConstArray, setPostsConstArray] = useState([]);
    const [search, setSearch] = useState("");

    const [currentPage, SetCurrentPage] = useState(1);
    const [limitNumberPosts, SetLimitNumberPosts] = useState(50);
    const [isLoading, setIsLoading] = useState(false);

    // UseEffect
    useEffect(() => {
        getPosts();
    }, [currentPage]);

    useEffect(() => {
        getAllPosts();
    }, []);

    // Fonctions
    const getPosts = () => {
        setIsLoading(true);
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)
            .then(res => {
                const array = postsFilteredArray.concat([...res.data]);
                setPostsFilteredArray(array);
                setPostsMasterArray(array);
            })
            .catch(error => {
                console.log(error);
            });
        setIsLoading(false);
    };

    const getAllPosts = () => {
        setIsLoading(true);
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?_limit=${limitNumberPosts}`)
            .then(res => {
                setPostsConstArray(res.data);
            })
            .catch(error => {
                console.log(error);
            });
        setIsLoading(false);
    };

    const renderCards = ({ item }) => {
        return <PostCard item={item} search={search} />;
    };

    const loadMorePosts = () => {
        if (currentPage === 5) {
            return null;
        }
        if (search.length) {
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

    const searchFilter = text => {
        if (text) {
            const newData = postsConstArray.filter(post => {
                const postData = post.title ? post.title.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return postData.indexOf(textData) > -1;
            });
            setPostsFilteredArray(newData);
            setSearch(text);
        } else {
            setPostsFilteredArray(postsMasterArray);
            setSearch(text);
        }
    };

    return (
        <View style={styles.container}>
            <SearchBar searchFilter={searchFilter} />
            {postsFilteredArray.length ? (
                <FlatList
                    data={postsFilteredArray}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderCards}
                    ListFooterComponent={renderLoader}
                    onEndReached={loadMorePosts}
                    onEndReachedThreshold={0}
                />
            ) : search ? (
                <NoPost />
            ) : (
                <ActivityIndicator size="large" color={Colors.primary} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
