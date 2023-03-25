import React from "react";
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../components/container/SplashScreen";
import WelcomeScreen from "../components/container/WelcomeScreen";


const Routes = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="splashScreen" headerMode="none" screenOptions={{
                useNativeDriver: true,
                headerShown: false
            }}>
                <Stack.Screen name="splashScreen" component={SplashScreen}  />
                <Stack.Screen name="welcome" component={WelcomeScreen}
                
                // options={{
                //     headerStyle: {
                //         backgroundColor: '#e7305b'
                //     }
                // }} 
                
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;