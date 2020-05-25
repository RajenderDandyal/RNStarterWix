/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Text, LoaderSmall, Image, Card, ButtonBlue} from '../../../elements';

import constants from '../../../constants';

import {formStyles} from '../../../utils/FormActions/FormStyles.js';
import {HandleChange, Validation} from '../../../utils/FormActions/FormActions';

class SignIn extends React.PureComponent {
  state = {
    loading: false,
    completeFormValidity: false,
    formData: {
      emailOrPhone: {
        type: 'emailOrPhone',
        value: '',
        label: 'Email/Phone Number',
        rules: {
          required: true,
          minLength: 3,
          maxLength: 30,
          //isEmail: false,
        },
        isValid: true,
        errorMsg: 'REQUIRED!! And should be email or phone number',
        touched: false,
      },
      password: {
        type: 'password',
        value: '',
        label: 'Password',
        rules: {
          required: true,
          minLength: 3,
          maxLength: 30,
          //isEmail: false,
        },
        isValid: true,
        errorMsg: 'REQUIRED!! And should be min 6 character long',
        touched: false,
      },
    },
  };

  componentDidMount() {}
  checkValidity = (key) => {
    console.log('checkValidity');
    this.setState(Validation(key, this.state));
  };

  onChangehandler = (key, text) => {
    this.setState(HandleChange(key, text, this.state));
  };
  handlePress = () => {
    console.log('handlesdsd');
    //this.props.navigation.navigate('AppStack');
  };
  handleTabpress = (type) => {
    this.setState((state) => {
      return {signUp: !state.signUp, signIn: !state.signIn};
    });
  };

  submitFormHandler = () => {
    this.props.onLogin();
  };
  render() {
    let {formData, loading} = this.state;
    console.log(this.state);
    return (
      <View style={formStyles.formWrapper}>
        <Text weight="Bold" type="h1" style={{textAlign: 'center', margin: 20}}>
          Sign In
        </Text>
        <View style={formStyles.form}>
          <Card style={formStyles.inputContainer}>
            <Image
              source={require('../../../assets/img/smartphone.png')}
              style={formStyles.inputIcon}
              resizeMode="contain"
            />
            <TextInput
              placeholder={formData.emailOrPhone.label}
              style={formStyles.input}
              placeholderTextColor={constants.Colors.Gray}
              onChangeText={(text) =>
                this.onChangehandler(formData.emailOrPhone.type, text)
              }
              value={formData.emailOrPhone.value}
              onBlur={() => this.checkValidity(formData.emailOrPhone.type)}
            />
          </Card>
          <View style={{width: '100%', alignItems: 'flex-start'}}>
            <Text
              style={
                !formData.emailOrPhone.isValid
                  ? formStyles.errorText
                  : {display: 'none'}
              }>
              {!formData.emailOrPhone.isValid
                ? formData.emailOrPhone.errorMsg
                : ''}
            </Text>
          </View>
          <Card style={formStyles.inputContainer}>
            <Image
              source={require('../../../assets/img/lock.png')}
              style={formStyles.inputIcon}
              resizeMode="contain"
            />
            <TextInput
              secureTextEntry={true}
              placeholder={formData.password.label}
              style={formStyles.input}
              placeholderTextColor={constants.Colors.Gray}
              onChangeText={(text) =>
                this.onChangehandler(formData.password.type, text)
              }
              //onSubmitEditing={(event) => this.checkValidity(formData.email.type)}
              value={formData.password.value}
              onBlur={() => this.checkValidity(formData.password.type)}
              // onSubmitEditing={() =>
              //   this.checkValidity(formData.password.type)
              // }
            />
          </Card>
          <View style={{width: '100%', alignItems: 'flex-start'}}>
            <Text
              style={
                !formData.password.isValid
                  ? formStyles.errorText
                  : {display: 'none'}
              }>
              {!formData.password.isValid ? formData.password.errorMsg : ''}
            </Text>
          </View>
          <View
            style={{
              paddingTop: 70,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ButtonBlue
              title="Login"
              handleButtonPress={this.submitFormHandler}
              loading={loading}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SignIn;
