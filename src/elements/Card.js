import React, {Component} from 'react';
import {Card as Cards} from 'react-native-shadow-cards';
import {View} from 'react-native';

let Card = props => {
  return <Cards {...props}>{props.children}</Cards>;
};
export default Card;
// backgroundColor	string	'#ffffff'	card background color
//elevation	number	3	An attribute to set the elevation of the card, increases 'drop-shadow' of the card
//cornerRadius	number	5	Set the radius of the card
//opacity	number	0.5	Set the opacity of the card
