import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {TextSize} from '../helpers/TextSize';

const styles = StyleSheet.create({
  baseStyle: {
    color: 'black',
    backgroundColor: 'transparent',
  },
});

const getFontSize = (type) => {
  let fontSize;
  switch (type) {
    case 'h1':
      fontSize = TextSize.h1;
      break;
    case 'h2':
      fontSize = TextSize.h2;
      break;
    case 'p':
      fontSize = TextSize.p;
      break;
    case 'small':
      fontSize = TextSize.small;
      break;
    case 'extraSmall':
      fontSize = TextSize.extraSmall;
      break;
    default:
      fontSize = TextSize.p;
      break;
  }
  return fontSize;
};

const AppText = (props) => {
  const {children, type = 'p', weight = 'Regular', ...textProps} = props;
  return (
    <Text
      {...textProps}
      style={[
        styles.baseStyle,
        {fontFamily: `Robotto-${weight}`, fontSize: getFontSize(type)},
        textProps.style,
      ]}>
      {children}
    </Text>
  );
};

AppText.propTypes = {
  weight: PropTypes.oneOf([
    'Regular',
    'ExtraBold',
    'SemiBold',
    'ExtraLight',
    'Light',
    'Medium',
    'Bold',
    'BoldItalic',
    'Regular',
    'Italic',
    'SemiBoldItalic',
  ]),
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default AppText;
