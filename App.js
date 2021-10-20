// Librairies
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Ecrans
import Home from "./screens/Home";

export default function App() {
    return <Home />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import axios from "axios";

// export default function App() {
//     const [array, setArray] = useState([]);

//     useEffect(() => {
//         axios
//             .get(`https://jsonplaceholder.typicode.com/posts?/limits=50`)
//             .then(res => {
//                 // const array = [];

//                 // for (let key in res.data) {
//                 //     array.push(...res.data[key]);
//                 // }
//                 // console.log(array);
//                 // const halfData = res.data.splice()
//                 setArray(res.data.splice(1, 50));
//                 console.log(array.length);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text>Open up App.js to start working on your app!</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });
