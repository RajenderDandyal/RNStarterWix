import {StyleSheet, Platform} from 'react-native';
import {scale, moderateScale} from '../../helpers/ResponsiveFonts';
import constants from '../../constants';

const formStyles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  form: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    margin: 16,

    paddingHorizontal: 15,
  },
  heading: {
    margin: 15,
    fontWeight: 'bold',
  },
  helperText: {
    //color: themeConstants.secondary,
    fontSize: 10,
  },
  input: {
    width: '100%',
    fontSize: 18,
    color: constants.Colors.Gray,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 0,
    borderColor: 'black',
    paddingHorizontal: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
    position: 'relative',
  },
  verifyContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inputIcon: {
    width: moderateScale(20),
    height: moderateScale(30),
    tintColor: 'black',
    marginHorizontal: 10,
  },
  verify: {
    color: 'blue',
  },
  pickerWrapper: {
    width: '50%',
    height: 55,
    paddingTop: 15,
    paddingBottom: 0,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // paddingLeft: 30,
    // paddingRight: 30,
  },

  btnContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 35,
    paddingVertical: 15,
    backgroundColor: constants.Colors.Blue,
    borderRadius: 30,
    flexDirection: 'row',
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    paddingVertical: 0,
    margin: 5,
  },
  errorInput: {
    width: 250,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    paddingBottom: 0,
  },
  imageAndLoadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export {formStyles};
