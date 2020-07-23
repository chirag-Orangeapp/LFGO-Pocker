import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class SwitchClass extends Component {

    render() {
        return (
            <View style={{ width: Platform.isPad ? wp('7%') : wp('12.08%') }}>
                <Switch
                    style={{ width: Platform.isPad ? wp('5.21%') : wp('12.08%') }}
                    trackColor={{ true: '#006EEE', false: '#787880' }}
                    thumbColor={'#C9E6FF'}
                    ios_backgroundColor={'#022D61'}
                    onValueChange={this.props.onValueChange}
                    value={this.props.value} />
            </View>
        )
    }
}

// _onToggleChange(){
//     this.setState({
//         isRDEEMessanger: !this.state.isRDEEMessanger
//     })
// }

// <Switch
//     onValueChange={() => this._onToggleChange()}
//     value={this.state.isEmailAlert} />