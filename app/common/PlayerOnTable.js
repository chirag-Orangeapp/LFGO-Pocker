import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Platform, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import _ from 'lodash';
import ENV from '../env';

export default class PlayerOnTable extends Component {

    render() {
        return (
            <>
                {this.props.isJoined ?
                    <View style={[styles.joinedContainer, { left: this.props.left, right: this.props.right, top: this.props.top, bottom: this.props.bottom }]}>
                        <Text style={styles.text}>John Langevin</Text>
                        <View style={styles.nameChips}>
                            <Image
                                style={styles.chipsImg}
                                source={require('../assets/poker_chip.png')}
                            />
                            <Text style={styles.chipsAmount}>52.00</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity
                        onPress={this.props.onPress}
                        style={[styles.tablePlayer, { left: this.props.left, right: this.props.right, top: this.props.top, bottom: this.props.bottom }]}>
                        <Image
                            style={styles.img}
                            source={require('../assets/down_arrow_player.png')}
                        />
                    </TouchableOpacity >
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    tablePlayer: {
        height: Platform.isPad ? wp('9%') : wp('12.08%'),
        width: Platform.isPad ? wp('9%') : wp('12.08%'),
        borderRadius: Platform.isPad ? wp('4.5%') : wp('7.5%'),
        borderColor: '#4B91DD',
        borderStyle: 'dashed',
        position: 'absolute',
        borderWidth: Platform.isPad ? wp('0.19%') : wp('0.24%'),
        backgroundColor: 'rgba(0, 110, 238, 0.4)',
        justifyContent: 'center'
    },
    img: {
        height: Platform.isPad ? wp('5%') : wp('5.8%'),
        width: Platform.isPad ? wp('5%') : wp('5.8%'),
        alignSelf: 'center'
    },
    joinedContainer: {
        borderRadius: Platform.isPad ? wp('1.3%') : wp('4.83%'),
        paddingVertical: Platform.isPad ? wp('1%') : Platform.OS == 'android' ? wp('1%') : wp('2%'),
        paddingHorizontal: Platform.isPad ? wp('2%') : Platform.OS == 'android' ? wp('1%') : wp('2%'),
        borderColor: '#4EBE26',
        borderWidth: Platform.isPad ? wp('0.13%') : wp('0.48%'),
        //width: Platform.isPad ? wp('5%') : wp('22.46%'),
        position: 'absolute',
        backgroundColor: '#012653'
    },
    text: {
        fontSize: Platform.isPad ? wp('1.56%') : wp('2.42%'),
        color: '#E1F1FF',
        fontFamily: ENV.regular,
    },
    nameChips: {
        flexDirection: 'row',
        marginTop: Platform.isPad ? wp('0.5%') : wp('1%'),

    },
    chipsImg: {
        height: Platform.isPad ? wp('1.95%') : wp('3.38%'),
        width: Platform.isPad ? wp('1.95%') : wp('3.38%'),
        alignSelf: 'center'
    },
    chipsAmount: {
        fontSize: Platform.isPad ? wp('1.56%') : wp('2.42%'),
        color: '#E1F1FF',
        fontFamily: ENV.regular,
        marginLeft: Platform.isPad ? wp('1%') : wp('1%'),
    }
})


