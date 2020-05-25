// @ts-nocheck
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {registerScreens} from './src/config/navigation/routes';
import store from './src/store/setup';
import screenNames from './src/config/navigation/screenNames.js';
Navigation.events().registerAppLaunchedListener(() => {
  registerScreens();
  Navigation.setRoot({
    root: {
      component: {
        name: screenNames.loader,
      },
    },
  });
});
