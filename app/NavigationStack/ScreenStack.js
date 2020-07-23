import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerStack from './DrawerStack';
import Tables from '../components/GamePlay/Tables';
import GamePlay from '../components/GamePlay/GamePlay';

const Stack = createStackNavigator();

function MyScreenNavigationStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="DrawerStack" component={DrawerStack} />
            <Stack.Screen name='Tables' component={Tables} />
            <Stack.Screen name='GamePlay' component={GamePlay} />
        </Stack.Navigator>
    );
}

export default class ScreenStack extends Component {
    render() {
        return <MyScreenNavigationStack />
    }
}