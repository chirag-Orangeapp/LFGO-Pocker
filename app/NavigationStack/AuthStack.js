import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login/Login';

const Stack = createStackNavigator();

function AuthNavigationStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} />

        </Stack.Navigator>
    );
}

export default class AuthStack extends Component {
    render() {
        return <AuthNavigationStack />
    }
}