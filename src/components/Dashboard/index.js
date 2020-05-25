/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Navigation} from 'react-native-navigation';
const {height} = Dimensions.get('window');

class Dashboard extends React.Component {
  static options() {
    return {
      topBar: {
        leftButtons: {
          id: 'sideMenu',
          icon: require('../../assets/img/open-menu.png'),
        },
      },
    };
  }

  constructor(props) {
    super(props);
    //Navigation.events().bindComponent(this);
  }

  render() {
    return (
      <View>
        <Text>Click the hamburger icon to open the side menu</Text>
      </View>
    );
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'sideMenu') {
      Navigation.mergeOptions(this, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  }
}
export default Dashboard = React.memo(Dashboard);
