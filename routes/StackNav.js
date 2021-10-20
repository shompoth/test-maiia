// Librairies
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home from "../screens/Home";
import Posts from "../screens/Posts";

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Posts" component={Posts} />
        </Stack.Navigator>
    );
};

export default StackNav;
