import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ENV from '../env';

export default class GradientButton extends Component {

    render() {
        return (

            <TouchableOpacity
                activeOpacity={1}
                //onPress={this.props.onPress}
                style={[styles.btnContainer,
                {
                    marginTop: this.props.marginTop,
                    shadowColor: this.props.greenShadow ? 'rgba(206, 240, 134, 0.6)' : "rgba(255, 124, 74, 0.6)",
                    width: this.props.width,
                    //height: this.props.height,
                    paddingVertical: this.props.paddingVertical,
                    alignSelf: 'flex-start'
                }
                ]}>
                <LinearGradient
                    colors={this.props.greenShadow ? ['#CEF086', '#4EBE26'] : ['#FF314F', '#FFC45C']}
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
        justifyContent: 'center',
        marginBottom: Platform.isPad ? wp('3.38%') : wp('1.38%')
    },
    btnText: {
        fontFamily: ENV.light,
        fontSize: Platform.isPad ? wp('1.56%') : wp('3.38%'),
        //lineHeight: wp('6.52%'),
        color: '#FFFFFF',
        alignSelf: 'center',
        fontWeight: '400'
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
    }
});


GradientButton.defaultProps = {
    partialScreenColor: false,
    enableKeyBoardAvoidingView: true
}