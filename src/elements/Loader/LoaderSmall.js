import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

export default class LoaderSmall extends Component {
  render() {
    return (
      <View
        style={[
          styles.modalBackground,
          this.props.containerStyle ? this.props.containerStyle : {},
        ]}>
        <ActivityIndicator
          animating={this.props.loading || true}
          size={'small'}
          color={this.props.color || 'blue'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
