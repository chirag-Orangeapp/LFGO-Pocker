import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from '../app/NavigationStack/AuthStack';
import ScreenStack from '../app/NavigationStack/ScreenStack';

const Stack = createStackNavigator();

function NavigationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="ScreenStack" component={ScreenStack} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default class AppNavigator extends Component {
    render() {
        return <NavigationStack />
    }
}
