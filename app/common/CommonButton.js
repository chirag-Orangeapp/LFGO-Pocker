import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ENV from '../env';

export default class CommonButton extends Component {

    render() {
        return (
            <TouchableOpacity
                activeOpacity={Platform.isPad ? 0.9 : 0.7}
                onPress={this.props.onPress}
                style={[styles.btnContainer, { marginTop: this.props.marginTop, marginLeft: this.props.marginLeft, position: this.props.position, right: this.props.right, bottom: this.props.bottom, top: this.props.top }]}>
                <View style={styles.btnBgView}>
                    <Image
                        style={styles.iconImg}
                        source={this.props.imgUrl}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    btnContainer: {
        justifyContent: 'center', alignSelf: 'center',
        height: Platform.isPad ? wp('7.36%') : wp('10.63%'),
        width: Platform.isPad ? wp('7.36%') : wp('10.63%'),
        alignItems: 'center',
        borderColor: '#006EEE',
        borderWidth: Platform.isPad ? wp('0.19%') : wp('0.36%'),
        borderRadius: Platform.isPad ? wp('3.68%') : wp('5.32%')
    },
    btnBgView: {
        backgroundColor: '#33456B',
        height: Platform.isPad ? wp('5.53%') : wp('8.21%'),
        width: Platform.isPad ? wp('5.53%') : wp('8.21%'),
        borderRadius: Platform.isPad ? wp('2.77%') : wp('4.11%'),
        justifyContent: 'center'
    },
    iconImg: {
        height: Platform.isPad ? wp('2.60%') : wp('4.34%'),
        width: Platform.isPad ? wp('2.60%') : wp('4.34%'),
        alignSelf: 'center'
    }
});
