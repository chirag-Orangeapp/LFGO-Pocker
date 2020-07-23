
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ENV from '../env';
import { exp } from 'react-native-reanimated';
// import { connect } from 'react-redux';
// import Modal from 'react-native-modal';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={styles.leftArrowTouch}>
                    <Image
                        style={styles.headerImg}
                        source={require('../assets/left_arrow.png')}
                    />
                    <Text style={styles.previousScnText}>{this.props.previosuScreenName}</Text>
                </TouchableOpacity>

                <Text style={styles.headerText}>{this.props.headerText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        width: Platform.isPad ? wp('90%') : wp('95%'), alignSelf: 'center',
        height: Platform.isPad ? hp('5%') : hp('5%'),
        //backgroundColor: 'red',
        //justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    leftArrowTouch: { flexDirection: 'row' },
    headerImg: {
        height: Platform.isPad ? wp('3.34%') : wp('5.07%'),
        width: Platform.isPad ? wp('1.95%') : wp('2.90%')
    },
    previousScnText: {
        fontSize: Platform.isPad ? wp('2.34%') : wp('4.11%'),
        color: '#0A84FF',
        marginLeft: wp('3%')
    },
    headerText: {
        fontFamily: ENV.semiBold,
        fontSize: Platform.isPad ? wp('2.34%') : wp('4.11%'),
        color: '#FFFFFF',
        width: Platform.isPad ? wp('70%') : wp('60%'),
        alignSelf: 'center',
        textAlign: 'center',
        //backgroundColor: 'red'
    }
})