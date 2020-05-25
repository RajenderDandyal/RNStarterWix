/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Text from './Text.js';
import LoaderSmall from './Loader/LoaderSmall';
import constants from '../constants';

class ButtonBlue extends Component {
  state = {};

  render() {
    let {title, containerStyle, handleButtonPress, loading} = this.props;
    console.log('buttonblue====', constants.Colors);
    return (
      <TouchableOpacity
        onPress={handleButtonPress}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          backgroundColor: constants.Colors.Blue,
          borderRadius: 50,
          width: '80%',
        }}>
        <Text weight="SemiBold" type="h2" style={{color: '#fff'}}>
          {title}
        </Text>
        {loading ? <LoaderSmall color={'#fff'} /> : null}
      </TouchableOpacity>
    );
  }
}

export default ButtonBlue;
