import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Platform, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import _ from 'lodash';
import ENV from '../../env';
import CommonButton from '../../common/CommonButton';
import PlayerOnTable from '../../common/PlayerOnTable';

export default class GamePlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playerArray: [
                { id: 1, name: 'John Langevin', chips: 5200, isJoined: true },
                { id: 2, name: 'John Langevin', chips: 5200, isJoined: false },
                { id: 3, name: 'John Langevin', chips: 5200, isJoined: false },
                { id: 4, name: 'John Langevin', chips: 5200, isJoined: false },
                { id: 5, name: 'John Langevin', chips: 5200, isJoined: false },

                { id: 6, name: 'John Langevin', chips: 5200, isJoined: false },
                { id: 7, name: 'John Langevin', chips: 5200, isJoined: false },
                { id: 8, name: 'John Langevin', chips: 5200, isJoined: false },
                { id: 9, name: 'John Langevin', chips: 5200, isJoined: false },
                { id: 10, name: 'John Langevin', chips: 5200, isJoined: false },
            ],
            isJoinedPlayer1: true,
            isJoinedPlayer2: true, //true,
            isJoinedPlayer3: false, //true,
            isJoinedPlayer4: false, //true,
            isJoinedPlayer5: false, //true,
            isJoinedPlayer6: false, //true,
            isJoinedPlayer7: false, //true,
            isJoinedPlayer8: false, //true,
            isJoinedPlayer9: false, //true,
            isJoinedPlayer10: false, //true,
        }
    }

    renderPlayerItem(item) {
        let actualComponent = <View>
            {!item.isJoined ?
                <PlayerOnTable
                    onPress={() => alert('Player 2')}
                    top={Platform.isPad ? wp('-4%') : wp('-8%')}
                    right={Platform.isPad ? wp('8%') : wp('10%')}
                /> : <Text>Hello</Text>}
        </View>
        return actualComponent;
    }

    render() {
        return (
            <Fragment>
                <SafeAreaView style={styles.safeAreaView}>
                    <CommonButton
                        position={'absolute'}
                        top={Platform.isPad ? hp('5%') : Platform.OS == 'android' ? hp('3%') : hp('6%')}
                        right={Platform.isPad ? wp('4%') : wp('5%')}
                        onPress={() => alert('Drawer')}
                        imgUrl={require('../../assets/menu.png')}
                    />

                    <ScrollView
                        bounces={false}
                        style={styles.scrollView}>
                        <View style={styles.container}>


                            <View style={styles.gameTable}>

                                {/* <FlatList
                                    data={this.state.playerArray}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => this.renderPlayerItem(item)}
                                /> */}

                                {/* <PlayerOnTable
                                    onPress={() => alert('Player 1')}
                                    top={Platform.isPad ? hp('-6%') : hp('-5%')}
                                    left={Platform.isPad ? wp('40%') : wp('35%')}

                                /> */}

                                <PlayerOnTable
                                    onPress={() => alert('Player 1')}
                                    // top={Platform.isPad ? wp('-4%') : wp('-5%')}
                                    // right={Platform.isPad ? wp('8%') : wp('5%')}
                                    isJoined={this.state.isJoinedPlayer1}
                                    top={Platform.isPad ? hp('-5%') : hp('-5%')}
                                    left={Platform.isPad ? wp('25%') : wp('35%')}
                                />
                                <PlayerOnTable
                                    onPress={() => alert('Player 2')}
                                    // top={Platform.isPad ? hp('5%') : hp('6.75%')}
                                    // right={Platform.isPad ? wp('2%') : wp('-5%')}
                                    isJoined={this.state.isJoinedPlayer2}
                                    top={Platform.isPad ? wp('-2') : wp('-10%')}
                                    right={Platform.isPad ? wp('4%') : wp('10%')}
                                />
                                <PlayerOnTable
                                    onPress={() => alert('Player 3')}
                                    isJoined={this.state.isJoinedPlayer3}
                                    top={Platform.isPad ? hp('11%') : hp('7%')}
                                    right={Platform.isPad ? wp('-5%') : wp('-5%')}
                                />
                                <PlayerOnTable
                                    onPress={() => alert('Player 4')}
                                    isJoined={this.state.isJoinedPlayer4}
                                    top={Platform.isPad ? hp('25%') : hp('15.5%')}
                                    right={Platform.isPad ? wp('4%') : wp('-3%')}
                                />
                                <PlayerOnTable
                                    onPress={() => alert('Player 5')}
                                    isJoined={this.state.isJoinedPlayer5}
                                    top={Platform.isPad ? hp('28%') : hp('19%')}
                                    right={Platform.isPad ? wp('25%') : wp('22%')}
                                />
                                <PlayerOnTable
                                    onPress={() => alert('Player 6')}
                                    isJoined={this.state.isJoinedPlayer6}
                                    top={Platform.isPad ? hp('28%') : hp('19%')}
                                    left={Platform.isPad ? wp('25%') : wp('22%')}
                                />
                                <PlayerOnTable
                                    onPress={() => alert('Player 7')}
                                    // top={Platform.isPad ? hp('17%') : hp('17%')}
                                    // left={Platform.isPad ? wp('2%') : wp('-3%')}
                                    isJoined={this.state.isJoinedPlayer7}
                                    top={Platform.isPad ? hp('25%') : hp('15.5%')}
                                    left={Platform.isPad ? wp('4%') : wp('-3%')}
                                />
                                <PlayerOnTable
                                    onPress={() => alert('Player 8')}
                                    // top={Platform.isPad ? hp('5%') : hp('5%')}
                                    // left={Platform.isPad ? wp('2%') : wp('-5%')}
                                    isJoined={this.state.isJoinedPlayer8}
                                    top={Platform.isPad ? hp('11%') : hp('7%')}
                                    left={Platform.isPad ? wp('-5%') : wp('-5%')}
                                />
                                <PlayerOnTable
                                    onPress={() => alert('Player 9')}
                                    // top={Platform.isPad ? wp('-8%') : wp('-8%')}
                                    // left={Platform.isPad ? wp('2%') : wp('10%')}
                                    isJoined={this.state.isJoinedPlayer9}
                                    top={Platform.isPad ? wp('-2%') : wp('-3%')}
                                    left={Platform.isPad ? wp('4%') : wp('-1%')}
                                />
                                <PlayerOnTable
                                    onPress={() => alert('Player 10')}
                                    // top={Platform.isPad ? wp('-6%') : wp('1%')}
                                    // left={Platform.isPad ? wp('40%') : wp('5%')}
                                    // top={Platform.isPad ? wp('-4%') : wp('-5%')}
                                    // left={Platform.isPad ? wp('8%') : wp('3%')}
                                    isJoined={this.state.isJoinedPlayer10}
                                    top={Platform.isPad ? hp('-5%') : hp('-5%')}
                                    left={Platform.isPad ? wp('25%') : wp('22%')}
                                />
                            </View>

                            <View style={styles.gameDetail}>
                                <View style={styles.innerGameDetailContainer}>
                                    <Text style={styles.title}>Game Type</Text>
                                    <Text style={styles.value}>NL Hold’em</Text>
                                </View>
                                <View style={styles.innerGameDetailContainer}>
                                    <Text style={styles.title}>Big Blind</Text>
                                    <Text style={styles.value}>1.00 (0.00)</Text>
                                </View>
                                <View style={styles.innerGameDetailContainer}>
                                    <Text style={styles.title}>Game Lengh</Text>
                                    <Text style={styles.value}>No limit</Text>
                                </View>
                                <View style={styles.innerGameDetailContainer}>
                                    <Text style={styles.title}>Action Time</Text>
                                    <Text style={styles.value}>20 secs</Text>
                                </View>
                                <View style={styles.innerGameDetailContainer}>
                                    <Text style={styles.title}>Buy-in Confirmation</Text>
                                    <Text style={styles.value}>8% Cap = 4.00</Text>
                                </View>
                                <View style={styles.innerGameDetailContainer}>
                                    <Text style={styles.title}>Tips Box</Text>
                                    <Text style={styles.value}>off</Text>
                                </View>
                                <View style={styles.innerGameDetailContainer}>
                                    <Text style={styles.title}>Record Privacy</Text>
                                    <Text style={styles.value}>off</Text>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                    <CommonButton
                        position={'absolute'}
                        bottom={Platform.isPad ? hp('2%') : Platform.OS == 'ios' ? hp('5%') : hp('3%')}
                        right={Platform.isPad ? wp('4%') : wp('5%')}
                        onPress={() => alert('Messages')}
                        imgUrl={require('../../assets/message_yellow.png')}
                    />
                </SafeAreaView>
            </Fragment>

        )
    }
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1, backgroundColor: '#002a5b', //width: Platform.OS == 'ios' ? wp('100%') : wp('100%')
    },
    scrollView: {
        flex: 1
    },
    container: {
        flex: 1, alignSelf: 'center', alignItems: 'center',
        marginTop: Platform.isPad ? hp('3%') : Platform.OS == 'android' ? hp('2%') : hp('1%'),
        width: Platform.isPad ? wp('90%') : wp('95%')
    },
    gameTable: {
        marginTop: Platform.isPad ? hp('13%') : hp('12%'),
        width: Platform.isPad ? wp('88%') : wp('100%'),
        height: Platform.isPad ? hp('35%') : Platform.OS == 'android' ? hp('27%') : hp('25%'),
        borderRadius: Platform.isPad ? wp('30%') : wp('30%'),
        borderWidth: Platform.isPad ? wp('3%') : wp('4%'),
        backgroundColor: '#10346f', //'#022D61',
        borderColor: '#155091',
        marginBottom: Platform.isPad ? hp('5%') : hp('2.5%'),
    },
    tablePlayer: {
        height: Platform.isPad ? wp('7.81%') : wp('12.08%'),
        width: Platform.isPad ? wp('7.81%') : wp('12.08%'),
        position: 'absolute',
        left: wp('75%') / 2,
        top: -40,
        backgroundColor: 'rgba(0, 110, 238, 0.4)'
    },
    gameDetail: {
        width: Platform.isPad ? wp('90%') : wp('90%'),
        //height: Platform.isPad ? wp() : wp('40%'),
        borderRadius: Platform.isPad ? wp('2.60%') : wp('3.86%'),
        borderWidth: Platform.isPad ? wp('0.19%') : wp('0.24%'),
        paddingHorizontal: Platform.isPad ? wp('4%') : wp('5%'),
        paddingVertical: Platform.isPad ? wp('3%') : wp('3%'),
        marginTop: Platform.isPad ? hp('1%') : hp('5%'),
        borderColor: '#006EEE',
        backgroundColor: '#031F41'
    },
    innerGameDetailContainer: {
        marginTop: Platform.isPad ? hp('1%') : hp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: ENV.light,
        fontSize: Platform.isPad ? wp('2.34%') : wp('3.38%'),
        lineHeight: Platform.isPad ? wp('3.52%') : wp('5.07%'),
        color: '#92AFC6',
        fontWeight: '300'
    },
    value: {
        fontFamily: ENV.semiBold,
        fontSize: Platform.isPad ? wp('2.34%') : wp('3.38%'),
        lineHeight: Platform.isPad ? wp('3.52%') : wp('5.07%'),
        color: '#C9E6FF',
        fontWeight: '600'
    }
})

// const select = (store) => {
//     return store;
// }

// export default connect(select)(GamePlay);