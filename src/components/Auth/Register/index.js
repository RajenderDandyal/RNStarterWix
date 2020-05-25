/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {
  Text,
  SafeAreaContainer,
  LoaderSmall,
  Image,
  Card,
  ButtonBlue,
} from '../../../elements';

import constants from '../../../constants';

import {formStyles} from '../../../utils/FormActions/FormStyles.js';
import {HandleChange, Validation} from '../../../utils/FormActions/FormActions';

class Register extends React.PureComponent {
  state = {
    loading: false,
    completeFormValidity: false,
    formData: {
      name: {
        type: 'name',
        value: '',
        label: 'Name',
        rules: {
          required: true,
          minLength: 3,
          maxLength: 60,
          //isEmail: false,
        },
        isValid: true,
        errorMsg: 'REQUIRED!! And should between 3-60 characters long',
        touched: false,
      },
      email: {
        type: 'email',
        value: '',
        label: 'Email',
        rules: {
          required: true,
          minLength: 3,
          maxLength: 60,
          isEmail: true,
        },
        isValid: true,
        errorMsg: 'REQUIRED!! And should be a valid email',
        touched: false,
      },
      phone: {
        type: 'phone',
        value: '',
        label: 'Phone Number*',
        rules: {
          required: true,
          minLength: 10,
          maxLength: 10,
          isNumeric: true,
        },
        isValid: true,
        errorMsg: 'REQUIRED!! And should be a valid phone number',
        touched: false,
      },
      password: {
        type: 'password',
        value: '',
        label: 'Password',
        rules: {
          required: true,
          minLength: 6,
          maxLength: 60,
        },
        isValid: true,
        errorMsg: 'REQUIRED!! And should 6-60 character long',
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
    this.props.onSignup();
  };
  render() {
    let {formData, loading} = this.state;
    console.log(this.state);
    return (
      <SafeAreaContainer>
        <ScrollView>
          <View style={formStyles.formWrapper}>
            <Text
              weight="Bold"
              type="h1"
              style={{textAlign: 'center', margin: 20}}>
              Sign In
            </Text>
            <View style={formStyles.form}>
              <Card style={formStyles.inputContainer}>
                <Image
                  source={require('../../../assets/img/user.png')}
                  style={formStyles.inputIcon}
                  resizeMode="contain"
                />
                <TextInput
                  placeholder={formData.name.label}
                  style={formStyles.input}
                  placeholderTextColor={constants.Colors.Gray}
                  onChangeText={(text) =>
                    this.onChangehandler(formData.name.type, text)
                  }
                  value={formData.name.value}
                  onBlur={() => this.checkValidity(formData.name.type)}
                />
              </Card>
              <View style={{width: '100%', alignItems: 'flex-start'}}>
                <Text
                  style={
                    !formData.name.isValid
                      ? formStyles.errorText
                      : {display: 'none'}
                  }>
                  {!formData.name.isValid ? formData.name.errorMsg : ''}
                </Text>
              </View>
              <Card style={formStyles.inputContainer}>
                <Image
                  source={require('../../../assets/img/mail.png')}
                  style={formStyles.inputIcon}
                  resizeMode="contain"
                />
                <TextInput
                  placeholder={formData.email.label}
                  style={formStyles.input}
                  placeholderTextColor={constants.Colors.Gray}
                  onChangeText={(text) =>
                    this.onChangehandler(formData.email.type, text)
                  }
                  //onSubmitEditing={(event) => this.checkValidity(formData.email.type)}
                  value={formData.email.value}
                  onBlur={() => this.checkValidity(formData.email.type)}
                  // onSubmitEditing={() =>
                  //   this.checkValidity(formData.email.type)
                  // }
                />
              </Card>
              <View style={{width: '100%', alignItems: 'flex-start'}}>
                <Text
                  style={
                    !formData.email.isValid
                      ? formStyles.errorText
                      : {display: 'none'}
                  }>
                  {!formData.email.isValid ? formData.email.errorMsg : ''}
                </Text>
              </View>
              <Card style={formStyles.inputContainer}>
                <Image
                  source={require('../../../assets/img/smartphone.png')}
                  style={formStyles.inputIcon}
                  resizeMode="contain"
                />
                <TextInput
                  placeholder={formData.phone.label}
                  style={formStyles.input}
                  placeholderTextColor={constants.Colors.Gray}
                  onChangeText={(text) =>
                    this.onChangehandler(formData.phone.type, text)
                  }
                  //onSubmitEditing={(event) => this.checkValidity(formData.phone.type)}
                  value={formData.phone.value}
                  onBlur={() => this.checkValidity(formData.phone.type)}
                  // onSubmitEditing={() =>
                  //   this.checkValidity(formData.phone.type)
                  // }
                />
                {/* <TouchableOpacity style={formStyles.verifyContainer}>
              <Text style={formStyles.verify}>Verify</Text>
            </TouchableOpacity> */}
              </Card>
              <View style={{width: '100%', alignItems: 'flex-start'}}>
                <Text
                  style={
                    !formData.phone.isValid
                      ? formStyles.errorText
                      : {display: 'none'}
                  }>
                  {!formData.phone.isValid ? formData.phone.errorMsg : ''}
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
                  //onSubmitEditing={(event) => this.checkValidity(formData.password.type)}
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
                  paddingTop: 40,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{paddingBottom: 15}}>
                  By Singing up your Agree to Our TC *
                </Text>
                <ButtonBlue
                  title="Signup"
                  handleButtonPress={this.submitFormHandler}
                  loading={loading}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaContainer>
    );
  }
}

export default Register;
