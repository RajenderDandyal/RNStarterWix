/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
//import SafeAreaView from 'react-native-safe-area-view';

class SafeAreaContainer extends Component {
  state = {};
  render() {
    let {withTab} = this.props;
    return (
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <View style={{flex: 1}}>{this.props.children}</View>
      </SafeAreaView>
    );
  }
}

export default SafeAreaContainer;
