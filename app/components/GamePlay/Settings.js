import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Platform, TouchableOpacity, FlatList, StyleSheet, Modal, Pressable } from 'react-native';
// import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import _ from 'lodash';
import ENV from '../../env';
import Switch from '../../common/Switch';
import CommonButton from '../../common/CommonButton';

export default class GameHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Modal
                visible={this.props.isVisible}
                animationType={'slide'}
                transparent={true}
            >
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>{this.props.header}</Text>
                            <TouchableOpacity
                                onPress={this.props.onPress}
                                style={styles.closeImgView}>
                                <Image
                                    style={styles.closeImg}
                                    source={require('../../assets/close.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: Platform.isPad ? hp('2%') : hp('1%') }}>
                            <View style={styles.settingContainer}>
                                <Text style={styles.settingsTitle}>{this.props.settingTitle1}</Text>
                                <Switch
                                    onValueChange={() => this.props.onValueChange(1)}
                                    value={this.props.switch1}
                                />
                            </View>

                            <View style={styles.settingContainer}>
                                <Text style={styles.settingsTitle}>{this.props.settingTitle2}</Text>
                                <Switch
                                    onValueChange={() => this.props.onValueChange(2)}
                                    value={this.props.switch2}
                                />
                            </View>

                            <View style={styles.settingContainer}>
                                <Text style={styles.settingsTitle}>{this.props.settingTitle3}</Text>
                                <Switch
                                    onValueChange={() => this.props.onValueChange(3)}
                                    value={this.props.switch3}
                                />
                            </View>

                            <View style={styles.settingContainer}>
                                <Text style={styles.settingsTitle}>{this.props.settingTitle4}</Text>
                                <CommonButton
                                    onPress={this.props.onPressSettingsBtn}
                                    // marginLeft={Platform.isPad ? wp('2%') : wp('3%')}
                                    imgUrl={require('../../assets/log-out.png')}
                                />
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(5, 22, 44, 0.7)',
        position: 'absolute',
        height: hp('100%'),
        width: wp('100%'),
        justifyContent: 'center'
    },
    contentContainer: {
        alignSelf: 'center',
        backgroundColor: '#031F41',
        width: Platform.isPad ? wp('80%') : wp('92%'),
        borderRadius: Platform.isPad ? wp('2%') : wp('3.86%'),
        borderColor: '#006EEE',
        borderWidth: Platform.isPad ? wp('0.19%') : wp('0.24%'),
        padding: Platform.isPad ? wp('3%') : wp('5%'),
        // paddingVertical: Platform.isPad ? wp() : wp('3%'),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {
        color: '#C9E6FF',
        fontFamily: ENV.semiBold,
        fontWeight: '600',
        fontSize: Platform.isPad ? wp('3.13%') : wp('4.34%'),
        lineHeight: Platform.isPad ? wp('4.68%') : wp('6.52%'),
        alignSelf: 'center',
    },
    closeImg: {
        height: Platform.isPad ? wp('5.21%') : wp('5.8%'),
        width: Platform.isPad ? wp('5.21%') : wp('5.8%'),
    },
    closeImgView: {
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 0
    },
    settingContainer: { justifyContent: 'space-between', flexDirection: 'row', marginTop: Platform.isPad ? hp('2%') : hp('2%') },
    settingsTitle: {
        fontSize: Platform.isPad ? wp('2.34%') : wp('3.86%'),
        lineHeight: Platform.isPad ? wp('2.60%') : wp('5.8%'),
        color: '#92AFC6',
        alignSelf: 'center'
    }

})