import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Platform, TouchableOpacity, FlatList, StyleSheet, Modal, Pressable } from 'react-native';
// import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import _ from 'lodash';
import ENV from '../../env';

export default class GameHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderTableGameHistoryItem(item, index) {
        console.log("index :--> ", (index / 2));
        let actualComponent = <View style={[styles.renderContainer, { backgroundColor: ((index % 2) !== 0) ? 'transparent' : '#33456B', }]}>
            <Text style={styles.renderDateText}>{item.date}</Text>
            <Text style={styles.renderReasonText}>{item.reason}</Text>
            <Text style={styles.renderWinninAmountText}>{item.winningAmount}</Text>
            <Text style={styles.renderAmountText}>{item.balance}</Text>
        </View>

        return actualComponent
    }

    renderHeader() {
        let headerComponent = <>
            <View style={styles.renderHeaderContainer}>
                <Text style={styles.headerDateText}>Date</Text>
                <Text style={styles.headerReasonText}>Reason</Text>
                <Text style={styles.headerWinningsText}>Winnings</Text>
                <Text style={styles.headerBalanceText}>Balance</Text>
            </View>
            <View style={styles.headerSeparator} />
        </>
        return headerComponent;
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

                        <View style={styles.renderHeaderContainer}>
                            <Text style={styles.headerDateText}>Date</Text>
                            <Text style={styles.headerReasonText}>Reason</Text>
                            <Text style={styles.headerWinningsText}>Winnings</Text>
                            <Text style={styles.headerBalanceText}>Balance</Text>
                        </View>
                        <View style={styles.headerSeparator} />

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.props.data}
                            style={{ marginTop: Platform.isPad ? hp('2%') : hp('2%'), maxHeight: Platform.isPad ? hp('60%') : hp('50%') }}
                            //ListHeaderComponent={this.renderHeader()}
                            renderItem={({ item, index }) => this.renderTableGameHistoryItem(item, index)}
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
    renderContainer: {
        // marginTop: Platform.isPad ? wp('2%') : wp('5%'),
        paddingHorizontal: Platform.isPad ? wp('3%') : wp('1.5%'),
        paddingVertical: Platform.isPad ? wp('2%') : wp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // renderProfileContainer: {
    //     flexDirection: 'row',
    //     paddingHorizontal: Platform.isPad ? wp('3%') : wp('5%'),
    //     paddingVertical: Platform.isPad ? wp('2%') : wp('3%'),
    // },
    // renderImg: {
    //     width: Platform.isPad ? wp('4.34%') : wp('4.34%'),
    //     height: Platform.isPad ? wp('4.34%') : wp('4.34%'),
    //     alignSelf: 'center'
    // },
    renderDateText: {
        //marginLeft: Platform.isPad ? wp('3%') : wp('1%'),
        fontSize: Platform.isPad ? wp('1.95%') : wp('2.90%'),
        lineHeight: Platform.isPad ? wp('2.60%') : wp('5.8%'),
        color: '#C9E6FF',
        width: '30%',
    },
    renderReasonText: {
        // marginLeft: Platform.isPad ? wp('3%') : wp('1%'),
        fontSize: Platform.isPad ? wp('1.95%') : wp('2.90%'),
        lineHeight: Platform.isPad ? wp('2.60%') : wp('5.8%'),
        color: '#C9E6FF',
        width: '35%',
        //backgroundColor: 'red'
    },
    renderWinninAmountText: {
        fontSize: Platform.isPad ? wp('1.95%') : wp('2.90%'),
        lineHeight: Platform.isPad ? wp('2.60%') : wp('5.8%'),
        textAlign: 'center',
        alignSelf: 'center',
        color: '#C9E6FF',
        width: '15%',
        //backgroundColor: 'red'
    },
    renderAmountText: {
        fontSize: Platform.isPad ? wp('1.95%') : wp('2.90%'),
        lineHeight: Platform.isPad ? wp('2.60%') : wp('5.8%'),
        textAlign: 'right',
        color: '#C9E6FF',
        width: '15%',
        //backgroundColor: 'red'
    },
    renderHeaderContainer: {
        marginTop: Platform.isPad ? hp('2%') : hp('1%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Platform.isPad ? wp('3%') : wp('1.5%'),
        paddingVertical: Platform.isPad ? wp('2%') : wp('2%'),
        //backgroundColor: 'red'
    },
    headerDateText: {
        fontFamily: ENV.semiBold,
        fontWeight: '600',
        fontSize: Platform.isPad ? wp('1.95%') : wp('2.90%'),
        lineHeight: Platform.isPad ? wp('2.60%') : wp('5.8%'),
        //textAlign: 'center',
        color: '#C9E6FF',
        width: '30%',
    },
    headerReasonText: {
        fontFamily: ENV.semiBold,
        fontWeight: '600',
        fontSize: Platform.isPad ? wp('1.95%') : wp('2.90%'),
        lineHeight: Platform.isPad ? wp('2.60%') : wp('5.8%'),
        //textAlign: 'center',
        color: '#C9E6FF',
        width: '35%',
    },
    headerWinningsText: {
        fontFamily: ENV.semiBold,
        fontWeight: '600',
        fontSize: Platform.isPad ? wp('1.95%') : wp('2.90%'),
        lineHeight: Platform.isPad ? wp('2.60%') : wp('5.8%'),
        //textAlign: 'center',
        color: '#C9E6FF',
        width: '20%',
    },
    headerBalanceText: {
        fontFamily: ENV.semiBold,
        fontWeight: '600',
        fontSize: Platform.isPad ? wp('1.95%') : wp('2.90%'),
        lineHeight: Platform.isPad ? wp('2.60%') : wp('5.8%'),
        textAlign: 'center',
        color: '#C9E6FF',
        width: '20%', //backgroundColor: 'red'
    },
    headerSeparator: {
        height: Platform.isPad ? wp('0.5%') : wp('0.5%'),
        backgroundColor: '#006EEE'
    }

})