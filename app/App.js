import React, { Component, Fragment } from 'react';
import { View, KeyboardAvoidingView, LogBox } from 'react-native';

import AppNavigator from './AppNavigator';

// import { Provider } from 'react-redux';
// import configureStore from './store/ConfigureStore';

// const store = configureStore();

export default class App extends Component {

    componentDidMount() {
        LogBox.ignoreAllLogs(false)
    }

    render() {
        return (
            <Fragment>
                <View style={{ flex: 1, backgroundColor: '#002A5B' }}>
                    {/* <Provider store={store}> */}
                    {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? "padding" : "height"}> */}
                    <AppNavigator />
                    {/* </KeyboardAvoidingView> */}
                    {/* </Provider> */}
                </View>
            </Fragment>
        )
    }
}