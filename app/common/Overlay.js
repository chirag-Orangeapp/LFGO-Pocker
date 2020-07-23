
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ENV from '../env';
// import { connect } from 'react-redux';
import Modal from 'react-native-modal';

export default class Overlay extends Component {
    render() {
        return (
            <View style={styles.container}>
                < Modal
                    coverScreen={false}
                    animationType='slide'
                    avoidKeyboard={true}
                    visible={this.props.isVisible}
                    hasBackdrop={true}
                    backdropColor={'#05162C'}
                    backdropOpacity={0.7}
                >

                    <View style={{ backgroundColor: 'red', padding: wp('5%'), }}>
                        <View style={styles.headerContainer}>
                            <Text style={{ color: 'white' }}>Hello</Text>
                        </View>
                    </View>
                </Modal >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#05162C',
        opacity: 0.7,
        height: hp('100%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    headerContainer: {
        flexDirection: 'row'
    }
});

// const select = (store) => {
//     return store;
// }

// export default connect(select)(Overlay);