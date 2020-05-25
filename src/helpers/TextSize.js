/* eslint-disable prettier/prettier */
import {Platform} from 'react-native';
import {scale} from './ResponsiveFonts';

export const TextSize = {
  h1: Platform.OS === 'ios' ? scale(24) : scale(25),
  h2: Platform.OS === 'ios' ? scale(18) : scale(19),
  p: Platform.OS === 'ios' ? scale(14) : scale(15),
  small: Platform.OS === 'ios' ? scale(11) : scale(12),
  extraSmall: Platform.OS === 'ios' ? scale(8) : scale(10),
};
