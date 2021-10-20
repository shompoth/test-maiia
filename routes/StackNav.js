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
            <Stack.Screen
                name="Accueil"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Posts" component={Posts} />
        </Stack.Navigator>
    );
};

export default StackNav;
