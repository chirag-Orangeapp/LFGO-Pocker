import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Platform, TouchableOpacity, FlatList, StyleSheet, Modal, Pressable } from 'react-native';
// import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import _ from 'lodash';
import ENV from '../env';

export default class TableModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderTablePlayerItem(item) {
        let actualComponent = <View style={styles.renderContainer}>
            <View style={styles.renderProfileContainer}>
                <Image
                    style={styles.renderImg}
                    source={require('../assets/user_deafult_profile.png')}
                />
                <Text style={styles.renderNameText}>{item.name}</Text>
            </View>
            <View style={styles.renderProfileContainer}>
                <Image
                    style={styles.renderImg}
                    source={require('../assets/poker_chip.png')}
                />
                <Text style={styles.renderNameText}>{item.chips}</Text>
            </View>
        </View>

        return actualComponent
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
                                    source={require('../assets/close.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.props.data}
                            style={{ marginTop: Platform.isPad ? hp('2%') : hp('2%'), maxHeight: Platform.isPad ? hp('70%') : hp('50%') }}
                            renderItem={({ item }) => this.renderTablePlayerItem(item)}
                            keyExtractor={item => item.id}
                        />
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
    renderContainer: {
        marginTop: Platform.isPad ? wp('2%') : wp('5%'),
        backgroundColor: '#33456B',
        borderWidth: Platform.isPad ? wp('0.19%') : wp('0.24%'),
        borderColor: '#006EEE',
        borderRadius: Platform.isPad ? wp('3%') : wp('3.86%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    renderProfileContainer: {
        flexDirection: 'row',
        paddingHorizontal: Platform.isPad ? wp('3%') : wp('5%'),
        paddingVertical: Platform.isPad ? wp('2%') : wp('3%'),
    },
    renderImg: {
        width: Platform.isPad ? wp('4.34%') : wp('4.34%'),
        height: Platform.isPad ? wp('4.34%') : wp('4.34%'),
        alignSelf: 'center'
    },
    renderNameText: {
        marginLeft: Platform.isPad ? wp('3%') : wp('3%'),
        fontSize: Platform.isPad ? wp('3.13%') : wp('3.86%'),
        lineHeight: Platform.isPad ? wp('4.68%') : wp('5.8%'),
        color: '#C9E6FF'
    }
})