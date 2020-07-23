import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    Platform,
    ImageBackground
} from 'react-native';
import ENV from '../env';
import _ from 'lodash';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class LFGOTextfield extends Component {
    constructor(props) {
        super(props);
        this.inputRefs = {};

        this.state = {
            isSecureText: this.props.secureTextEntry,
            title: '',
            value: '',
            isFocus: false,
        }
    }

    render() {
        return (
            <View style={[{ marginTop: this.props.marginTop }, this.props.containerStyle]}>
                {/* {this.props.isSingleItem &&
                    this.renderTextField()
                } */}
                <View style={[styles.textInputView, { borderColor: this.state.isFocus ? '#006EEE' : '#33456B', flexDirection: 'row', marginTop: this.props.textInputMarginTop }]}>
                    <TextInput
                        ref={this.props.fieldRef}
                        style={[styles.textInput, { width: (this.props.isPassword && Platform.isPad) ? '90%' : this.props.isPassword ? '85%' : '100%', }]}
                        placeholder={this.props.placeholder}
                        placeholderTextColor={'#C9E6FF'}
                        editable={this.props.editable}
                        secureTextEntry={this.state.isSecureText}
                        autoCapitalize={'none'}
                        autoCorrect={this.props.autoCorrect ? false : true}
                        onFocus={() => {
                            this.setState({
                                isFocus: true
                            })
                        }}
                        onBlur={() => {
                            this.setState({
                                isFocus: false
                            })
                        }}
                        multiline={this.props.multiline}
                        numberOfLines={4}
                        maxLength={this.props.maxLength}
                        onSubmitEditing={(event) => {
                            if (this.props.onSubmitEditing) {
                                this.props.onSubmitEditing(this.props.fieldNextRef, this.props.fieldRef, this.props.fieldType)
                            }
                        }}
                        value={this.state.title == '' ? this.props.title : this.state.title}
                        returnKeyType={this.props.returnKeyType == 'done' ? 'done' : 'next'}
                        keyboardType={this.props.numberField ? 'numeric' : this.props.phonePad ? 'number-pad' : this.props.emailPad ? 'email-address' : 'default'}
                        onChangeText={value => this.onEditText(this.props.inputYype ? 'email' : this.props.fieldType, value)}
                    />

                    {this.props.isPassword &&
                        <TouchableOpacity
                            onPress={() => this.showPassword()}
                            style={styles.passwordEyeImgContainer}>
                            <Image
                                style={styles.passwordEyeImg}
                                source={this.state.isSecureText ? require('../assets/eye.png') : require('../assets/eye.png')} />
                        </TouchableOpacity>
                    }
                </View>

            </View>
        )
    }

    // renderTextField() {
    //     // <>
    //     <View style={[styles.textInputView, { borderColor: this.state.isFocus ? '#006EEE' : '#33456B', flexDirection: 'row' }]}>
    //         <TextInput
    //             ref={this.props.fieldRef}
    //             style={[styles.textInput, { width: this.props.isPassword ? '90%' : '100%' }]}
    //             placeholder={this.props.placeholder}
    //             placeholderTextColor={'#C9E6FF'}
    //             editable={this.props.editable}
    //             secureTextEntry={this.state.isSecureText}
    //             autoCapitalize={'none'}
    //             autoCorrect={this.props.autoCorrect ? false : true}
    //             onFocus={() => {
    //                 this.setState({
    //                     isFocus: true
    //                 })
    //             }}
    //             onBlur={() => {
    //                 this.setState({
    //                     isFocus: false
    //                 })
    //             }}
    //             multiline={this.props.multiline}
    //             numberOfLines={4}
    //             maxLength={this.props.maxLength}
    //             onSubmitEditing={(event) => {
    //                 if (this.props.onSubmitEditing) {
    //                     this.props.onSubmitEditing(this.props.fieldNextRef, this.props.fieldRef, this.props.fieldType)
    //                 }
    //             }}
    //             value={this.state.title == '' ? this.props.title : this.state.title}
    //             returnKeyType={this.props.returnKeyType == 'done' ? 'done' : 'next'}
    //             keyboardType={this.props.numberField ? 'numeric' : this.props.phonePad ? 'number-pad' : this.props.emailPad ? 'email-address' : 'default'}
    //             onChangeText={value => this.onEditText(this.props.inputYype ? 'email' : this.props.fieldType, value)}
    //         />

    //         {this.props.isPassword &&
    //             <TouchableOpacity
    //                 onPress={() => this.showPassword()}
    //                 style={styles.passwordEyeImgContainer}>
    //                 <Image
    //                     style={styles.passwordEyeImg}
    //                     source={this.state.isSecureText ? require('../assets/eye.png') : require('../assets/eye.png')} />
    //             </TouchableOpacity>
    //         }
    //     </View>
    //     // </>
    // }

    onEditText(type, value) {

        if (type == 'password') {
            if (value.length !== 0) {
                if (value.length < 8) {
                    setMsg('Field length must be longer than 8 characters.')
                    this.props.onChangeText(type, value, msg)
                    // return setMsg('Field length must be longer than 8 characters.')
                }
            }
            else {
                this.props.onEditTextField(type, value, msg)
            }
        } else if (type == 'email') {
            var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (value.length !== 0) {
                if (regEmail.test(value)) {
                    alert('Email is invalid.')
                } else {
                }
            } else {
                alert('Please enter the email address.')
            }
        }
        this.setState({
            value: type == 'email' ? value.toLowerCase() : value,
            title: type == 'email' ? value.toLowerCase() : value
        })
        this.props.onEditTextField(type, value)
    }

    showPassword() {
        this.setState({
            isSecureText: !this.state.isSecureText

        })
        this.props.showPassword();
    }
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1, backgroundColor: '#002a5b', width: wp('100%')
    },
    scrollView: {
        flex: 1
    },
    container: { flex: 1, alignSelf: 'center', alignItems: 'center' },
    welcomeText: { marginTop: hp('10%'), fontSize: wp('5.8%'), color: '#C9E6FF', fontFamily: ENV.medium },
    welcomeImge: { height: hp('8%'), width: wp('40%'), marginTop: hp('3%') },
    signInText: { fontSize: wp('3.86%'), color: '#92AFC6', marginTop: hp('6%'), fontFamily: ENV.light },
    textInputView: {
        borderRadius: wp('9.66%'),
        width: Platform.isPad ? wp('80%') : wp('95%'), alignSelf: 'center',
        borderColor: '#006EEE',
        borderWidth: wp('0.36%'),
        paddingHorizontal: Platform.isPad ? wp('5%') : wp('7%'), height: Platform.isPad ? wp('9.11%') : wp('14.5%'),
        // paddingVertical: Platform.OS == 'android' ? null : hp('2%'),
        marginTop: hp('3%')
    },
    textInput: { fontFamily: ENV.light, fontSize: Platform.isPad ? wp('2.34%') : wp('3.86%'), lineHeight: Platform.isPad ? wp('3.51%') : wp('5.8%'), color: '#C9E6FF', },
    passwordEyeImgContainer: {
        //marginRight: wp('4.83%'),
        //width: wp('7.25%'),
        // height: wp('7.25%'),
        alignSelf: 'center', marginLeft: wp('5%'),
    },
    passwordEyeImg: {
        width: Platform.isPad ? wp('3.91%') : wp('7.25%'),
        height: Platform.isPad ? wp('3.91%') : wp('7.25%'),
        alignSelf: 'center', resizeMode: 'contain',
    }
})