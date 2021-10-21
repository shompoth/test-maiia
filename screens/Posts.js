// Librairies
import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "axios";

const Posts = () => {
    // State
    const [postsArray, setPostsArray] = useState([]);

    // UseEffect
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                setPostsArray(res.data.splice(1, 50));
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 10 },
});

export default Posts;
