import React, { Component } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, ImageBackground, } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ENV from '../env';
import { StackActions } from '@react-navigation/native';
// import { connect } from 'react-redux';

export default class DrawerMenu extends Component {
    constructor(props) {
        super(props);
        //console.log("Props in DrawerMnu", props);
    }

    onClickScreen(type) {

    }

    render() {
        return (
            <View style={{ overflow: 'hidden', backgroundColor: '#2F58E2', borderBottomRightRadius: 30, borderTopRightRadius: 30 }}>

            </View>
        )
    }
}

// const select = (store) => {
//     return store;
// }

// export default connect(select)(DrawerMenu);