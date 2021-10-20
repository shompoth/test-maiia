// Librairies
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Home from "../screens/Home";
import Posts from "../screens/Posts";
import Colors from "../styles/Colors";

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.secondary,
                },
                headerTintColor: Colors.white,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
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
