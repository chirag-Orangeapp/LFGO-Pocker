import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Platform, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
// import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import _ from 'lodash';
import ENV from '../../env';
import LFGOTextfield from '../../common/LFGOTextfield';
import GradientButton from '../../common/GradientButton';

import { StackActions } from '@react-navigation/native';

export default class Login extends Component {
    fieldEmailRef = React.createRef();
    fieldPasswordRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            isSecureText: true,
            email: '',
            password: '',
            isPassword: true
        }
    }

    componentDidMount() {
        console.log("Login....", wp('40%'));
    }

    onEditTextField(type, value) {
        if (type == "E") {
            this.setState({
                email: value.toLowerCase()
            }
                //     , () => {
                //     if (value.length > 0) {
                //         this.validateInput(type)
                //     } else {
                //         this.setState({
                //             isEmailValidationFailed: false
                //         })
                //     }
                // }
            );
        } else if (type == "P") {
            this.setState({
                password: value
            }
                //     , () => {
                //     if (value.length > 0) {
                //         this.validateInput(type);
                //     } else {
                //         this.setState({ isPasswordValidationFailed: false });
                //     }
                //     }
            );
        }

    }


    render() {
        return (
            <Fragment>
                <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView
                        bounces={false}
                        style={styles.scrollView}>
                        <View style={styles.container}>
                            <Text style={styles.welcomeText}>Welcome to</Text>

                            <Image
                                style={styles.welcomeImge}
                                source={require('../../assets/welcome.png')}
                            />

                            <Text style={styles.signInText}>Please sign in</Text>

                            <LFGOTextfield
                                fieldRef={this.fieldEmailRef}
                                fieldNextRef={this.fieldPasswordRef}
                                fieldType={'E'}
                                type={'email'}
                                emailPad={true}
                                textInputMarginTop={hp('3%')}
                                title={this.state.email == null ? '' : this.state.email}
                                isSingleItem={true}
                                placeholder={'Enter your email address'}
                                onEditTextField={(type, value) => this.onEditTextField('E', value)}
                                onSubmitEditing={this._onSubmitEditing.bind(this, this.fieldPasswordRef, this.fieldEmailRef, 'E')}
                            />

                            < LFGOTextfield
                                fieldRef={this.fieldPasswordRef}
                                fieldNextRef={this.fieldPasswordRef}
                                fieldType={'P'}
                                isSingleItem={true}
                                title={this.state.password}
                                textInputMarginTop={hp('1%')}
                                secureTextEntry={this.state.isSecureText}
                                marginTop={5} height={45}
                                placeholder={'Enter your password'}
                                isPassword={true}
                                onEditTextField={(type, value) => this.onEditTextField('P', value)}
                                showPassword={() => this.showPassword()}
                                onSubmitEditing={this._onSubmitEditing.bind(this, this.fieldPasswordRef, this.fieldPasswordRef, 'P')}
                            />

                            <View style={styles.rememberContainer}>
                                <TouchableOpacity
                                    // onPress={() => alert('hello')}
                                    style={styles.checkBox} />

                                <Text style={styles.rememberText}>Remember me</Text>
                            </View>
                            <GradientButton
                                marginTop={Platform.isPad ? hp('28%') : hp('6%')}
                                height={Platform.isPad ? wp('9.11%') : wp('14.5%')}
                                width={Platform.isPad ? wp('80%') : wp('95%')}
                                // blueShadow={true}
                                onPress={() => this.onPressLogin()}
                                btnText={'Sign In'}
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        )
    }

    _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
        // if (type == 'P') {
        //     this.onPressLogin();
        // }

    }

    showPassword() {
        this.setState({
            isSecureText: !this.state.isSecureText
        });
    }

    onPressLogin() {
        this.props.navigation.dispatch(StackActions.replace("ScreenStack"))
    }
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1, backgroundColor: '#002a5b', //width: Platform.OS == 'ios' ? wp('100%') : wp('100%')
    },
    scrollView: {
        flex: 1
    },
    container: { flex: 1, alignSelf: 'center', alignItems: 'center' },
    welcomeText: { marginTop: Platform.isPad ? wp('8%') : hp('10%'), fontSize: Platform.isPad ? wp('6.25%') : wp('5.8%'), color: '#C9E6FF', fontFamily: ENV.medium },
    welcomeImge: { height: Platform.isPad ? wp('15.36%') : hp('8%'), width: Platform.isPad ? wp('37.5%') : wp('40%'), marginTop: Platform.isPad ? wp('2%') : hp('3%'), resizeMode: Platform.isPad ? 'stretch' : 'cover' },
    signInText: { fontSize: Platform.isPad ? wp('3.13%') : wp('3.86%'), color: '#92AFC6', marginTop: Platform.isPad ? hp('4.5%') : hp('5%'), fontFamily: ENV.light },
    textInputView: {
        borderRadius: wp('9.66%'), width: wp('95%'),
        alignSelf: 'center', borderColor: '#006EEE',
        borderWidth: wp('0.36%'), marginTop: hp('3%'), paddingHorizontal: wp('7%'), paddingVertical: hp('2%')
    },
    textInput: { fontFamily: ENV.light, fontSize: wp('3.86%'), lineHeight: wp('5.8%'), color: '#C9E6FF', },
    passwordEyeImgContainer: {
        alignSelf: 'center',
        marginLeft: wp('5%'),
    },
    passwordEyeImg: {
        width: wp('7.25%'),
        height: wp('7.25%'),
        alignSelf: 'center', resizeMode: 'contain',
    },
    rememberContainer: {
        flexDirection: 'row', width: Platform.isPad ? wp('80%') : wp('95%'), alignSelf: 'center', marginTop: hp('3%')
    },
    checkBox: { height: Platform.isPad ? wp('3.91%') : wp('7.25%'), width: Platform.isPad ? wp('3.91%') : wp('7.25%'), borderColor: '#006EEE', borderWidth: Platform.isPad ? wp('0.19%') : wp('0.36%'), borderRadius: wp('0.966%') },
    rememberText: { fontFamily: ENV.light, fontSize: Platform.isPad ? wp('2.34%') : wp('3.38%'), lineHeight: Platform.isPad ? wp('3.52%') : wp('5.075%'), color: '#C9E6FF', alignSelf: 'center', fontWeight: '300', marginLeft: Platform.isPad ? wp('1.5%') : wp('5%'), }
})


// const select = (store) => {
//     return store;
// }

// export default connect(select)(Home);


