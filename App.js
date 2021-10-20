// Librairies
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Ecrans
import StackNav from "./routes/StackNav";

export default function App() {
    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    );
}
