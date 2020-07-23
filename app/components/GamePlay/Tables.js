import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Platform, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import _ from 'lodash';
import Header from '../../common/Header';
import GradientButton from '../../common/GradientButton';
import GradientStatus from '../../common/GradientStatus';
import TableModal from '../../common/TableModal';

export default class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tablesArray: [
                { tableName: 'NL Hold’em', tabledate: '2020 - 05 - 12 12:19', tableSize: '2/3', tableAmount: '1.00/0.50', isPreparing: true, isLive: false },
                { tableName: 'NL Hold’em', tabledate: '2020 - 05 - 12 12:19', tableSize: '8/10', tableAmount: '1.00/0.50', isPreparing: false, isLive: true },
                { tableName: 'NL Hold’em', tabledate: '2020 - 05 - 12 12:19', tableSize: '2/3', tableAmount: '1.00/0.50', isPreparing: false, isLive: false },
                { tableName: 'NL Hold’em', tabledate: '2020 - 05 - 12 12:19', tableSize: '2/3', tableAmount: '1.00/0.50', isPreparing: false, isLive: false },
                { tableName: 'NL Hold’em', tabledate: '2020 - 05 - 12 12:19', tableSize: '2/3', tableAmount: '1.00/0.50', isPreparing: false, isLive: false },
            ],
            tablePlayerArray: [
                { name: 'Phil Rivers', chips: '6791' },
                { name: 'Phil Rivers', chips: '6791' },
                { name: 'Phil Rivers', chips: '6791' },
                { name: 'Phil Rivers', chips: '6791' },
                { name: 'Phil Rivers', chips: '6791' },
                { name: 'Phil Rivers', chips: '6791' },
                { name: 'Phil Rivers', chips: '6791' },
            ],
            nameModal: false
        }
    }

    componentDidMount() {

    }

    renderTablesItem(item) {
        console.log("item ", item);
        let actualComponent =
            <>
                <View style={styles.renderContainer}>
                    {item.isPreparing ? <GradientStatus
                        width={Platform.isPad ? wp('17.58%') : wp('28.75%')}
                        paddingVertical={Platform.isPad ? wp('3.5%') : wp('3.5%')}
                        // height={Platform.isPad ? hp('28%') : wp('6.04%')}
                        marginTop={Platform.isPad ? wp('-6.52%') : wp('-9.52%')}
                        greenShadow={true}
                        btnText={'Preparing'}
                    /> : item.isLive ?
                            <GradientStatus
                                width={Platform.isPad ? wp('17.58%') : wp('28.75%')}
                                paddingVertical={Platform.isPad ? wp('3.5%') : wp('3.5%')}
                                // height={Platform.isPad ? hp('28%') : wp('6.04%')}
                                marginTop={Platform.isPad ? wp('-6.52%') : wp('-9.52%')}
                                //greenShadow={true}
                                btnText={'Live'}
                            />
                            : null
                    }
                    <Text style={[styles.renderTableDateText, { marginTop: (item.isLive || item.isPreparing) ? hp('-3%') : ((item.isLive || item.isPreparing) && Platform.OS == 'ios') ? null : null }]}>{item.tabledate}</Text>

                    <View style={styles.renderInnerContainer}>
                        <View>
                            <Text style={styles.renderTableName}>{item.tableName}</Text>
                            <Text style={styles.renderTableAmount}>{item.tableAmount}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.toggleModal()}
                            style={styles.renderTableSizeContainer}>
                            <Image
                                style={styles.renderProfileImg}
                                source={require('../../assets/user_deafult_profile.png')}
                            />
                            <Text style={styles.renderTableSize}>{item.tableSize}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {(item.isLive || item.isPreparing) && <GradientButton
                    width={Platform.isPad ? wp('27.93%') : wp('28.75%')}
                    height={Platform.isPad ? wp('9.11%') : wp('10.63%')}
                    marginTop={Platform.isPad ? wp('-4.85%') : wp('-5.32%')}
                    blueShadow={true}
                    onPress={() => this.props.navigation.navigate('GamePlay')}
                    btnText={'Join'}
                />}
            </>
        return actualComponent;
    }

    render() {
        return (
            <Fragment>
                <SafeAreaView style={styles.safeAreaView}>
                    <Header
                        onPress={() => this.props.navigation.goBack()}
                        previosuScreenName={'Home'}
                        headerText={'Tables'}
                    />
                    <ScrollView
                        bounces={false}
                        style={styles.scrollView}>
                        <View style={styles.container}>
                            <FlatList
                                bounces={false}
                                showsVerticalScrollIndicator={false}
                                data={this.state.tablesArray}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => this.renderTablesItem(item)}
                            />
                        </View>

                    </ScrollView>
                    <TableModal
                        isVisible={this.state.nameModal}
                        header={'NL Hold’em'}
                        data={this.state.tablePlayerArray}
                        onPress={() => this.toggleModal()}
                    />
                </SafeAreaView>
            </Fragment>

        )
    }

    toggleModal() {
        this.setState({
            nameModal: !this.state.nameModal
        })
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
    renderContainer: {
        width: Platform.isPad ? wp('90%') : wp('95%'),
        borderWidth: Platform.isPad ? wp('0.19%') : wp('0.24%'),
        borderRadius: Platform.isPad ? wp('2.60%') : wp('3.86%'),
        borderColor: '#006EEE',
        alignSelf: 'center', justifyContent: 'space-between', //alignItems: 'center',
        marginTop: hp('5%'),
        paddingHorizontal: Platform.isPad ? wp('3%') : wp('4%'),
        paddingVertical: Platform.isPad ? wp('3%') : wp('3%'),
    },
    renderTableDateText: {
        color: '#92AFC6',
        fontSize: Platform.isPad ? wp('3.38%') : wp('3.38%'),
        textAlign: 'right',

        //right: wp('3.38%')
    },
    renderInnerContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    renderTableName: {
        color: '#C9E6FF',
        fontSize: Platform.isPad ? wp('3.13%') : wp('4.34%'),
        lineHeight: Platform.isPad ? wp('4.68%') : wp('6.52%'),
        alignSelf: 'center'
    },
    renderTableAmount: {
        color: '#92AFC6',
        fontSize: Platform.isPad ? wp('2.34%') : wp('3.86%'),
        lineHeight: Platform.isPad ? wp('3.52%') : wp('5.8%'),
        textAlign: 'left',
        marginTop: wp('1%')
    },
    renderTableSize: {
        color: '#C9E6FF',
        alignSelf: 'center',
        fontSize: Platform.isPad ? wp('1.56%') : wp('3.38%'),
        lineHeight: Platform.isPad ? wp('2.60%') : wp('5.07%'),
        marginLeft: Platform.isPad ? wp('1%') : wp('2%')
    },
    renderTableSizeContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        height: Platform.isPad ? wp('5.73%') : wp('8.21%'),
        paddingHorizontal: Platform.isPad ? wp('2.5%') : wp('2%'),
        borderWidth: Platform.isPad ? wp('0.19%') : wp('0.36%'),
        borderRadius: Platform.isPad ? wp('2.60%') : wp('3.86%'),
        borderColor: '#006EEE',
    },
    renderProfileImg: {
        height: Platform.isPad ? wp('2.60%') : wp('4.34%'),
        width: Platform.isPad ? wp('2.60%') : wp('4.34%'),
        alignSelf: 'center',
    }
})



// const select = (store) => {
//     return store;
// }

// export default connect(select)(Home);


