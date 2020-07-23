import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ENV from '../env';

export default class GradientButton extends Component {

    render() {
        return (

            <TouchableOpacity
                activeOpacity={Platform.isPad ? 0.9 : 0.7}
                onPress={this.props.onPress}
                style={[styles.btnContainer,
                {
                    marginTop: this.props.marginTop,
                    shadowColor: this.props.blueShadow ? 'rgba(162, 207, 254, 0.3)' : "rgba(255, 124, 74, 0.6)",
                    width: this.props.width,
                    height: this.props.height
                }
                ]}>
                <LinearGradient
                    colors={this.props.blueShadow ? ['#2576CE', '#A2CFFE'] : ['#FF314F', '#FFC45C']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 2.6 }}
                    style={[styles.container, { width: this.props.width }]}
                    useAngle={true}
                    angle={this.props.blueShadow ? 179.66 : 179.84}
                >
                    <Text style={styles.btnText}>{this.props.btnText}</Text>
                </LinearGradient>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: Platform.isPad ? wp('5.21%') : wp('9.66%'),
        width: Platform.isPad ? wp('80%') : wp('95%'), alignSelf: 'center',
        borderColor: 'transparent',
        borderWidth: wp('0.36%'),
        //  paddingHorizontal: wp('7%'),
        //paddingVertical: hp('2%'),
        height: '100%',
        justifyContent: 'center'

    },
    btnText: {
        fontFamily: ENV.semiBold,
        fontSize: wp('4.35%'),
        lineHeight: wp('6.52%'),
        color: '#FFFFFF',
        alignSelf: 'center',
        fontWeight: '600'
    },
    gradientView: { flex: 1 },
    btnContainer: {
        justifyContent: 'center', alignSelf: 'center',
        height: Platform.isPad ? wp('11.33%') : wp('14.5%'),
        alignItems: 'center',

        shadowOffset: {
            width: 0,
            height: Platform.isPad ? wp('0.65%') : wp('2.42%'),
        },
        shadowOpacity: 1,
        shadowRadius: 14.00,
        elevation: 24,
        //marginBottom: 30
    }
});


GradientButton.defaultProps = {
    partialScreenColor: false,
    enableKeyBoardAvoidingView: true
}