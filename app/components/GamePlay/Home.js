import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Platform, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import _ from 'lodash';
import ENV from '../../env';
import CommonButton from '../../common/CommonButton';
import GameHistory from './GameHistoryModal';
import GameSettings from './Settings';
import Messages from './Messages';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationArray: [
                { title: 'Lorem Ipsum Title', msg: 'Lorem ipsum dolor sit amet, consectet...' },
                { title: 'Lorem Ipsum Title', msg: 'Lorem ipsum dolor sit amet, consectet...' },
                { title: 'Lorem Ipsum Title', msg: 'Lorem ipsum dolor sit amet, consectet...' },
                { title: 'Lorem Ipsum Title', msg: 'Lorem ipsum dolor sit amet, consectet...' },
                { title: 'Lorem Ipsum Title', msg: 'Lorem ipsum dolor sit amet, consectet...' },
                { title: 'Lorem Ipsum Title', msg: 'Lorem ipsum dolor sit amet, consectet...' },
                { title: 'Lorem Ipsum Title', msg: 'Lorem ipsum dolor sit amet, consectet...' },
                { title: 'Lorem Ipsum Title', msg: 'Lorem ipsum dolor sit amet, consectet...' },
                { title: 'Lorem Ipsum Title', msg: 'Lorem ipsum dolor sit amet, consectet...' },
            ],
            gameHistoryArray: [
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
                { date: '2020-07-23', reason: 'LGFO Progressive', winningAmount: '+5538', balance: '+51' },
            ],
            isShowGameHistory: false,
            isShowGameSettings: false,
            switch1: false,
            switch2: false,
            switch3: false,
            isShowMessage: false
        }
    }

    componentDidMount() {

    }

    _onValueChange(value) {
        if (value == 1) {
            this.setState({
                switch1: !this.state.switch1
            })
        } else if (value == 2) {
            this.setState({
                switch2: !this.state.switch2
            })
        } else {
            this.setState({
                switch3: !this.state.switch3
            })
        }
    }

    renderNotificationItem(item) {
        //console.log("item ", item);
        let actualComponent = <View style={styles.renderContainer}>
            <View style={styles.renderImgContainer}>
                <Image
                    style={styles.renderImg}
                    source={require('../../assets/notification.png')}
                />
            </View>
            <View>
                <Text style={styles.renderTitleText}>{item.title}</Text>
                <Text style={styles.renderMsgText}>{item.msg}</Text>
            </View>
        </View>
        return actualComponent;
    }

    toggleGameHistory() {
        this.setState({
            isShowGameHistory: !this.state.isShowGameHistory
        })
    }

    toggleGameSettings() {
        this.setState({
            isShowGameSettings: !this.state.isShowGameSettings
        })
    }

    toggleGameMessage() {
        this.setState({
            isShowMessage: !this.state.isShowMessage
        })
    }

    render() {
        return (
            <Fragment>
                <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView
                        bounces={false}
                        style={styles.scrollView}>
                        <View style={styles.container}>

                            <View style={styles.detailContainer}>
                                <View style={styles.detaileView}>
                                    <Image
                                        style={styles.detailIconImg}
                                        source={require('../../assets/user_deafult_profile.png')}
                                    />
                                    <Text numberOfLines={1} style={styles.nameText}>Jacob</Text>
                                </View>
                                <View style={styles.detaileView}>
                                    <Image
                                        style={styles.detailIconImg}
                                        source={require('../../assets/poker_chip.png')}
                                    />
                                    <Text numberOfLines={1} style={styles.nameText}>6,791</Text>
                                </View>
                                <View style={styles.detaileView}>
                                    <Image
                                        style={styles.detailIconImg}
                                        source={require('../../assets/coin.png')}
                                    />
                                    <Text numberOfLines={1} style={[styles.nameText, { width: Platform.isPad ? wp('15%') : wp('11.5%'), }]}>28</Text>
                                    <TouchableOpacity
                                        onPress={() => alert('add')}
                                        style={styles.detailBtn}>
                                        <Image
                                            style={styles.detailBtnImg}
                                            source={require('../../assets/plus-circle.png')}
                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={styles.iconContainer}>
                                <View style={styles.btnContainer}>
                                    <CommonButton
                                        onPress={() => this.toggleGameHistory()}
                                        imgUrl={require('../../assets/clipboard.png')}
                                    />
                                    <CommonButton
                                        onPress={() => this.toggleGameSettings()}
                                        marginLeft={Platform.isPad ? wp('2%') : wp('3%')}
                                        imgUrl={require('../../assets/settings.png')}
                                    />
                                </View>
                                <View style={styles.btnContainer}>
                                    <CommonButton
                                        onPress={() => this.props.navigation.navigate('Tables')}
                                        imgUrl={require('../../assets/poker_Btn_chip_.png')}
                                    />
                                    <CommonButton
                                        onPress={() => this.toggleGameMessage()}
                                        marginLeft={Platform.isPad ? wp('2%') : wp('3%')}
                                        imgUrl={require('../../assets/message.png')}
                                    />
                                </View>
                            </View>

                            <Text style={styles.notificationText}>Notifications</Text>

                            <FlatList
                                bounces={false}
                                showsVerticalScrollIndicator={false}
                                style={styles.flatList}
                                data={this.state.notificationArray}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => this.renderNotificationItem(item)}
                            />
                        </View>
                        {this.state.isShowGameHistory &&
                            <GameHistory
                                header={'Game History'}
                                isVisible={this.state.isShowGameHistory}
                                data={this.state.gameHistoryArray}
                                onPress={() => this.toggleGameHistory()}
                            />
                        }

                        {this.state.isShowGameSettings &&
                            <GameSettings
                                header={'Settings'}
                                isVisible={this.state.isShowGameSettings}
                                onPress={() => this.toggleGameSettings()}

                                settingTitle1={'Learn ipsome'}
                                onValueChange={(value) => this._onValueChange(value)}
                                switch1={this.state.switch1}

                                settingTitle2={'Learn ipsome'}
                                onValueChange={(value) => this._onValueChange(value)}
                                switch2={this.state.switch2}

                                settingTitle3={'Learn ipsome'}
                                onValueChange={(value) => this._onValueChange(value)}
                                switch3={this.state.switch3}

                                settingTitle4={'Logout'}
                                onPressSettingsBtn={() => alert('Logout')}

                            />
                        }

                        {this.state.isShowMessage &&
                            <Messages
                                header={'Messages'}
                                isVisible={this.state.isShowMessage}
                                //data={this.state.gameHistoryArray}
                                onPress={() => this.toggleGameMessage()}
                            />
                        }

                    </ScrollView>

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
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '100%'
    },
    detaileView: {
        // width: Platform.isPad ? (wp('100%') / 3.57) : (wp('100%') / 3.93),
        // height: Platform.isPad ? wp('5.73%') : wp('8.21%'),
        borderWidth: Platform.isPad ? wp('0.19%') : wp('0.36%'),
        borderColor: '#006EEE',
        borderRadius: Platform.isPad ? wp('2.60%') : wp('9.66%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Platform.isPad ? wp('2%') : wp('2%'),
        paddingVertical: Platform.isPad ? wp('1%') : wp('1.5%'),
    },
    detailIconImg: {
        height: Platform.isPad ? wp('2.60%') : wp('4.34%'),
        width: Platform.isPad ? wp('2.60%') : wp('4.34%')
    },
    nameText: {
        fontSize: Platform.isPad ? wp('1.56%') : wp('3.38%'),
        fontFamily: ENV.light, color: '#C9E6FF',
        fontWeight: '300',
        width: Platform.isPad ? wp('19%') : wp('17%'),
        //marginRight: wp('1%'),
        marginLeft: Platform.isPad ? wp('2%') : wp('3%'),
        alignSelf: 'center',
        //backgroundColor: 'red',
        // lineHeight: Platform.isPad ? wp('2%') : wp('4%')
        marginTop: Platform.isPad ? wp('0.2%') : wp('0.5%')
    },
    detailBtn: {
        // borderRadius: Platform.isPad ? wp('1.95%') : wp('2.17%'),
        justifyContent: 'center'
    },
    detailBtnImg: {
        height: Platform.isPad ? wp('3.91%') : wp('4.34%'),
        width: Platform.isPad ? wp('3.91%') : wp('4.34%'),
    },
    iconContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: hp('3%') },
    btnContainer: { flexDirection: 'row' },
    notificationText: {
        alignSelf: 'flex-start',
        fontSize: Platform.isPad ? wp('6.25%') : wp('5.8%'), color: '#C9E6FF', marginTop: hp('1%'), marginBottom: hp('3%')
    },
    flatList: { height: Platform.isPad ? hp('65%') : hp('68%') },
    renderContainer: {
        width: Platform.isPad ? wp('90%') : wp('95%'),
        backgroundColor: '#33456B',
        borderWidth: Platform.isPad ? wp('0.19%') : wp('0.36%'),
        borderRadius: Platform.isPad ? wp('2.60%') : wp('3.86%'),
        borderColor: '#006EEE',
        flexDirection: 'row',
        padding: Platform.isPad ? wp('3%') : wp('5%'),
        marginTop: Platform.isPad ? hp('1%') : hp('1%'),
    },
    renderImgContainer: { width: Platform.isPad ? wp('8%') : wp('12%'), justifyContent: 'center' },
    renderImg: {
        height: Platform.isPad ? wp('5.21%') : wp('7.25%'),
        width: Platform.isPad ? wp('5.21%') : wp('7.25%'),
    },
    renderTitleText: {
        fontSize: Platform.isPad ? wp('3.13%') : wp('3.86%'),
        lineHeight: Platform.isPad ? wp('4.68%') : wp('5.8%'),
        color: '#C9E6FF',
        fontFamily: ENV.medium, fontWeight: '500'
    },
    renderMsgText: {
        marginTop: Platform.isPad ? hp('1%') : hp('1%'),
        fontSize: Platform.isPad ? wp('2.34%') : wp('3.38%'),
        lineHeight: Platform.isPad ? wp('3.52%') : wp('5.8%'),
        color: '#92AFC6',
        fontFamily: ENV.light, fontWeight: '300'
    },
})



// const select = (store) => {
//     return store;
// }

// export default connect(select)(Home);


