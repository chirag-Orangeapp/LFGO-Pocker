import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerMenu from '../common/DrawerMenu';
import Home from '../components/GamePlay/Home';


const Drawer = createDrawerNavigator();

function DrawerNavigationStack() {
    return (
        <Drawer.Navigator
            overlayColor={'rgba(255,255,255,0.7)'}
            drawerStyle={{ backgroundColor: 'transparent' }}
            drawerContent={props => <DrawerMenu {...props} />}
            initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={Home} />

        </Drawer.Navigator>
    );
}

export default class DrawerStack extends Component {
    render() {
        return <DrawerNavigationStack />
    }
}