// Librairies
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

// Fonts
import {
    useFonts,
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
} from "@expo-google-fonts/inria-sans";

// Ecrans
import StackNav from "./routes/StackNav";

export default function App() {
    // Fonts
    let [fontsLoaded] = useFonts({
        InriaSans_300Light,
        InriaSans_300Light_Italic,
        InriaSans_400Regular,
        InriaSans_400Regular_Italic,
        InriaSans_700Bold,
        InriaSans_700Bold_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NavigationContainer>
                <StackNav />
            </NavigationContainer>
        );
    }
}
