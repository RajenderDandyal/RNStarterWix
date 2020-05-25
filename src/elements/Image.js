import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import brokenImageIcon from '../assets/img/lock.png';
class AppImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false,
    };
  }

  render() {
    let props = this.props;

    return (
      <>
        {this.state.error ? (
          <>
            <Image
              source={brokenImageIcon}
              style={props.style}
              //resizeMode="contain"
            />
          </>
        ) : (
          <Image
            onLoadEnd={() => this.setState({isLoading: false})}
            onError={(error) => {
              this.setState({error});
            }}
            {...props}
          />
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  errorImage: {
    width: '90%',
    height: '90%',
    maxWidth: 100,
    maxHeight: 100,
    tintColor: '#CFCFCF',
  },
});

export default AppImage;
